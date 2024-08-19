---
group: Elegant Router
order: 3
title: 路由结构
---

## 一级路由(单级路由)

### 文件夹结构

```
pages
├── about
│   └── index.tsx
```

### 生成的路由

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

> 它是一个单级路由，为了添加布局，组件属性将布局和视图组件组合在一起，用美元符号“$”分割

### 转换成的React路由

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

## 二级路由

### 文件夹结构

```
pages
├── list
│   ├── home
│   │   └── index.tsx
│   ├── detail
│   │   └── index.tsx
```

### 生成的路由

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

> 二级路由的路由数据也是有两层的，第一层路由是布局组件，第二层路由是页面组件

### 转换成的React 路由

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

### 特殊情况Warning Badge <Badge type="warning">注意</Badge>

```
pages
├── list
│   ├── index.tsx
│   ├── detail
│   │   └── index.tsx
```

- 生成的路由和上面一样，但不同的是此时children的父级路径为`/list`，而不是`layout`,详细的可以看`登录页`的实现

> 路由数据的第一层包含重定向的配置，默认重定向到第一个子路由

## 多级路由（三级路由及以上）

### 文件夹结构

- 文件夹层级深

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

- 两层文件夹层级（推荐）

```
pages
├── multi-menu
│   ├── first_child
│   │   └── index.tsx
│   ├── second_child_home
│   │   └── index.tsx
```

> 通过下划线符号 `_` 来分割路由层级，这样可以避免文件夹层级过深

### 生成的路由

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

> 如果路由层级大于 2，生成的路由数据是一个递归结构

### 转换成的Vue路由

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

> 转换的 React 路由只有两层，第一层是布局组件，第二层是重定向路由或者页面路由

## 忽略文件夹的聚合路由

以下划线 `_` 开头的文件夹名称会被忽略，不会出现在路由中，其下的文件会被聚合到上一级的路由中

### 文件夹结构

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

### 生成的路由

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

## 参数路由

### 文件夹结构

```
pages
├── user
│   └── [id].tsx
```

### 生成的路由

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

### 高级的参数路由

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

## 自定义路由

自定义路由只用于生成路由声明，不会生成路由文件，需要手动创建路由文件

### 自定义路由配置

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

**生成的路由key**

```ts
type RouteMap = {
  root: "/";
  notFound: "*";
  "two-level": "/two-level";
  "two-level_route": "/two-level/route";
};

type CustomRouteKey = "root" | "notFound" | "two-level" | "two-level_route";
```

### 自定义路由的component

**复用已经存在的页面路由component**

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
