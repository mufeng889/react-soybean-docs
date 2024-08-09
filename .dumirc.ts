import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'SoybeanAdmin',
    logo: '/logo.svg',
    socialLinks: {
      github: 'https://github.com/soybeanjs',
    },
    footer:
      'Made with<span style="color: rgb(255, 255, 255);">❤</span>by <span>KuangPF | Copyright © 2022-present</span>',
    github: 'https://github.com/KuangPF/dumi-theme-antd',
    description: 'a fresh and elegant admin template',
  },
});
