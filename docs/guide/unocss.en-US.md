---

group: Themes
order: 4
title: UnoCSS Theme

---

Inject theme configurations into UnoCSS through [Theme Tokens](/zh/guide/theme/tokens). By leveraging the capabilities of UnoCSS, you can use class names like `text-primary bg-primary` to unify the application of theme colors across both the component library and UnoCSS.

```ts
import { themeVars } from './src/theme/vars';

export default defineConfig<Theme>({
  theme: {
    ...themeVars,
  }
});
```

:::info{title=Code Location}
./uno.config.ts
:::

---

## UnoCSS Dark Mode

With the preset dark mode solution provided by UnoCSS, simply adding `class="dark"` to the HTML element will activate dark mode classes like `dark:text-#000 dark:bg-#333`, achieving a dark mode effect.

```ts
export default defineConfig<Theme>({
  presets: [presetUno({ dark: "class" })],
});
```

:::info{title=Code Location}
./uno.config.ts
:::
