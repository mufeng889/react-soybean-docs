---

group: Simple Router  
order: 1  
title: useRouter

---


## addReactRoutes

▸ **addReactRoutes**(routes: ElegantConstRoute[]): () => `void`

---

## getRoutes

▸ **getRoutes**(): [`RouteRecordNormalized`](/docs/route/use-route-cn)[]

获得所有[路由记录](/docs/route/use-route-cn)的完整列表。

#### 返回值

[`RouteRecordNormalized`](/docs/route/use-route-cn)[]

---

## getAllRouteNames

▸ **getAllRouteNames**(): `string`[]

获得所有路由名称的完整列表。

---

## resetRoute

- 重置路由为初始状态。

---

## getRouteByName

▸ **getRouteByName**(name: `string`): [`RouteRecordNormalized`](/docs/route/use-route-cn) | `undefined`

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

▸ **resolve**(to: `string` | `Location`): [`RouteLocationNormalizedLoaded`](/docs/route/use-route-cn)

- 解析一个路由地址，返回一个规范化的路由记录。

## back

▸ **back**(): `void`

通过调用 `history.back()` 在可能的情况下在历史中后退。相当于 `navigation(-1)`。

### forward

▸ **forward**(): `void`

通过调用 `history.forward()` 在可能的情况下在历史中前进。相当于 `navigation(1)`。

## go

▸ **go**(`delta`): `void`

允许你在历史中前进或后退。相当于 `navigation(number)`。

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `delta` | `number` | 相对于当前页面你想要移动到的历史中的位置 |
