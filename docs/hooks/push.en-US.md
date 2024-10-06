---
order: 2
title: useRouterPush
---


In the project, you can use the standard `router.push` and other conventional methods for route navigation. Alternatively, you can use the `useRouterPush` method provided by the project (recommended). This article primarily introduces the `useRouterPush` hook.

## Introduction

This hook is a secondary wrapper around `router.push`, primarily designed to replace `router.push`. It provides a more convenient way to navigate. `useRouterPush` returns an object containing the following properties and methods:

- `routerPush`: The `push` method from `useRouter`.
- `routerBack`: The `back` method from `useRouter`.
- `routerPushByKey`: A method to navigate based on the route's key (name).
- `toLogin`: A method to navigate to the login page.
- `toggleLoginModule`: A method to switch between login modules.
- `redirectFromLogin`: A method for redirection from the login page.

## Detailed Explanation

`routerPush` and `routerBack` are original properties, so I won't go into detail here. Let's focus on the other methods.

### routerPushByKey

In this context, the `key` refers to the `name` property of a route. For example, if a route is configured as:

```json
{
  "name": "soybean",
  "path": "/soybean-page",
  "component": "layout.base$view.soybean-page"
}
```

The code to navigate to this route would be:

```ts
import { useRouterPush } from '@/hooks/common/router';

const { routerPushByKey } = useRouterPush();

routerPushByKey('soybean');
```

This method also supports optional `query` or `params` parameters.

### toLogin

As the name suggests, this method quickly navigates to the login page. Note that before navigating, you need to clear any login information. Otherwise, route guards might intercept the navigation and send you back to the homepage.

### toggleLoginModule

This method accepts a parameter with the following type:

```ts
/**
 * The login module
 *
 * - pwd-login: password login
 * - code-login: phone code login
 * - register: register
 * - reset-pwd: reset password
 * - bind-wechat: bind wechat
 */
type LoginModule = 'pwd-login' | 'code-login' | 'register' | 'reset-pwd' | 'bind-wechat';
```

Its purpose is to change the login functionality module on the login page based on the passed `LoginModule`. You can remove or extend more modules as needed, just ensure that the type is correct.

### redirectFromLogin

This method is used after a successful login. Compared to manually pushing to the homepage, it is more descriptive. It redirects based on the `redirect` query parameter from the login page. If the `redirect` parameter is absent, it defaults to navigating to the homepage.

## Usage

```ts
<!-- In a .vue file -->

import { useRouterPush } from '@/hooks/common/router';

const { routerPushByKey } = useRouterPush();

<div>
  <AButton type="primary" @click="routerPushByKey('root')">Go to Homepage</AButton>
</div>
```

```ts
<!-- In a .ts file -->
import { useRouterPush } from '@/hooks/common/router';

// Pass 'false' when calling
const { routerPushByKey } = useRouterPush(false);

function backToRoot() {
  routerPushByKey('root');
}
```
