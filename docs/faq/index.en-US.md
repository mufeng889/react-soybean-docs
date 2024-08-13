---
order: 1
title: FAQ
---

:::info{title=tip}
Here are some common questions. If you can't find the answer, feel free to report it on [GitHub Issues](https://github.com/mufeng889/react-soybean-admin/issues).
:::

## Preface

When encountering issues, you can try the following solutions:

- First, identify the key error messages and the necessary context for the issue.
- Try searching for the error keywords using search engines, technical websites, or AI tools.

| [Google](https://google.com) | [Bing](https://www.bing.com/) | ChatGPT | [StackoverFlow](https://stackoverflow.com/) |
| ---------------------------- | ----------------------------- | -------- | ------------------------------------------- |

- If the error is related to a dependency package, try searching in the GitHub Issues of that dependency.
- Consider asking friends or experts you know.
- When asking questions in the SoybeanAdmin official group, please try to describe the issue clearly to facilitate better assistance. You can refer to [How to Ask Questions the Smart Way](https://github.com/tvvocold/How-To-Ask-Questions-The-Smart-Way).

## SoybeanAdmin Cache Issues

**Background**

SoybeanAdmin's default project configuration uses `localStorage` and persists theme-related data during initialization.

Project caching is divided into two areas:

- LocalStorage
- SessionStorage

**Key Points about Caching**

1. The framework's caching mainly revolves around the following methods:
   - `set`: Cache data by passing the required parameters `key`, `value`, and an optional parameter `expire` to the method.
   - `get`: Retrieve cached data by passing the required parameter `key` to the method.
   - `remove`: Remove specified cached data by passing the required parameter `key` to the method.
   - `clear`: Clear all cache data related to `Storage` by calling this method.
2. The data types to be cached need to be predefined in `src/typings/storage.d.ts`.

## Issues with Modifying Files

1. When modifying environment files like `.env` or the `vite.config.ts` file, Vite will automatically restart the service.

> However, there is a chance that the automatic restart may cause issues. Simply rerun the project to resolve this.

2. When modifying `.tsx` or `.ts` files, Vite's hot deployment may cause the page to freeze, preventing you from seeing the real-time changes.

> Refresh the page with `F5` to resolve this.

## Static Route Not Displaying Menu After Adding in the Frontend

📢 A helpful community member reported: When first working with the project, after adding a component and then adding a static route, the menu and page do not render, and there are no error messages.

**Background**

When initializing the project's routes, this user's top-level route data in `meta` had the `hideInMenu` attribute set to `true`.

As a result, neither the menu nor the page was displayed.

  :::info{title=Component Location}
  src/typings/router.d.ts
  :::

Jump to view [`RouteMeta`](../guide/router/intro.md#配置属性)

**Solution:**

Removing the `hideInMenu` attribute will allow the menu and page to display normally.

## How to Understand the Permission Route Mode and Define the Corresponding Rendered Route Data Format

**Background**

The project's permission route mode is divided into:

- Static Routes

  Static routes refer to the routing data in the frontend project: `src/router/routes.ts`. The project can automatically parse the routing data defined in this path and render menu information.

- Dynamic Routes

  Dynamic routes refer to the routing data passed from the backend project.

> When using dynamic routing mode for data rendering, the project's home route `name` value will be automatically overwritten.

## Component Naming Conventions

> 📢 A helpful community member reported: To maintain the high-quality code style of the project, they want to learn a relatively scientific naming convention but have no specific guidelines.

**Naming Conventions**

- **File Naming**: Use lowercase letters uniformly, and connect multiple words with hyphens.

```
pages
├── home
├── demo-page
```

- **Constructor, Class, TS Type Naming**: Use PascalCase uniformly, with the first letter of each word capitalized.

```ts
function Person() {}

class Person {}

type Person = {
  name: string;
};

interface Person {
  name: string;
}
```

- **Variable, Regular Function Naming**: Use camelCase uniformly, with the first letter of each word in lowercase.

```ts
let num: number = 1;

function getNum() {}
```

- **Constant Naming**: Use uppercase letters uniformly, with words connected by underscores.

```ts
const MAX_COUNT = 10;
```

- **Style Naming**: Use lowercase letters uniformly, with words connected by hyphens.

```css
.container {
}

.container-item {
}
```

## Environment Issues

> If you encounter errors during dependency installation or startup, first check if the computer environment is fully set up.

The local environment should include:

- [Git](https://git-scm.com/)

---

- **NodeJS**: >=18.0.0, recommended 18.19.0 or higher.
  > You can use [volta](https://volta.sh/) or [fnm](https://github.com/Schniz/fnm) to manage your NodeJS version.
- **pnpm**: >= 8.0.0, recommended latest version.

## Dependency Installation Issues

- Check for network issues.
- Check mirror source issues.
- Check dependency package version issues.

**Mirror Configuration**

> The project's default mirror configuration file `.npmrc` configuration item description.

🎯 File Location: `.npmrc`

```
registry=https://registry.npmmirror.com/
shamefully-hoist=true
ignore-workspace-root-check=true
```

- `registry`: Specifies the mirror source for npm packages. The mirror source used in this project is the latest mirror from Taobao.
- `shamefully-hoist`: This option hoists dependencies to the highest possible node, improving dependency sharing.
- `ignore-workspace-root-check`: Ignores workspace root checks when installing dependencies in the root path, so you don't need to add the `-w` parameter.

> For complete code, refer to [SoybeanAdmin🔜](https://github.com/soybeanjs/soybean-admin/blob/main/.npmrc).

## How to Keep the Code Up to Date

If you use this project for development and want to sync the latest code during development, you can set multiple sources:

1. Clone the code:

```bash
git clone https://github.com/soybeanjs/soybean-admin.git
```

2. Add your own Git source address:

```bash
# 'up' is the source name, which can be set as you like
# 'gitUrl' is the latest code of the open source project
git remote add up gitUrl;
```

3. Push code to your own Git:

```bash
# Push code to your own Git repository
# 'main' is the branch name, modify it according to your situation
git push up main

# Sync your own code
# 'main' is the branch name, modify it according to your situation
git pull up main
```

4. How to sync the latest open-source code:

```bash
git pull origin main
```

> When using Git for code management, update first, resolve conflicts if any, and then merge.

## Why Use Day.js

Day.js is a minimalist JavaScript library that can parse, validate, manipulate, and display dates and times for modern browsers.

**Why Use Day.js?**

The file size is only around 2KB, which means less JavaScript to download, parse, and execute, leaving more time for your code.

**Sandbox Mechanism**

All API operations that modify Day.js objects will return a new instance. This helps prevent errors and avoids lengthy debugging sessions.

**Internationalization**

Day.js has great support for internationalization. However, unless you use them, they are not included in your build.

## Cross-Origin Issues

### Concept

Cross-Origin refers to a situation in the browser where the current webpage requests resources from a different domain, port, or protocol, causing security policy restrictions and leading to cross-origin issues.

**Reasons for Cross-Origin**

- **Same-Origin Policy**: The browser's security policy restricts pages to only request resources from the same domain. Resources from other domains cannot be accessed.
- **Different Domains**: The requested resource is under a different domain, e.g., [http://www.aaa.com] and [http://www.bbb.com].
- **Different Ports**: The requested resource is under the same domain but different ports, e.g., [http://www.xxx.com] and [http://www.xxx.com:8080].
- **Different Protocols**: The requested resource is under the same domain but different protocols, e.g., [http://www.xxx.com] and [https://www.xxx.com].

**Forward Proxy and Reverse Proxy**

1. **Forward Proxy**

_Forward proxy is a client proxy, representing the client, and the server does not know the actual client making the request._

> In this project, this refers to implementing forward proxy by configuring `Vite`.

2. **Reverse Proxy**

<u>Reverse proxy is a client proxy, representing the client, and the server does not know the actual client making the request.</u>

> Generally, this is done by deploying the `dist` directory to an `Nginx` server and configuring `nginx.conf` to implement reverse proxy.

### Common Solutions

In actual development scenarios, you may encounter two types of cross-origin situations:

**Local Development Cross-Origin Solutions**

During local development, the following three methods are commonly used to handle cross-origin issues:

1. **Proxy Configuration with Vite**: Set up a forward proxy (this solution is used in the local development environment).
2. **Enable CORS on the Backend Server**.
3. **Configure Reverse Proxy on the Frontend Server Using Nginx**.

> The local development environment usually has a local proxy enabled by default.

**Cross-Origin Solutions in Production**

When the project is deployed to a production environment, Nginx is generally used to forward requests to the backend server.

- **SoybeanAdmin**

🎯 **File Location**: `./env-config.ts`

```ts
# Key code is shown below

/** Environment configurations for different request services */

const serviceConfigMap: App.Service.ServiceConfigMap = {
  dev: {
    baseURL: mockURL,
    otherBaseURL: {
      demo: 'http://localhost:9528'
    }
  },
  test: {
    baseURL: mockURL,
    otherBaseURL: {
      demo: 'http://localhost:9529'
    }
  },
  prod: {
    baseURL: mockURL,
    otherBaseURL: {
      demo: 'http://localhost:9530'
    }
  }
};
```

> For complete code, refer to [SoybeanAdmin🔜](https://github.com/soybeanjs/soybean-admin/blob/main/env-config.ts)

⚙ **Nginx Configuration Example**

```java
# nginx.conf

server {
  listen       8080;
  server_name  localhost;

  # Interface proxy to solve cross-origin issues
  location /url {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    # Backend interface address
    proxy_pass http://xxx.xxx.xx.x:8080/api;

    proxy_redirect default;
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Headers X-Requested-With;
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
  }
}

```

You can access the homepage of this deployed project via `http://localhost:8080`.

> The port configured for the production environment in the project must match the port number set in the `nginx.conf` listen directive.
>
> If the backend service has CORS enabled, the frontend service does not need additional configuration.

## **Successful API Request but No Data Returned**

> 📢 A user reported that in some cases, an API request is successfully sent and data is visible in the response body, but the data is not rendered on the page.

## **Issue of 404 When Embedding Local HTML in an Iframe**

📢 A user reported that during development, when trying to embed a local HTML file in the project using an iframe, the content does not display, and a 404 page is shown instead.

**Problem Background**

The entire project is a single-page application, so loading different HTML files based on the path is not inherently supported. You would either need to create a multi-page application or use an iframe within the single-page application to load other HTML files.

**Solution**

Integrate the `vite-plugin-mpa` plugin.

## **404 Error After Refreshing the Page Post-Build**

**Problem Background**

After building the project:
- In the development environment: Using plugins like live server to start the built `index.html` locally results in a 404 error when refreshing the page.
- In the production environment: Deploying to a server and refreshing the page results in a 404 error.

**Problem Cause**

The routing mode used by default in the system is `history` mode. Web servers like `Nginx` are based on static files by default, so when a request is made to addresses like `/login`, `Nginx` tries to find a `login.html` file. If it can't find it, it returns a 404 error. Therefore, this mode requires backend support to redirect all access to `index.html`, leaving the actual routing to `vue-router`.

**Solution**

Preview the build in the development environment:
- Use the `pnpm preview` command to start the preview.

In the production environment:
- **Nginx Configuration Example** (for other web servers, search for the appropriate configuration)

```java
# nginx.conf

server {
  listen 80;
  listen [::]:80;
  server_name localhost;

  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri/ /index.html; // [!code ++]
  }

  error_page 500 502 503 504 /50x.html;
  location = /50x.html {
    root /usr/share/nginx/html;
  }
}
```

- **Modify Routing Mode**

If you cannot modify the web server, you can avoid this issue by changing the frontend routing mode to `hash`.

:::info{title=Code Location}
./env
:::

```dotenv{5}
# whether to enable http proxy when is dev mode
VITE_HTTP_PROXY=Y

# vue-router mode: hash | history | memory // [!code focus:2]
VITE_ROUTER_HISTORY_MODE=hash

# success code of backend service, when the code is received, the request is successful
VITE_SERVICE_SUCCESS_CODE=0000
```
