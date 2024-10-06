---
group: 开始
order: 2
title: 快速开始
---

本文会帮助你从头启动项目

---

## 环境准备

确保你的环境满足以下要求：

- **git**: 你需要git来克隆和管理项目版本。[安装教程](../tutorial/git.md)
- **NodeJS**: >=18.12.0，推荐 18.19.0 或更高。[安装教程](../tutorial/nodejs.md)
- **pnpm**: >= 8.7.0，推荐最新版本。

---

### Mock
本项目借助 [Apifox](https://apifox.com/) 的云端mock功能实现mock请求，接口文档：[soybean-admin-mock](https://apifox.com/apidoc/shared-35c8727a-d3ab-47e9-8863-ef8e37df6887?pwd=F6LN1ArU)

## VSCode插件

本项目推荐使用 VSCode 进行开发，项目里面已内置 VSCode 配置，包含推荐的插件和设置。

以下为推荐的插件：

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - 自动添加 HTML/XML 结束标签
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - 为 HTML/XML 添加关闭标签和自动重命名成对的标签
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - 自动重命名成对的 HTML/XML 标签
- [Color Highlight](https://github.com/naumovs/vscode-ext-color-highlight) - 颜色高亮插件
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - 高亮.env 文件
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 统一不同编辑器的一些配置
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码检查
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - Git 图形化操作工具
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - 显示具体某行代码的 git 信息
- [Icônes](https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones) - 搜索 iconify 图标的插件
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标实时显示的插件
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 国际化插件
- [javascript console utils](https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils) - 提供快捷键 ctrl+l 直接输入 console.log()
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - 图标主题，显示文件和文件多种图标
- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) - 主题
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化插件
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - unocss 写法提示插件

## 代码获取

### 从 GitHub 获取代码

```bash
# 克隆代码
git clone https://github.com/mufeng889/react-soybean-admin.git
```

### 从 Gitee 获取代码

<!-- ```bash
# 克隆代码
git clone https://gitee.com/honghuangdc/soybean-admin.git
``` -->

:::warning{title=注意}
最新版本的代码以 github 为准。
:::

### 安装依赖

安装项目依赖

```bash
pnpm i
```

## npm scripts

```json
{
  // 构建打包(prod环境)
  "build": "vite build --mode prod",
  // 构建打包(test环境)
  "build:test": "vite build --mode test",
  // 删除主项目及子项目的 node_modules, dist, pnpm-lock.yaml
  "cleanup": "sa cleanup",
  // 提交代码 (生成符合 Conventional Commits standard 的提交信息)
  "commit": "sa git-commit",
  // 本地运行(test环境)
  "dev": "vite --mode test",
  // 本地运行(prod环境)
  "dev:prod": "vite --mode prod",
  // 生成路由并且生成一个基础的路由文件
  "gen-route": "sa gen-route",
  // eslint检查并自动修复
  "lint": "eslint . --fix",
  // 初始化 simple-git-hooks
  "prepare": "simple-git-hooks",
  // 本地环境预览构建后的dist
  "preview": "vite preview",
  // 发布
  "release": "sa release",
  // react文件的ts检查
  "typecheck": "vue-tsc --noEmit --skipLibCheck",
  // 更新依赖包
  "update-pkg": "sa update-pkg"
}
```

## 目录说明

<Tree>
  <ul>
    <li>
      .vscode
      <small>vscode插件和设置</small>
      <ul>
        <li>
          extensions.json
          <small>vscode推荐的插件</small>
        </li>
        <li>
          launch.json
          <small>debug配置文件(debug React 和 TS)</small>
        </li>
        <li>
          settings.json
          <small>vscode配置(在该项目中生效，可以复制到用户配置文件中)</small>
        </li>
      </ul>
    </li>
    <li>
      build
      <small>vite构建相关配置和插件</small>
      <ul>
        <li>
          config
          <small>构建打包配置</small>
          <ul>
            <li>
              proxy.ts
              <small>网络请求代理</small>
            </li>
          </ul>
        </li>
        <li>
          plugins
          <small>构建插件</small>
          <ul>
            <li>
              index.ts
              <small>插件汇总</small>
            </li>
            <li>
              router.ts
              <small>elegant-router插件</small>
            </li>
            <li>
              unocss.ts
              <small>unocss插件</small>
            </li>
            <li>
              unplugin.ts
              <small>自动导入UI组件、自动解析iconify图标、自动解析本地svg作为图标</small>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      packages
      <small>子项目</small>
      <ul>
        <li>
          axios
          <small>网络请求封装</small>
        </li>
        <li>
          color-palette
          <small>颜色调色板</small>
        </li>
        <li>
          hooks
          <small>组合式函数hooks</small>
        </li>
        <li>
          materials
          <small>组件物料</small>
        </li>
        <li>
          simple-router
          <small>基于vue-router,简单的实现了部分vue-router的功能帮助vue的伙伴更好的上手react</small>
        </li>
        <li>
          ofetch
          <small>网络请求封装</small>
        </li>
        <li>
          scripts
          <small>脚本</small>
        </li>
        <li>
          uno-preset
          <small>uno-preset配置</small>
        </li>
        <li>
          utils
          <small>工具函数</small>
        </li>
      </ul>
    </li>
    <li>
      public
      <small>公共目录(文件夹里面的资源打包后会在根目录下)</small>
      <ul>
        <li>
          favicon.svg
          <small>网站标签图标</small>
        </li>
      </ul>
    </li>
    <li>
      src
      <ul>
        <li>
          assets
          <small>静态资源</small>
          <ul>
            <li>
              imgs
              <small>图片</small>
            </li>
            <li>
              svg-icon
              <small>本地svg图标</small>
            </li>
          </ul>
        </li>
        <li>
          components
          <small>全局组件</small>
          <ul>
            <li>
              advanced
              <small>高级组件</small>
            </li>
            <li>
              common
              <small>公共组件</small>
            </li>
            <li>
              custom
              <small>自定义组件</small>
            </li>
          </ul>
        </li>
        <li>
          constants
          <small>常量</small>
          <ul>
            <li>
              app.ts
              <small>app常量</small>
            </li>
            <li>
              business.ts
              <small>业务常量</small>
            </li>
            <li>
              common.ts
              <small>通用常量</small>
            </li>
            <li>
              reg.ts
              <small>正则常量</small>
            </li>
          </ul>
        </li>
        <li>
          enums
          <small>枚举</small>
        </li>
        <li>
          hooks
          <small>组合式的函数hooks</small>
          <ul>
            <li>
              business
              <small>业务hooks</small>
              <ul>
                <li>
                  auth
                  <small>用户权限</small>
                </li>
                <li>
                  captcha
                  <small>验证码</small>
                </li>
                 <li>
                  useStore
                  <small>访问redux的两个hooks</small>
                </li>
                   <li>
            usePreferredColorScheme
                  <small>监听系统主题</small>
                </li>
              </ul>
            </li>
            <li>
              common
              <small>通用hooks</small>
              <ul>
                <li>
                  echarts
                  <small>echarts</small>
                </li>
                <li>
                  form
                  <small>表单</small>
                </li>
                <li>
                  icon
                  <small>图标</small>
                </li>
<li>
  login
  <small>Login</small>
</li>
<li>
  menu
  <small>Menu</small>
</li>
                <li>
                  router
                  <small>路由</small>
                </li>
                <li>
                  table
                  <small>表格</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          layouts
          <small>布局组件</small>
          <ul>
            <li>
              base-layout
              <small>基本布局(包含全局头部、多页签、侧边栏、底部等公共部分)</small>
            </li>
            <li>
              blank-layout
              <small>空白布局组件(单个页面)</small>
            </li>
            <li>
              modules
              <small>布局组件模块</small>
              <ul>
                <li>
                  global-breadcrumb
                  <small>全局面包屑</small>
                </li>
                <li>
                  global-content
                  <small>全局主体内容</small>
                </li>
                <li>
                  global-footer
                  <small>全局底部</small>
                </li>
                <li>
                  global-header
                  <small>全局头部</small>
                </li>
                <li>
                  global-logo
                  <small>全局Logo</small>
                </li>
                <li>
                  global-menu
                  <small>全局菜单</small>
                </li>
                <li>
                  global-search
                  <small>全局搜索</small>
                </li>
                <li>
                  global-sider
                  <small>全局侧边栏</small>
                </li>
                <li>
                  global-tab
                  <small>全局标签页</small>
                </li>
                <li>
                  theme-drawer
                  <small>主题抽屉</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          locales
          <small>国际化配置</small>
          <ul>
            <li>
              langs
              <small>语言文件</small>
            </li>
            <li>
              dayjs.ts
              <small>dayjs的国际化配置</small>
            </li>
            <li>
              locale.ts
              <small>语言文件汇总</small>
            </li>
            <li>
              antd.ts
              <small>Ant Design的国际化配置</small>
            </li>
          </ul>
        </li>
        <li>
          plugins
          <small>插件</small>
          <ul>
            <li>
              assets.ts
              <small>各种依赖的静态资源导入(css、scss等)</small>
            </li>
            <li>
              dayjs.ts
              <small>dayjs插件</small>
            </li>
            <li>
              iconify.ts
              <small>iconify插件</small>
            </li>
            <li>
              loading.ts
              <small>全局初始化时的加载插件</small>
            </li>
            <li>
              nprogress.ts
              <small>顶部加载条nprogress插件</small>
            </li>
          </ul>
        </li>
        <li>
          router
          <small>react路由</small>
          <ul>
            <li>
              elegant
              <small>elegant-router插件生成的路由声明、导入和转换等文件</small>
            </li>
            <li>
              guard
              <small>路由守卫</small>
            </li>
            <li>
              routes
              <small>路由声明入口</small>
              <ul>
                <li>
                  builtin
                  <small>系统内置路由 根路由和未找到路由</small>
                </li>
                <li>
                  index
                  <small>前端静态路由创建的入口</small>
                </li>
              </ul>
            </li>
            <li>
              index.ts
              <small>路由插件入口</small>
            </li>
          </ul>
        </li>
     <li>
      service
      <small>网络请求</small>
      <ul>
        <li>
          api
          <small>接口api</small>
        </li>
        <li>
          request
          <small>封装的请求函数</small>
        </li>
      </ul>
    </li>
    <li>
      store
      <small>redux状态管理</small>
      <ul>
        <li>
          slice
          <small>状态管理划分的模块</small>
          <ul>
            <li>
              app
              <small>app状态(页面重载、菜单折叠、项目配置的抽屉)</small>
            </li>
            <li>
              auth
              <small>auth状态(用户信息、用户权益)</small>
            </li>
            <li>
              route
              <small>route状态(动态路由、菜单、路由缓存)</small>
            </li>
            <li>
              tab
              <small>tab状态(多页签、缓存页面的滚动位置)</small>
            </li>
            <li>
              theme
              <small>theme状态(项目主题配置)</small>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      styles
      <small>全局样式</small>
      <ul>
        <li>
          css
          <small>css</small>
        </li>
        <li>
          scss
          <small>scss</small>
        </li>
      </ul>
    </li>
    <li>
      theme
      <small>主题配置</small>
      <ul>
        <li>
          settings.ts
          <small>主题默认配置及覆盖配置</small>
        </li>
        <li>
          vars.ts
          <small>主题token对应的css变量</small>
        </li>
      </ul>
    </li>
    <li>
      types
      <small>TS类型声明文件(*.d.ts)</small>
      <ul>
        <li>
          api.d.ts
          <small>请求接口返回的数据的类型声明</small>
        </li>
        <li>
          app.d.ts
          <small>应用相关的类型声明</small>
        </li>
        <li>
          common.d.ts
          <small>通用类型声明</small>
        </li>
        <li>
          components.d.ts
          <small>自动导入的组件的类型声明</small>
        </li>
        <li>
          elegant-router.d.ts
          <small>插件elegant-router生成的路由声明</small>
        </li>
        <li>
          env.d.ts
          <small>react路由描述和请求环境相关的类型声明</small>
        </li>
        <li>
          global.d.ts
          <small>全局通用类型</small>
        </li>
        <li>
          antd.d.ts
          <small>Ant Design类型</small>
        </li>
        <li>
          router.d.ts
          <small>Vue的路由描述的类型声明</small>
        </li>
        <li>
          storage.d.ts
          <small>本地缓存的数据类型</small>
        </li>
        <li>
          union-key.d.ts
          <small>联合类型</small>
        </li>
      </ul>
    </li>
    <li>
      utils
      <small>全局工具函数(纯函数，不含状态)</small>
      <ul>
        <li>
          common
          <small>通用工具函数</small>
        </li>
        <li>
          icon
          <small>图标相关工具函数</small>
        </li>
        <li>
          service
          <small>请求服务配置相关的工具函数</small>
        </li>
        <li>
          storage
          <small>存储相关工具函数</small>
        </li>
      </ul>
    </li>
    <li>
      pages
      <small>页面</small>
      <ul>
        <li>
          _builtin
          <small>系统内置页面：登录、异常页等</small>
        </li>
        <li>
          about
          <small>关于</small>
        </li>
        <li>
          function
          <small>功能</small>
        </li>
        <li>
          home
          <small>首页</small>
        </li>
        <li>
          manage
          <small>系统管理</small>
        </li>
        <li>
          multi-menu
          <small>多级菜单</small>
        </li>
        <li>
          user-center
          <small>用户中心</small>
        </li>
      </ul>
    </li>
    <li>
      App.tsx
      <small>React文件入口</small>
    </li>
    <li>
      main.tsx
      <small>项目入口TS文件</small>
    </li>
</ul>
  <li>
      .editorconfig
      <small>统一编辑器配置</small>
    </li>
    <li>
      .env
      <small>环境文件</small>
    </li>
    <li>
      .env.prod
      <small>生产环境的环境文件</small>
    </li>
    <li>
      .env.test
      <small>测试环境的环境文件</small>
    </li>
    <li>
      .gitattributes
      <small>git属性配置</small>
    </li>
    <li>
      .gitignore
      <small>忽略git提交的配置文件</small>
    </li>
    <li>
      .npmrc
      <small>npm配置</small>
    </li>
    <li>
      CHANGELOG.md
      <small>项目更新日志</small>
    </li>
    <li>
      eslint.config.js
      <small>eslint flat配置文件</small>
    </li>
    <li>
      index.html
      <small>html文件</small>
    </li>
    <li>
      package.json
      <small>npm依赖描述文件</small>
    </li>
    <li>
      pnpm-lock.yaml
      <small>npm包管理器pnpm依赖锁定文件</small>
    </li>
    <li>
      README.md
      <small>项目介绍文档</small>
    </li>
    <li>
      README.zh-CN.md
      <small>项目介绍文档(中文)</small>
    </li>
    <li>
      tsconfig.json
      <small>TS配置</small>
    </li>
    <li>
      uno.config.ts
      <small>原子css框架unocss配置</small>
    </li>
    <li>
      vite.config.ts
      <small>vite配置</small>
    </li> 
      </ul>  
</Tree>
