import path from 'node:path';
import process from 'node:process';
import { defineConfig } from 'dumi';
import Icons from 'unplugin-icons/webpack';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import AutoImport from 'unplugin-auto-import/webpack';
import IconsResolver from 'unplugin-icons/resolver';
import remarkAntd from './.dumi/remarkAntd';

const VITE_ICON_PREFIX = 'icon';
const VITE_ICON_LOCAL_PREFIX = 'icon-local';
const localIconPath = path.join(process.cwd(), 'public/assets/svg-icon');
const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '');

export default defineConfig({
  outputPath: 'docs-dist',
  mako: {},
  hash: true,
  crossorigin: {},
  exportStatic: {},
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }]
  },
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' }
  ],
  chainWebpack(memo) {
    memo.plugin('icons').use(
      Icons({
        compiler: 'jsx',
        customCollections: {
          [collectionName]: FileSystemIconLoader(localIconPath, svg =>
            svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
          )
        },
        scale: 1,
        jsx: 'react',
        defaultClass: 'inline-block'
      })
    );

    memo.plugin('autoImport').use(
      AutoImport({
        include: [/\.[tj]sx?$/],
        dts: 'types/auto-imports.d.ts',
        resolvers: [
          IconsResolver({
            prefix: VITE_ICON_PREFIX,
            extension: 'jsx',
            customCollections: [collectionName],
            componentPrefix: VITE_ICON_PREFIX
          })
        ]
      })
    );
  },
  extraRemarkPlugins: [remarkAntd],
  headScripts: [
    `
    (function () {
      function isLocalStorageNameSupported() {
        const testKey = 'test';
        const storage = window.localStorage;
        try {
          storage.setItem(testKey, '1');
          storage.removeItem(testKey);
          return true;
        } catch (error) {
          return false;
        }
      }
      // 优先级提高到所有静态资源的前面，语言不对，加载其他静态资源没意义
      const pathname = location.pathname;

      function isZhCN(pathname) {
        return /-cn\\/?$/.test(pathname);
      }
      function getLocalizedPathname(path, zhCN) {
        const pathname = path.indexOf('/') === 0 ? path : '/' + path;
        if (!zhCN) {
          // to enUS
          return /\\/?index(-cn)?/.test(pathname) ? '/' : pathname.replace('-cn', '');
        } else if (pathname === '/') {
          return '/index-cn';
        } else if (pathname.indexOf('/') === pathname.length - 1) {
          return pathname.replace(/\\/$/, '-cn/');
        }
        return pathname + '-cn';
      }

      // 兼容旧的 URL， \`?locale=...\`
      const queryString = location.search;
      if (queryString) {
        const isZhCNConfig = queryString.indexOf('zh-CN') > -1;
        if (isZhCNConfig && !isZhCN(pathname)) {
          location.pathname = getLocalizedPathname(pathname, isZhCNConfig);
        }
      }

      // 首页无视链接里面的语言设置 https://github.com/ant-design/ant-design/issues/4552
      if (isLocalStorageNameSupported() && (pathname === '/' || pathname === '/index-cn')) {
        const lang =
          (window.localStorage && localStorage.getItem('locale')) ||
          ((navigator.language || navigator.browserLanguage).toLowerCase() === 'zh-cn'
            ? 'zh-CN'
            : 'en-US');
        // safari is 'zh-cn', while other browser is 'zh-CN';
        if ((lang === 'zh-CN') !== isZhCN(pathname)) {
          location.pathname = getLocalizedPathname(pathname, lang === 'zh-CN');
        }
      }
      document.documentElement.className += isZhCN(pathname) ? 'zh-cn' : 'en-us';
    })();
    `
  ]
});
