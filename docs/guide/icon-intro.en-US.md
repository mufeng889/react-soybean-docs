---

group: System Icons  
order: 1  
title: Overview  

---

## Iconify Icon Rendering Principle

Using the JSON data of SVGs from Iconify, the `unplugin-icons` plugin converts the SVG data into React components.

- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [iconify](https://github.com/iconify/iconify)
- [Journey with Icons Continues](https://antfu.me/posts/journey-with-icons-continues)

## Local SVG Icon Rendering Principle

The `unplugin-icons` plugin and the `vite-plugin-svg-icons` plugin are used to convert local SVG files into React components.

> Local SVG icons need to be placed in the `src/assets/svg-icon` directory.

## Relevant Configuration

**.env Configuration File**

- `VITE_ICON_PREFIX`: Iconify icon prefix
- `VITE_ICON_LOCAL_PREFIX`: Prefix for local SVG icons, formatted as `{VITE_ICON_PREFIX}-{local icon name}`

## Please Note

> According to the SVG icon rendering principle, SVG files are converted into static assets. This means that once SVG files are loaded and converted into components, they become part of your project and won't automatically detect and update changes made to the source files. Therefore, if you modify an SVG file and want to see the changes reflected in your project, you need to restart the project.
