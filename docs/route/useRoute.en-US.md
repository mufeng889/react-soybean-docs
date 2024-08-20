---

group: Simple Router  
order: 3  
title: useRoute

---

## Properties

• **fullPath**: `string`

The complete URL including `search` and `hash`. This string is percent-encoded.

## hash

The hash of the current URL, starting with `#` if present.

## matched

An array of RouteRecord objects that were passed when the route was added. It may also contain redirect records.

## meta

• **meta**: RouteMeta

The `meta` property merged from all matching route records.

## name

• **name**: string

The name of the matched route.

## params

An object containing the decoded parameters extracted from the `path`.

## path

The pathname segment of the URL, percent-encoded.

## query

An object representing the `search` property of the current URL.
