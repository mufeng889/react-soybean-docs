---

order: 2  
title: Route Lazy Loading  

---

- Route lazy loading is implemented using the `lazy` syntax introduced in `react-router-dom` v6 and above.

You don't need to take any extra steps. Simply write your route page components in the following format:

```ts
export function Component() {
  return <div>Component</div>
}
```

- The component must be named `Component`, otherwise, it won't be recognized.
- The component must be exported (not as a default export), or it won't be detected.

### Recognizing Components in Dev Tools <Badge type="warning">Note</Badge>

- You can set `Component.displayName = xxx` to define the component name, making it identifiable in Dev Tools.

For more details, check out the `transform` section and `README` of [react-auto-route](https://github.com/mufeng889/react-auto-route).
