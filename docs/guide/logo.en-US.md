---

group: Themes 
order: 7  
title: Logo

---

The system logo is implemented using the `SystemLogo` component, which is a `SFC` (Stateless Functional Component). You can set its style via `props`.

```ts
import type { SVGProps } from 'react';

const SystemLogo = memo((props: SVGProps<SVGSVGElement>) => {
  return IconLocalLogo({ ...props });
});

export default SystemLogo;

```

:::info{title=Code Location}
src/components/common/system-logo.tsx
:::

> For more details on the implementation, refer to [Local Icon](/zh/guide/icon/intro)
