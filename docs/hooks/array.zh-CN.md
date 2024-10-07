---
order: 4
title: useArray
---

` useArray` 用于方便对数组格式的数据进行操作。

- `object`类型的用`ahooks`的`useSetState`

## 用法

```ts
  const [newses, { push, remove, unshift, up, down, pop, shift, reverse, sort }] = useArray([
    { id: 1, content: t('page.home.projectNews.desc1'), time: '2021-05-28 22:22:22' },
    { id: 2, content: t('page.home.projectNews.desc2'), time: '2023-10-27 10:24:54' },
    { id: 3, content: t('page.home.projectNews.desc3'), time: '2021-10-31 22:43:12' },
    { id: 4, content: t('page.home.projectNews.desc4'), time: '2022-11-03 20:33:31' },
    { id: 5, content: t('page.home.projectNews.desc5'), time: '2021-11-07 22:45:32' }
  ]);
```

- 详细代码示例可参考：[useArray](https://github.com/mufeng889/react-soybean-admin/blob/master/src/pages/home/modules/ProjectNews.tsx)

- [效果展示](https://react-soybean.ohh-889.com/home)
