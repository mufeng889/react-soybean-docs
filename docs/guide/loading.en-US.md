---

group: Themes
order: 6  
title: Loading

---

![](/loading01.png)

## Styles

- The loading style during system initialization is implemented via HTML code.

  :::info{title=Code Location}
  src/plugins/loading.ts
  :::

- The system's Logo is implemented using the `SystemLogo` component.

  [System Logo](./logo.md)

## Rendering Principle

A `setupLoading` function is created, which primarily sets up the animation effect during page loading. This loading animation includes a system logo, a rotating dot matrix animation, and a title text. All elements' colors are dynamically generated based on the theme color `themeColor` retrieved from local storage. It searches the DOM for an element with the ID `app` as the mounting point for the loading animation. If this element is found, its inner HTML is replaced with the newly constructed loading animation HTML structure.

```ts
export function setupLoading() {
  const themeColor = localStg.get('themeColor') || '#DB5A6B';

  const { r, g, b } = getRgbOfColor(themeColor);

  const primaryColor = `--primary-color: ${r} ${g} ${b}`;

  const loadingClasses = [
    'left-0 top-0',
    'left-0 bottom-0 animate-delay-500',
    'right-0 top-0 animate-delay-1000',
    'right-0 bottom-0 animate-delay-1500'
  ];

  const logoWithClass = systemLogo.replace('<svg', `<svg class="size-128px text-primary"`);

  const dot = loadingClasses
    .map(item => {
      return `<div class="absolute w-16px h-16px bg-primary rounded-8px animate-pulse ${item}"></div>`;
    })
    .join('\n');

  const loading = `
<div class="fixed-center flex-col" style="${primaryColor}">
  ${logoWithClass}
  <div class="w-56px h-56px my-36px">
    <div class="relative h-full animate-spin">
      ${dot}
    </div>
  </div>
  <h2 class="text-28px font-500 text-#646464">${$t('system.title')}</h2>
</div>`;

  const app = document.getElementById('app');

  if (app) {
    app.innerHTML = loading;
  }
}
```

:::info{title=Code Location}
src/plugins/loading.ts
:::

Finally, the `setupLoading` function needs to be registered in `main.tsx`.

```typescript
async function setupApp() {
  setupLoading();
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <ErrorBoundary fallbackRender={FallbackRender}>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    );
  } else {
    throw new Error(
      "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
    );
  }
}
```
