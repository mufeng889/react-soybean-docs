import path from 'node:path';
import process from 'node:process';
import { defineConfig } from 'dumi';
import Icons from 'unplugin-icons/webpack';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import AutoImport from 'unplugin-auto-import/webpack';
import IconsResolver from 'unplugin-icons/resolver';

const VITE_ICON_PREFIX = 'icon';
const VITE_ICON_LOCAL_PREFIX = 'icon-local';
const localIconPath = path.join(process.cwd(), 'public/assets/svg-icon');
const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '');
console.log(collectionName);
console.log(localIconPath);

export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive'
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
  }
});
