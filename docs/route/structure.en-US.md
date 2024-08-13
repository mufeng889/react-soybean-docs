---

group: Routing  
order: 3  
title: Routing Structure  

---

## Primary Routes (Single-Level Routes)

### Folder Structure

```
pages
├── about
│   └── index.tsx
```

### Generated Routes

```ts
{
  name: 'about',
  path: '/about',
  component: 'layout.base$view.about',
  meta: {
    title: 'about'
  }
},
```

> This is a single-level route. To add a layout, the `component` property combines the layout and view components, separated by a dollar sign "$".

### Converted React Route

```ts
{
  path: '/about',
  component: BaseLayout,
  children: [
    {
      name: 'about',
      path: '',
      component: () => import('@/pages/about/index.tsx'),
      meta: {
        title: 'about'
      }
    }
  ]
},
```

## Secondary Routes

### Folder Structure

```
pages
├── list
│   ├── home
│   │   └── index.tsx
│   ├── detail
│   │   └── index.tsx
```

### Generated Routes

```ts
{
  name: 'list',
  path: '/list',
  component: 'layout.base',
  meta: {
    title: 'list'
  },
  children: [
    {
      name: 'list_home',
      path: 'home',
      component: 'view.list_home',
      meta: {
        title: 'list_home'
      }
    },
    {
      name: 'list_detail',
      path: 'detail',
      component: 'view.list_detail',
      meta: {
        title: 'list_detail'
      }
    }
  ]
}
```

> The route data for secondary routes is also two-layered. The first layer is the layout component, and the second layer is the page component.

### Converted React Route

```ts
{
  name: 'list',
  path: '/list',
  component: BaseLayout,
  redirect: {
    name: 'list_home'
  },
  meta: {
    title: 'list'
  },
  children: [
    {
      name: 'list_home',
      path: 'home',
      component: () => import('@/pages/list/home/index.tsx'),
      meta: {
        title: 'list_home'
      }
    },
    {
      name: 'list_detail',
      path: 'detail',
      component: () => import('@/pages/list/detail/index.tsx'),
      meta: {
        title: 'list_detail'
      }
    }
  ]
},
```

### Special Case Warning Badge <Badge type="warning">Note</Badge>

```
pages
├── list
│   ├── index.tsx
│   ├── detail
│   │   └── index.tsx
```

- The generated routes are the same as above, but in this case, the parent path for `children` is `/list`, not `layout`. For more details, refer to the implementation of the `login page`.

> The first layer of route data includes a redirection configuration that defaults to redirect to the first child route.

## Multi-Level Routes (Tertiary and Above)

### Folder Structure

- Deep Folder Hierarchy

```
pages
├── multi-menu
│   ├── first
│   │   ├── child
│   │   │   └── index.tsx
│   ├── second
│   │   ├── child
│   │   │   ├── home
│   │   │   │   └── index.tsx
```

- Two-Layer Folder Hierarchy (Recommended)

```
pages
├── multi-menu
│   ├── first_child
│   │   └── index.tsx
│   ├── second_child_home
│   │   └── index.tsx
```

> Use underscores `_` to separate routing levels, which helps avoid excessively deep folder structures.

### Generated Routes

```ts
{
  name: 'multi-menu',
  path: '/multi-menu',
  component: 'layout.base',
  meta: {
    title: 'multi-menu'
  },
  children: [
    {
      name: 'multi-menu_first',
      path: 'first',
      meta: {
        title: 'multi-menu_first'
      },
      children: [
        {
          name: 'multi-menu_first_child',
          path: 'child',
          component: 'view.multi-menu_first_child',
          meta: {
            title: 'multi-menu_first_child'
          }
        }
      ]
    },
    {
      name: 'multi-menu_second',
      path: 'second',
      meta: {
        title: 'multi-menu_second'
      },
      children: [
        {
          name: 'multi-menu_second_child',
          path: 'child',
          meta: {
            title: 'multi-menu_second_child'
          },
          children: [
            {
              name: 'multi-menu_second_child_home',
              path: 'home',
              component: 'view.multi-menu_second_child_home',
              meta: {
                title: 'multi-menu_second_child_home'
              }
            }
          ]
        }
      ]
    }
  ]
}
```

