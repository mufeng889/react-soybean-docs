---

group: Simple Router  
order: 3 
title: useRoute

---

## 属性

• **fullPath**: `string`

包括 `search` 和 `hash` 在内的完整地址。该字符串是经过百分号编码的。

## hash

当前地址的 hash。如果存在则以 `#` 开头。

## matched

包含添加记录时被传入的 RouteRecord 的数组。它也可以包含重定向记录。

## meta

• **meta**: RouteMeta

从所有匹配的路由记录中合并的 `meta` 属性

## name

• **name**: string

匹配的路由名称。

## params

从 `path` 中提取出来并解码后的参数对象。

## path

经过百分号编码的 URL 中的 pathname 段。

## query

代表当前地址的 `search` 属性的对象
