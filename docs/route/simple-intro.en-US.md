---

group: Simple Router  
order: 1  
title: Overview  

---

This routing plugin is based on `react-router-dom` and borrows some implementation ideas from the `vue-router` source code. It is designed to help developers use routing more efficiently in `react` projects. It provides a lightweight wrapper around `react-router-dom`, without affecting your normal usage of the `react-router-dom` API. Although it takes inspiration from `vue-router`, it is not a complete imitation, and the API cannot be used exactly as in `vue-router`. The plugin’s intention is to make it easier for developers familiar with `vue` to transition to `react`, reducing the learning curve and simplifying the use of routing. Most of the functionality has been implemented, and further improvements will be made in the future.

## Creating a Router Instance

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
  init,
  beforeEach: createRouteGuard,
  afterEach,
  firstInit: initBeforeRoute
});
```

- `initRoutes`

An array of initial routes.

- `basename`

The base name for the application, useful when deploying to a subdirectory instead of the root of a domain.

```ts
createBrowserRouter(routes, {
  basename: "/app",
});
```

When linking to the root, the trailing slash will be respected:

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

Has three options: `'hash' | 'history' | 'memory'`

1. hash: Uses hash mode, the default value.
2. history: Uses the history mode.
3. memory: Uses the memory mode.

- `getReactRoutes`

A function to convert Elegant routes to React routes.

- `init`

A function to initialize the router.
This function accepts a parameter of type `RemixRouter`, where you can perform initialization operations such as fetching user information or initializing routes.

- `beforeEach`

A function executed before the route transition.

This function takes three arguments:

1. to: The target route object.
2. from: The current route object.
3. next: A function that continues the route transition.

You must return `next`.

`next(true)` blocks the current route transition.

`next(false)` or `next()` allows the transition to continue.

`next('/manager/user')` redirects to the specified route. Currently, only route paths are supported, not route objects.

- `afterEach`

A function executed after the route transition.

This function takes two arguments:

1. to: The target route object.
2. from: The current route object.

- `firstInit`

Executed after `init` and performs actions during the first transition, such as initializing tabs, etc.

## Registering the Router Plugin

```ts
import { router } from '@/router';
import GlobalLoading from './components/common/GlobalLoading.tsx';

const App = () => {
 );

  return (
   {router.CustomRouterProvider(<GlobalLoading />)}
  );
};

export default App;
```

- `CustomRouterProvider`

This function is used to register the router plugin. It takes only one parameter, which is used to register the loading component.

## Returned `router` Instance

- See [use-router](/docs/route/use-router-cn) for details.
