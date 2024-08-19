---

group: Simple Router  
order: 1  
title: useRouter

---


## currentRoute

当前的 RouteLocationNormalized。

## addReactRoutes

▸ **addReactRoutes**(routes: ElegantConstRoute[]): () => `void`

---

## getRoutes

▸ **getRoutes**(): [`RouteRecordNormalized`](RouteRecordNormalized.md)[]

获得所有[路由记录](../index.md#routerecord)的完整列表。

#### 返回值

[`RouteRecordNormalized`](RouteRecordNormalized.md)[]

---

## getAllRouteNames

▸ **getAllRouteNames**(): `string`[]

获得所有路由名称的完整列表。

---

## resetRoute

- 重置路由为初始状态。

---

## getRouteByName

▸ **getRouteByName**(name: `string`): [`RouteRecordNormalized`](RouteRecordNormalized.md) | `undefined`

- 通过名称获取路由记录。

---

## push

▸ **push**(to: `string` | `RouteLocationRaw`): `Promise`<`void`\>

程序式地通过将一条记录加入到历史栈中来导航到一个新的 URL

---

## getRouteMetaByKey

▸ **getRouteMetaByKey**(key: `string`): `any` | `undefined`

- 通过 key 获取路由记录的 meta。

---

## resolve

▸ **resolve**(to: `string` | `Location`): [`RouteLocationNormalizedLoaded`](RouteLocationNormalizedLoaded.md)

- 解析一个路由地址，返回一个规范化的路由记录。
