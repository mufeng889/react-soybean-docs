---
group: 主题
order: 5
title: 组件库主题
---


## Ant Design 主题配置

**根据主题颜色产出组件库的主题变量**

```ts
/**
 * Get antd theme
 *
 * @param colors Theme colors
 * @param darkMode Is dark mode
 */
function getAntdTheme(colors: App.Theme.ThemeColor, darkMode: boolean) {
  const { defaultAlgorithm, darkAlgorithm } = antdTheme;

  const { primary, info, success, warning, error } = colors;

  const theme: ConfigProviderProps['theme'] = {
    token: {
      colorPrimary: primary,
      colorInfo: info,
      colorSuccess: success,
      colorWarning: warning,
      colorError: error
    },
    cssVar: true,
    algorithm: [darkMode ? darkAlgorithm : defaultAlgorithm],
    components: {
      Button: {
        controlHeightSM: 28
      },
      Menu: {
        subMenuItemBg: 'transparent',
        darkSubMenuItemBg: 'transparent',
        darkItemBg: 'transparent',
        itemSelectedBg: darkMode
          ? transformColorWithOpacity(colors.primary, 0.3, '#000000')
          : transformColorWithOpacity(colors.primary, 0.1, '#ffffff'),
        itemMarginInline: 8
      }
    }
  };

  return theme;
}

/** AntDesign theme */
const antdTheme = getAntdTheme(colors, darkMode);

```
:::info{title=代码位置}
src/store/modules/theme/shared.ts

src/store/modules/theme/index.ts
:::

**应用主题变量**

```tsx
<template>
  <ConfigProvider
      theme={antdTheme}
      locale={antdLocales[locale]}
      button={{ classNames: { icon: 'align-1px  text-icon' } }}
    >
      <MenuProvider>
        <AppProvider>
          <router.CustomRouterProvider />
        </AppProvider>
      </MenuProvider>
    </ConfigProvider>
</template>
```
:::info{title=代码位置}
src/App.tsx
:::
