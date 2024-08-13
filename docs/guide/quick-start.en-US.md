---
group: Getting Started
order: 1
title: Quick Start
---

This guide will help you get the project up and running from scratch.

---

## Prerequisites

Ensure that your environment meets the following requirements:

- **Git**: You'll need Git to clone and manage project versions. [Installation Guide](../tutorial/git.md)
- **NodeJS**: Version >= 18.12.0, recommended version is 18.19.0 or higher. [Installation Guide](../tutorial/nodejs.md)
- **pnpm**: Version >= 8.7.0, latest version recommended.

---

## VSCode Extensions

We recommend using VSCode for development. The project includes built-in VSCode settings with recommended extensions and configurations.

Here are the recommended extensions:

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - Automatically adds closing tags for HTML/XML.
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - Adds closing tags and automatically renames paired tags in HTML/XML.
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - Automatically renames paired HTML/XML tags.
- [Color Highlight](https://github.com/naumovs/vscode-ext-color-highlight) - Highlights colors in your code.
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - Highlights `.env` files.
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - Unifies settings across different editors.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Linting tool for code quality.
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - Visualize your Git history.
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Provides detailed Git information for specific lines of code.
- [Icônes](https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones) - Iconify icon search plugin.
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Real-time display of Iconify icons.
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - Internationalization (i18n) plugin.
- [javascript console utils](https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils) - Shortcut for `console.log()` with `ctrl+l`.
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - Icon theme for displaying various icons for files and folders.
- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) - A popular theme for VSCode.
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatting tool.
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - UnoCSS syntax support.

## Getting the Code

### Cloning from GitHub

```bash
# Clone the repository
git clone https://github.com/mufeng889/react-soybean-admin.git
```

### Cloning from Gitee

<!-- ```bash
# Clone the repository
git clone https://gitee.com/honghuangdc/soybean-admin.git
``` -->

:::warning{title=Note}
The latest version of the code is maintained on GitHub.
:::

### Installing Dependencies

Install project dependencies:

```bash
pnpm i
```

## npm Scripts

```json
{
  // Build for production
  "build": "vite build --mode prod",
  // Build for testing
  "build:test": "vite build --mode test",
  // Clean up node_modules, dist, pnpm-lock.yaml in the main and subprojects
  "cleanup": "sa cleanup",
  // Commit code (generate commit messages compliant with the Conventional Commits standard)
  "commit": "sa git-commit",
  // Run locally (test environment)
  "dev": "vite --mode test",
  // Run locally (production environment)
  "dev:prod": "vite --mode prod",
  // Generate routes and create a basic route file
  "gen-route": "sa gen-route",
  // ESLint check and auto-fix
  "lint": "eslint . --fix",
  // Initialize simple-git-hooks
  "prepare": "simple-git-hooks",
  // Preview the built `dist` folder locally
  "preview": "vite preview",
  // Release
  "release": "sa release",
  // Type checking for React files
  "typecheck": "vue-tsc --noEmit --skipLibCheck",
  // Update dependencies
  "update-pkg": "sa update-pkg"
}
```

## Directory Explanation


