---
group: Simple Router
order: 1
title: 概述
---

这款路由插件是基于 `react-router-dom` 并借鉴了 `vue-router` 部分源码实现的，旨在帮助开发者在 `react` 项目中更高效地使用路由。它对 `react-router-dom` 进行了轻量级封装，不会影响你正常使用 `react-router-dom` 的 API。虽然参考了 `vue-router` 的设计，但并非完全模仿，因此不能直接按照 `vue-router` 的 API 使用。插件的初衷是为了让熟悉 `vue` 的开发者在转向 `react` 时更容易上手，减少学习成本并简化路由的使用。

## 创建路由器实例

```ts
import type { ElegantConstRoute } from '@ohh-889/react-auto-route';
import CreateRouter from '@sa/simple-router';
import type { Router as RemixRouter } from '@remix-run/router';
import { localStg } from '@/utils/storage';
import { store } from '@/store';
import { initAuthRoute, initConstantRoute } from '@/store/slice/route';
import { initTabStore } from '@/store/slice/tab';
import { layouts, pages } from './elegant/imports';
import { transformElegantRouteToReactRoute } from './elegant/transform';
import { afterEach, createRouteGuard } from './guard';
import { builtinRoutes } from './routes/builtin';

const { VITE_ROUTER_HISTORY_MODE = 'history', VITE_BASE_URL } = import.meta.env;

/**
 * Get auth react routes
 *
 * @param routes Elegant routes
 */
function getReactRoutes(route: ElegantConstRoute) {
  return transformElegantRouteToReactRoute(route, layouts, pages);
}

async function init(reactRouter: RemixRouter) {
  await store.dispatch(initConstantRoute());
  const isLogin = Boolean(localStg.get('token'));
  if (!isLogin) {
    reactRouter.navigate('/login', { replace: true });
    return;
  }
  await store.dispatch(initAuthRoute());
}

function initBeforeRoute(allNames: string[]) {
  store.dispatch(initTabStore(allNames));
}

export const router = new CreateRouter({
  initRoutes: builtinRoutes,
  basename: VITE_BASE_URL,
  history: VITE_ROUTER_HISTORY_MODE,
  getReactRoutes,
  init
});
```

- `initRoutes`

是一个数组,也是初始化的路由。

- `basename`

应用程序的基名，用于无法部署到域根目录而只能部署到子目录的情况。

```ts
createBrowserRouter(routes, {
  basename: "/app",
});
```

当链接到根目录时，尾部的斜线将得到尊重：

```ts
createBrowserRouter(routes, {
  basename: "/app",
});
<Link to="/" />; // results in <a href="/app" />

createBrowserRouter(routes, {
  basename: "/app/",
});
<Link to="/" />; // results in <a href="/app/" />
```

- `history`

有三个参数:'hash' | 'history' | 'memory'

1. hash: 使用hash模式，默认值
2. history: 使用history模式
3. memory: 使用memory模式

- `getReactRoutes`

这个参数是一个函数，用于将Elegant路由转换为React路由。

- `init`

这个参数是一个函数，用于初始化路由。
这个函数接收一个`RemixRouter`类型的参数，你可以在这里进行一些初始化操作，例如获取用户信息，初始化路由等。

---

## 注册路由器插件

```ts
import { RouterProvider } from '@sa/simple-router';
import GlobalLoading from './components/common/GlobalLoading.tsx';

const App = () => {
 );

  return (
      <RouterProvider
            fallback={<GlobalLoading />}
            router={router}
          />
  );
};

export default App;
```

- `CustomRouterProvider`
这个函数用于注册路由器插件。仅有一个参数，用于注册loading组件。

---

## 返回的`router`实例

- 详见[use-router](/docs/route/use-router-cn)
