# Routing Cache

## Principle

Routing cache is implemented using the `keepalive-for-react` component called `keep-alive`. This component caches the state of a component so that when the component is revisited, it is retrieved from the cache rather than being recreated. Since the `keep-alive` component uses the component's `name` property as the key for caching, all page components in the project have already been automatically injected with a `name` property through the `@elegant-router/vue` plugin. Therefore, you only need to set the `keepAlive` field in the `meta` property of the route data.

### `keepalive-for-react`

- [Repository link](https://github.com/irychen/keepalive-for-react/)

## Usage

You can control whether the route should be cached by setting the `keepAlive` field in the `meta` property of the route data.

```ts
{
  name: 'about',
  path: '/about',
  component: 'layout.base$view.about',
  meta: {
    title: 'about',
    keepAlive: true
  }
}
```

## Parameters

### `useEffectOnActive` / `useLayoutEffectOnActive`

`useEffectOnActive` is a hook that listens to the active state of a component wrapped by `KeepAlive`.

```ts
import {useEffectOnActive} from 'keepalive-for-react';

useEffectOnActive((active) => {
    console.log('useOnActive', active);
}, false, []);
```

### `useKeepAliveContext`

`useKeepAliveContext` is a hook that allows access to the KeepAlive `CacheComponent` context.

```ts
import {useKeepAliveContext} from 'keepalive-for-react';

function CachedComponent() {
  const { active, destroy, refresh } = useKeepAliveContext();
  // active: boolean, indicates if the component is active
  // destroy: () => void, removes the component from the cache
  // refresh: (name?: string) => void, refreshes the component in the cache
  // ...
}
```

### `KeepAlive` Props

```ts
interface Props {
    children: ReactNode;
    /**
     * active name
     */
    activeName: string;
    /**
     * max cache count default 10
     */
    max?: number;
    /**
     * cache: boolean default true
     */
    cache?: boolean;
    /**
     * maxRemoveStrategy: 'PRE' | 'LRU' default 'PRE'
     *
     * PRE: removes the first cacheNode
     *
     * LRU: removes the least recently used cacheNode
     */
    strategy?: "PRE" | "LRU";
    /**
     * aliveRef: KeepAliveRef
     *
     * aliveRef is a ref to access caches, remove cache by name, clean all caches, or clean all but the current cache.
     */
    aliveRef?: RefObject<KeepAliveRef | undefined> | MutableRefObject<KeepAliveRef | undefined>;

    exclude?: Array<string | RegExp> | string | RegExp;

    include?: Array<string | RegExp> | string | RegExp;

    /**
     * suspenseElement: Suspense Wrapper Component
     */
    suspenseElement?: ComponentType<{
        children: ReactNode,
    }>;

    /**
     * errorElement: For each cacheNode's ErrorBoundary
     */
    errorElement?: ComponentType<{
        children: ReactNode,
    }>;
    animationWrapper?: ComponentType<{
        children: ReactNode
    }>

    /**
     * onBeforeActive: Callback before activating the component.
     * @param name
     *
     * This allows you to take actions before activation, such as setting styles for dropdowns.
     *
     * Example:
     * ```tsx
     * // For React 18 or later, you do not need to use onBeforeActive to fix the style flashing issue.
     * // To fix style flashing issues with Antd Dropdown or Select components, which occur when these components are wrapped by Suspense and cached:
     *
     * const dropdowns = document.querySelectorAll('.ant-select-dropdown');
     * dropdowns.forEach(dropdown => {
     *     if (dropdown) {
     *         dropdown.setAttribute('style', '');
     *     }
     * });
     *
     * const pickerDropdowns = document.querySelectorAll('.ant-picker-dropdown');
     * pickerDropdowns.forEach(pickerDropdown => {
     *     if (pickerDropdown) {
     *         pickerDropdown.setAttribute('style', '');
     *     }
     * });
     * ```
     */
    onBeforeActive?: (name: string) => void;
    /**
     * containerDivRef: Root node to mount cacheNodes.
     */
    containerDivRef?: MutableRefObject<HTMLDivElement>;
    /**
     * cacheDivClassName: ClassName applied to cacheNodes.
     */
    cacheDivClassName?: string;
    /**
     * async: Whether to render the current cacheNode asynchronously. Default is false.
     */
    async?: boolean;
    /**
     * microAsync: Whether to render the current cacheNode using microAsync. Default is true.
     */
    microAsync?: boolean;
}

type KeepAliveRef = {
    getCaches: () => Array<CacheNode>;

    /**
     * Removes cacheNode by name.
     * @param name CacheNode name to remove.
     * @returns
     */
    removeCache: (name: string) => Promise<void>;

    /**
     * Cleans all cacheNodes.
     */
    cleanAllCache: () => void;

    /**
     * Cleans other cacheNodes except the current active cacheNode.
     */
    cleanOtherCache: () => void;

    /**
     * Refreshes cacheNode by name.
     * @param name CacheNode name to refresh. If name is not provided, refreshes the current active cacheNode.
     */
    refresh: (name?: string) => void;
}
```
