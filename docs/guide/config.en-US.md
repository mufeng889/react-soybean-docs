---
group: Themes
order: 2
title: Configuration

---

## Type Definitions

Refer to `App.Theme.ThemeSetting`

:::info{title=Code Location}
`src/typings/app.d.ts`
:::

## Initial Configuration

```ts
export const themeSettings: App.Theme.ThemeSetting = {
  // Default configuration
}
```

:::info{title=Code Location}
`src/theme/settings.ts`
:::

## Configuration Override Update

When releasing a new version, you can update the theme configuration by overriding the existing settings.

```ts
export const overrideThemeSettings: Partial<App.Theme.ThemeSetting> = {
  // Override configuration
};
```

:::info{title=Code Location}
`src/theme/settings.ts`
:::

---

## Environment Notes <Badge type="warning">Note</Badge>

- When the project is in `development mode`, the theme configuration will not be cached. You can update the theme configuration by modifying `themeSettings` in `src/theme/settings.ts`.
  > During development, the theme configuration is not cached to allow real-time updates.

- When the project is in `production mode`, the theme configuration will be cached in `localStorage`.
  > For each new release, you can update the theme configuration by modifying `overrideThemeSettings` in `src/theme/settings.ts`.
