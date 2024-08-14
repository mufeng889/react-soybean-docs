---
group: Routing
order: 6
title: Route Permissions
---

## Guide

### Fixed Routes (Routes Accessible Without Permissions)

In static routing mode, route permissions are controlled by the `meta.constant` property. Routes with `constant` set to `true` can be accessed without logging in.
<br>
In dynamic routing mode, routes that do not require login must be returned by the `fetchGetConstantRoutes` API. This means that even if a route with `constant: true` is returned by `fetchGetUserRoutes`, it will not take effect and still requires login to access.

### Protected Routes

In static routing mode, the default routes require login to access. To configure permissions, you can add the `meta.roles` field, which is of type `string[]` and should be configured in `UserInfo`. If the user’s role matches, they are allowed access; otherwise, they are denied access. This matching occurs during the pre-route guard phase.
<br>
In dynamic routing mode, `meta.roles` can still be used. However, typically the backend controls the returned routes based on role permissions, only returning routes that the user is authorized to access.

## Dynamic Routing

To modify the source of routes, static routes are sourced from `./src/router/elegant/routes.ts`, while dynamic routes are sourced from the `fetchGetConstantRoutes` and `fetchGetUserRoutes` APIs.

> [!WARNING] Note
> The route table returned by the API must match the type of the frontend static route table. It is recommended to become familiar with the project's custom routing plugins and route table structure before attempting modifications.

### Enabling/Disabling

Dynamic routing mode can be enabled or disabled by configuring the `VITE_AUTH_ROUTE_MODE` variable in the `env` file.

:::info{title=Code Location}
.env
:::

```dotenv:line-numbers=14
# auth route mode: static ｜ dynamic
VITE_AUTH_ROUTE_MODE=dynamic
```
