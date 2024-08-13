---
group: System Icons
order: 2
title: Icon Tutorial
---

## I. Static Usage: Directly in the Template

- **Iconify**

  - Install the VSCode IntelliSense plugin: [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)

  - Find icons: Visit [https://icones.js.org/](https://icones.js.org/) or install the VSCode plugin - [Icônes](https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones)

  - Determine the icon name: After finding the icon, copy its name, e.g., 'mdi:emoticon' or 'mdi-emoticon'. The corresponding React template would be:

```ts
    <div>
      <IconMdiEmoticon class="text-24px text-red" />
      <IconMdiEmoticon style="font-size:24px;color:#f00;" />
    </div>
```

### Note<Badge>tip</Badge>

- 'icon-' is the preset prefix, which can be configured in the `.env` file using the variable `VITE_ICON_PREFIX`.

- To style the icon: You can apply styles just like with HTML tags using the `style` or `class` attributes. Set the color and size using the `color` and `font-size` properties.

### **Local SVG Icons**

- Choose an SVG file from the `src/assets/svg-icon` directory and use its filename, e.g., 'custom-icon.svg'.

- The corresponding React template would be:

    ```html
    <IconLocalCustomIcon class="text-24px text-red" />
    ```

### Note<Badge>tip</Badge>

- 'icon-local' is the preset prefix, which can be configured in the `.env` file using the variable `VITE_ICON_LOCAL_PREFIX`.

## II. Dynamic Rendering: Render Icons Based on Their Names

- **Iconify**

  - Determine the icon name, e.g., 'mdi-emoticon'.

  - Dynamic rendering:

    ```html
    <SvgIcon icon="mdi-emoticon" />
    ```

  - Render multiple icons dynamically:

    ```html
    <SvgIcon
      v-for="icon in icons"
      :key="icon"
      :icon="icon"
      className="text-24px text-red"
    />
    ```

- **Local SVG Icons**

  - Determine the SVG filename, e.g., 'custom-icon.svg'.

  - Dynamic rendering:

    ```html
    <SvgIcon local-icon="custom-icon" style="font-size:24px;color:#f00;" />
    ```

### Note<Badge>tip</Badge>

- `svg-icon` is a globally registered component, so you can use it directly in your template. The `icon` attribute is for Iconify icons, and `local-icon` is for local SVG icon filenames.

## III. Rendering Through the Render Function: For NaiveUI Icon Rendering

- Determine the icon name, such as Iconify: **'mdi-emoticon'**, or a local SVG icon 'custom-icon.svg'.

  - Use `useSvgIcon`:

    ```typescript
    import { useSvgIcon } from '@/hooks/common/icon';

    const { SvgIconVNode } = useSvgIcon();

    SvgIconVNode({ icon: 'ant-design:close-outlined', fontSize: 18 }); // Iconify

    SvgIconVNode({ localIcon: "custom-icon" }); // Local SVG icon
    ```
