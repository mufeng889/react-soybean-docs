---
group: Themes
order: 5
title: UI Theme
---

## Ant Design Theme Configuration

**Generate theme variables for the component library based on theme colors**

```ts
/**
 * Get Ant Design theme
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

:::info{title=Code Location}
src/store/modules/theme/shared.ts

src/store/modules/theme/index.ts
:::

**Apply Theme Variables**

```ts
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
```

:::info{title=Code Location}
src/App.tsx
:::
