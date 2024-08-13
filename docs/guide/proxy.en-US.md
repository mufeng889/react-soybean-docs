---

group: Requests  
order: 2  
title: Proxy  

---

## Overview

In the project, the base path for services and the proxy match string are created using the `createServiceConfig` function.

:::info{title=Code Location}  
@/utils/service.ts  
:::

Then, in the `createViteProxy` function, the proxy is created based on the configuration obtained above.

## Enabling/Disabling

You can enable or disable the proxy through the `VITE_HTTP_PROXY` setting in the `env` file.

:::info{title=Code Location}  
~.env  
:::

In `@/service/request/index.ts`, by passing the `isHttpProxy` variable—which is determined based on the runtime environment and `VITE_HTTP_PROXY`—as the second argument to the `getServiceBaseURL` function, you can decide whether the URL needs to be processed by the proxy. You can deconstruct the required request URL by passing different parameters here.

```ts
const isHttpProxy = import.meta.env.DEV && import.meta.env.VITE_HTTP_PROXY === 'Y';
const { baseURL } = getServiceBaseURL(import.meta.env, isHttpProxy);
const { otherBaseURL } = getServiceBaseURL(import.meta.env, false);
```

## Principle

The default proxy match string for requests is `/proxy-default/`. For example, if the request URL is `https://api.example.com/v1/user`, the local proxy URL will be `http://localhost:3000/proxy-default/v1/user`. When this request is sent, it matches the proxy configuration through `/proxy-default/`, and the request is forwarded to `https://api.example.com/v1/user`.
