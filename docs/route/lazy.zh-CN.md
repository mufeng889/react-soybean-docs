---

order: 2  
title: 路由懒加载  

---

- 基于 `react-router-dom` V6 及以上版本的 `lazy` 语法实现了路由懒加载。

你无需做任何额外操作，只需按照以下格式编写路由页面组件即可：

```ts
export function Component() {
  return <div>Component</div>
}
```

- 组件名称必须为 `Component`，否则无法识别。
- 组件必须使用命名导出，不能使用默认导出，否则无法识别。

### Dev Tools 识别组件 <Badge type="warning">注意</Badge>

- 可以通过 `Component.displayName = xxx` 来设置组件名称，使其在 Dev Tools 中可识别。

更多信息请参考 [react-auto-route](https://github.com/mufeng889/react-auto-route) 的 `transform` 部分和 `README` 文档。
