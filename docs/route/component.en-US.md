---
group: Elegant Router
order: 4
title: Routing Components
---

## Layout Components

- **layout.base**: Layout with common sections, such as a global header, sidebar, footer, etc.

- **layout.blank**: Blank layout

## Page Components

- **view.[RouteKey]**: Page components
  > For example: `view.home`, `view.multi-menu_first_child`

## Mixed Layout and Page Components

- **layout.base$view.[RouteKey]**: Mixed layout and page components
  > For example: `layout.base$view.home`, `layout.base$view.multi-menu_first_child`

:::info{title=tip}
This type of component represents a single-level route.
:::
