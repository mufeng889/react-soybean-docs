---

group: Simple Router  
order: 1  
title: useRouter

---

## currentRoute

The current `RouteLocationNormalized`.

## addReactRoutes

▸ **addReactRoutes**(routes: ElegantConstRoute[]): () => `void`

---

## getRoutes

▸ **getRoutes**(): [`RouteRecordNormalized`](/docs/route/use-route)[]

Get the complete list of [route records](/docs/route/use-route).

#### Returns

[`RouteRecordNormalized`](/docs/route/use-route)[]

---

## getAllRouteNames

▸ **getAllRouteNames**(): `string`[]

Get the complete list of all route names.

---

## resetRoute

- Resets routes to the initial state.

---

## getRouteByName

▸ **getRouteByName**(name: `string`): [`RouteRecordNormalized`](/docs/route/use-route) | `undefined`

- Get a route record by name.

---

## push

▸ **push**(to: `string` | `RouteLocationRaw`): `Promise<void>`

Programmatically navigate to a new URL by adding a record to the history stack.

---

## getRouteMetaByKey

▸ **getRouteMetaByKey**(key: `string`): `any` | `undefined`

- Get the meta property of a route record by key.

---

## resolve

▸ **resolve**(to: `string` | `Location`): [`RouteLocationNormalizedLoaded`](/docs/route/use-route)

- Resolve a route location and return a normalized route record.

## back

▸ **back**(): `void`

Navigate backward in the history stack by calling `history.back()`. Equivalent to `navigation(-1)`.

### forward

▸ **forward**(): `void`

Navigate forward in the history stack by calling `history.forward()`. Equivalent to `navigation(1)`.

## go

▸ **go**(`delta`): `void`

Move forward or backward in the history stack. Equivalent to `navigation(number)`.

#### Parameters

| Name    | Type     | Description                                                |
| :------ | :------- | :--------------------------------------------------------- |
| `delta` | `number` | The position in the history stack relative to the current page you want to move to. |
