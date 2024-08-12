---
group: 主题
order: 7
title: Logo
---


系统Logo 由组件 `SystemLogo` 来实现，它是一个 `SFC` 组件，可以通过 `props` 来设置它的样式。

```tsx
import type { SVGProps } from 'react';

const SystemLogo = memo((props: SVGProps<SVGSVGElement>) => {
  return IconLocalLogo({ ...props });
});

export default SystemLogo;

```
:::info{title=代码位置}
src/components/common/system-logo.tsx
:::

> 具体实现原理参考 [本地Icon](/zh/guide/icon/intro)
