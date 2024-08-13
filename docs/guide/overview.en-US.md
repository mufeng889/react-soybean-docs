---
group: Themes
order: 1
title: Overview
---

The implementation of the system theme is divided into two parts: the theme configuration of the component library and the theme configuration of UnoCSS. To unify these two aspects, a set of theme configurations is maintained, which controls both the component library and UnoCSS theme settings.

---

## Principle

- Define a set of theme configuration variables, including various theme colors, layout parameter settings, etc.
- Use these configurations to generate theme variables that align with the component library.
- Generate theme tokens from these configurations, derive the corresponding CSS variables, and then pass these CSS variables to UnoCSS.