<Tree>
  <ul>
    <li>
      .vscode
      <small>VSCode extensions and settings</small>
      <ul>
        <li>
          extensions.json
          <small>Recommended VSCode extensions</small>
        </li>
        <li>
          launch.json
          <small>Debug configuration (for debugging React and TypeScript)</small>
        </li>
        <li>
          settings.json
          <small>VSCode settings (effective within this project, can be copied to user settings)</small>
        </li>
      </ul>
    </li>
    <li>
      build
      <small>Vite build-related configurations and plugins</small>
      <ul>
        <li>
          config
          <small>Build configuration</small>
          <ul>
            <li>
              proxy.ts
              <small>Network request proxy</small>
            </li>
          </ul>
        </li>
        <li>
          plugins
          <small>Build plugins</small>
          <ul>
            <li>
              index.ts
              <small>Plugin aggregation</small>
            </li>
            <li>
              router.ts
              <small>Elegant-router plugin</small>
            </li>
            <li>
              unocss.ts
              <small>UnoCSS plugin</small>
            </li>
            <li>
              unplugin.ts
              <small>Automatic UI component import, Iconify icon parsing, local SVG parsing as icons</small>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      packages
      <small>Subprojects</small>
      <ul>
        <li>
          axios
          <small>Network request encapsulation</small>
        </li>
        <li>
          color-palette
          <small>Color palette</small>
        </li>
        <li>
          hooks
          <small>Composable function hooks</small>
        </li>
        <li>
          materials
          <small>Component materials</small>
        </li>
        <li>
          simple-router
          <small>A simplified implementation of some Vue Router features to help Vue developers transition to React</small>
        </li>
        <li>
          ofetch
          <small>Network request encapsulation</small>
        </li>
        <li>
          scripts
          <small>Scripts</small>
        </li>
        <li>
          uno-preset
          <small>Uno preset configuration</small>
        </li>
        <li>
          utils
          <small>Utility functions</small>
        </li>
      </ul>
    </li>
    <li>
      public
      <small>Public directory (resources within this folder will be placed in the root directory after build)</small>
      <ul>
        <li>
          favicon.svg
          <small>Website favicon</small>
        </li>
      </ul>
    </li>
    <li>
      src
      <ul>
        <li>
          assets
          <small>Static resources</small>
          <ul>
            <li>
              imgs
              <small>Images</small>
            </li>
            <li>
              svg-icon
              <small>Local SVG icons</small>
            </li>
          </ul>
        </li>
        <li>
          components
          <small>Global components</small>
          <ul>
            <li>
              advanced
              <small>Advanced components</small>
            </li>
            <li>
              common
              <small>Common components</small>
            </li>
            <li>
              custom
              <small>Custom components</small>
            </li>
          </ul>
        </li>
        <li>
          constants
          <small>Constants</small>
          <ul>
            <li>
              app.ts
              <small>App constants</small>
            </li>
            <li>
              business.ts
              <small>Business constants</small>
            </li>
            <li>
              common.ts
              <small>Common constants</small>
            </li>
            <li>
              reg.ts
              <small>Regex constants</small>
            </li>
          </ul>
        </li>
        <li>
          enums
          <small>Enumerations</small>
        </li>
        <li>
          hooks
          <small>Composable function hooks</small>
          <ul>
            <li>
              business
              <small>Business hooks</small>
              <ul>
                <li>
                  auth
                  <small>User authorization</small>
                </li>
                <li>
                  captcha
                  <small>Captcha</small>
                </li>
                  <li>
                    use-store
                    <small>Two hooks for accessing Redux</small>
                  </li>
                  <li>
                    use-preferred-color-scheme
                    <small>Listen to the system theme</small>
                  </li>
              </ul>
            </li>
            <li>
              common
              <small>Common hooks</small>
              <ul>
                <li>
                  echarts
                  <small>ECharts</small>
                </li>
                <li>
                  form
                  <small>Form</small>
                </li>
                <li>
                  icon
                  <small>Icons</small>
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
                  <small>Router</small>
                </li>
                <li>
                  table
                  <small>Table</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          layouts
          <small>Layout components</small>
          <ul>
            <li>
              base-layout
              <small>Basic layout (includes global header, multi-tabs, sidebar, footer, etc.)</small>
            </li>
            <li>
              blank-layout
              <small>Blank layout component (single page)</small>
            </li>
            <li>
              modules
              <small>Layout component modules</small>
              <ul>
                <li>
                  global-breadcrumb
                  <small>Global breadcrumb</small>
                </li>
                <li>
                  global-content
                  <small>Global content</small>
                </li>
                <li>
                  global-footer
                  <small>Global footer</small>
                </li>
                <li>
                  global-header
                  <small>Global header</small>
                </li>
                <li>
                  global-logo
                  <small>Global logo</small>
                </li>
                <li>
                  global-menu
                  <small>Global menu</small>
                </li>
                <li>
                  global-search
                  <small>Global search</small>
                </li>
                <li>
                  global-sider
                  <small>Global sidebar</small>
                </li>
                <li>
                  global-tab
                  <small>Global tab</small>
                </li>
                <li>
                  theme-drawer
                  <small>Theme drawer</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          locales
          <small>Internationalization configuration</small>
          <ul>
            <li>
              langs
              <small>Language files</small>
            </li>
            <li>
              dayjs.ts
              <small>Day.js internationalization configuration</small>
            </li>
            <li>
              locale.ts
              <small>Language file aggregation</small>
            </li>
            <li>
              antd.ts
              <small>Ant Design internationalization configuration</small>
            </li>
          </ul>
        </li>
        <li>
          plugins
          <small>Plugins</small>
          <ul>
            <li>
              assets.ts
              <small>Static resource imports (CSS, SCSS, etc.)</small>
            </li>
            <li>
              dayjs.ts
              <small>Day.js plugin</small>
            </li>
            <li>
              iconify.ts
              <small>Iconify plugin</small>
            </li>
            <li>
              loading.ts
              <small>Global initialization loading plugin</small>
            </li>
            <li>
              nprogress.ts
              <small>Top progress bar (NProgress plugin)</small>
            </li>
          </ul>
        </li>
        <li>
          router
          <small>React Router</small>
          <ul>
            <li>
              elegant
              <small>Files for route declarations, imports, and conversions generated by Elegant-router plugin</small>
            </li>
            <li>
              guard
              <small>Route guards</small>
            </li>
            <li>
              routes
              <small>Route declarations entry point</small>
              <ul>
                <li>
                  builtin
                  <small>System built-in routes (root route and not-found route)</small>
                </li>
                <li>
                  index
                  <small>Entry point for frontend static route creation</small>
                </li>
              </ul>
            </li>
            <li>
              index.ts
              <small>Route plugin entry point</small>
            </li>
          </ul>
        </li>
        <li>
          service
          <small>Network requests</small>
          <ul>
            <li>
              api
              <small>API interfaces</small>
            </li>
            <li>
              request
              <small>Encapsulated request functions</small>
            </li>
          </ul>
        </li>
        <li>
          store
          <small>Redux```html
</small>
<ul>
  <li>
    modules
    <small>State management modules</small>
    <ul>
      <li>
        app
        <small>App state (page reload, menu collapse, project settings drawer)</small>
      </li>
      <li>
        auth
        <small>Auth state (user information, user rights)</small>
      </li>
      <li>
        route
        <small>Route state (dynamic routes, menu, route caching)</small>
      </li>
      <li>
        tab
        <small>Tab state (multi-tabs, cached page scroll positions)</small>
      </li>
      <li>
        theme
        <small>Theme state (project theme settings)</small>
      </li>
    </ul>
  </li>
  <li>
    plugins
    <small>State management plugins</small>
  </li>
</ul>
</li>
<li>
  styles
  <small>Global styles</small>
  <ul>
    <li>
      css
      <small>CSS</small>
    </li>
    <li>
      scss
      <small>SCSS</small>
    </li>
  </ul>
</li>
<li>
  theme
  <small>Theme configuration</small>
  <ul>
    <li>
      settings.ts
      <small>Default and override theme settings</small>
    </li>
    <li>
      vars.ts
      <small>CSS variables corresponding to theme tokens</small>
    </li>
  </ul>
</li>
<li>
  types
  <small>TypeScript declaration files (*.d.ts)</small>
  <ul>
    <li>
      api.d.ts
      <small>Type declarations for API response data</small>
    </li>
    <li>
      app.d.ts
      <small>Type declarations related to the application</small>
    </li>
    <li>
      common.d.ts
      <small>Common type declarations</small>
    </li>
    <li>
      components.d.ts
      <small>Type declarations for auto-imported components</small>
    </li>
    <li>
      elegant-router.d.ts
      <small>Type declarations for routes generated by the Elegant-router plugin</small>
    </li>
    <li>
      env.d.ts
      <small>Type declarations related to React routing and environment configuration</small>
    </li>
    <li>
      global.d.ts
      <small>Global common types</small>
    </li>
    <li>
      antd.d.ts
      <small>Ant Design types</small>
    </li>
    <li>
      router.d.ts
      <small>Type declarations for Vue Router descriptions</small>
    </li>
    <li>
      storage.d.ts
      <small>Type declarations for local storage data</small>
    </li>
    <li>
      union-key.d.ts
      <small>Union types</small>
    </li>
  </ul>
</li>
<li>
  utils
  <small>Global utility functions (pure functions without state)</small>
  <ul>
    <li>
      common
      <small>Common utility functions</small>
    </li>
    <li>
      icon
      <small>Icon-related utility functions</small>
    </li>
    <li>
      service
      <small>Utility functions related to service configuration</small>
    </li>
    <li>
      storage
      <small>Utility functions related to storage</small>
    </li>
  </ul>
</li>
<li>
  pages
  <small>Pages</small>
  <ul>
    <li>
      _builtin
      <small>System built-in pages: login, error pages, etc.</small>
    </li>
    <li>
      about
      <small>About</small>
    </li>
    <li>
      function
      <small>Function</small>
    </li>
    <li>
      home
      <small>Home</small>
    </li>
    <li>
      manage
      <small>System management</small>
    </li>
    <li>
      multi-menu
      <small>Multi-level menu</small>
    </li>
    <li>
      user-center
      <small>User center</small>
    </li>
  </ul>
</li>
<li>
  App.tsx
  <small>React entry file</small>
</li>
<li>
  main.tsx
  <small>Project entry TypeScript file</small>
</li>
</ul>
<li>
  .editorconfig
  <small>Unified editor configuration</small>
</li>
<li>
  .env
  <small>Environment file</small>
</li>
<li>
  .env.prod
  <small>Environment file for production</small>
</li>
<li>
  .env.test
  <small>Environment file for testing</small>
</li>
<li>
  .gitattributes
  <small>Git attributes configuration</small>
</li>
<li>
  .gitignore
  <small>Git ignore configuration file</small>
</li>
<li>
  .npmrc
  <small>npm configuration</small>
</li>
<li>
  CHANGELOG.md
  <small>Project changelog</small>
</li>
<li>
  eslint.config.js
  <small>ESLint flat configuration file</small>
</li>
<li>
  index.html
  <small>HTML file</small>
</li>
<li>
  package.json
  <small>npm dependencies description file</small>
</li>
<li>
  pnpm-lock.yaml
  <small>Dependency lock file for pnpm</small>
</li>
<li>
  README.md
  <small>Project introduction document</small>
</li>
<li>
  README.zh-CN.md
  <small>Project introduction document (Chinese)</small>
</li>
<li>
  tsconfig.json
  <small>TypeScript configuration</small>
</li>
<li>
  uno.config.ts
  <small>UnoCSS configuration</small>
</li>
<li>
  vite.config.ts
  <small>Vite configuration</small>
</li>
</ul>
</Tree>