> If the route hierarchy exceeds 2 levels, the generated route data will have a recursive structure.

### Converted Vue Routes

```ts
{
  name: 'multi-menu',
  path: '/multi-menu',
  component: BaseLayout,
  redirect: {
    name: 'multi-menu_first'
  },
  meta: {
    title: 'multi-menu'
  },
  children: [
    {
      name: 'multi-menu_first',
      path: 'first',
      redirect: {
        name: 'multi-menu_first_child'
      },
      meta: {
        title: 'multi-menu_first'
      }
    },
    {
      name: 'multi-menu_first_child',
      path: 'child',
      component: () => import('@/pages/multi-menu/first_child/index.tsx'),
      meta: {
        title: 'multi-menu_first_child'
      }
    },
    {
      name: 'multi-menu_second',
      path: 'second',
      redirect: {
        name: 'multi-menu_second_child'
      },
      meta: {
        title: 'multi-menu_second'
      },
    },
    {
      name: 'multi-menu_second_child',
      path: 'child',
      redirect: {
        name: 'multi-menu_second_child_home'
      },
      meta: {
        title: 'multi-menu_second_child'
      },
    },
    {
      name: 'multi-menu_second_child_home',
      path: 'home',
      component: () => import('@/pages/multi-menu/second_child_home/index.tsx'),
      meta: {
        title: 'multi-menu_second_child_home'
      }
    }
  ]
},
```

> The converted React routes have only two layers: the first layer is the layout component, and the second layer consists of either redirection routes or page routes.

## Aggregated Routes by Ignoring Folders

Folders that start with an underscore `_` will be ignored and will not appear in the routes. The files within these folders will be aggregated into the parent route.

### Folder Structure

```
pages
├── _error
│   ├── 403
│   │   └── index.tsx
│   ├── 404
│   │   └── index.tsx
│   ├── 500
│   │   └── index.tsx
```

### Generated Routes

```ts
{
  name: '403',
  path: '/403',
  component: 'layout.base$view.403',
  meta: {
    title: '403'
  }
},
{
  name: '404',
  path: '/404',
  component: 'layout.base$view.404',
  meta: {
    title: '404'
  }
},
{
  name: '500',
  path: '/500',
  component: 'layout.base$view.500',
  meta: {
    title: '500'
  }
},
```

## Parameterized Routes

### Folder Structure

```
pages
├── user
│   └── [id].tsx
```

### Generated Routes

```ts
{
  name: 'user',
  path: '/user/:id',
  component: 'layout.base$view.user',
  props: true,
  meta: {
    title: 'user'
  }
}
```

### Advanced Parameterized Routes

```ts
import type { RouteKey } from "@ohh-889/react-auto-route/types";

ElegantReactRouter({
  routePathTransformer(routeName, routePath) {
    const routeKey = routeName as RouteKey;

    if (routeKey === "user") {
      return "/user/:id(\\d+)";
    }

    return routePath;
  },
});
```

## Custom Routes

Custom routes are only used to generate route declarations and do not generate route files. You need to manually create the route files.

### Custom Route Configuration

```ts
ElegantReactRouter({
  customRoutes: {
    map: {
      root: "/",
      notFound: "*",
    },
    names: ["two-level_route"],
  },
});
```

**Generated Route Keys**

```ts
type RouteMap = {
  root: "/";
  notFound: "*";
  "two-level": "/two-level";
  "two-level_route": "/two-level/route";
};

type CustomRouteKey = "root" | "notFound" | "two-level" | "two-level_route";
```

### Custom Route Component

**Reusing Existing Page Route Components**

Here is the translation of the provided code into English:

```ts
import type { CustomRoute } from "@ohh-889/react-auto-route/types";

const customRoutes: CustomRoute[] = [
  {
    name: "root",
    path: "/",
    redirect: {
      name: "403",
    },
  },
  {
    name: "not-found",
    path: "*",
    component: "layout.base$view.404",
  },
  {
    name: "two-level",
    path: "/two-level",
    component: "layout.base",
    children: [
      {
        name: "two-level_route",
        path: "/two-level/route",
        component: "view.about",
      },
    ],
  },
];
```
