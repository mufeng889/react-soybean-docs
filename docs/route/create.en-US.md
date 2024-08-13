---
group: 路由
order: 2
title: Create Route

---

## Command-Based Creation

You can quickly create route files by executing the `pnpm gen-route` command.

**Naming Rules for Routes**

- First-level routes: `demo`, `demo-page`, `route1`
  > Names should be in lowercase with hyphens (`-`) between words.
- Second-level routes: `demo2_child`, `demo2-page_child`, `route2_child`
  > The hierarchy of the route is indicated by an underscore (`_`) separator, while the rest follows the naming rules of first-level routes.
- Third-level and higher routes: `demo3_child_child`, `demo3-page_child_child_child`

## Manual Creation

**When manually creating route files, adhere to the following rules:**
Each level of routing should be a folder named after the route, with an `index.tsx` or `[id].tsx` file inside as the route component.
