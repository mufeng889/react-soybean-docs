---

group: Scripts
order: 3
title: Git Hooks

---

## Introduction

> Most JavaScript code is often written with the habit of relying on runtime checks to catch issues.
>
> For example, when developing with JavaScript for backend integration, the typical process involves waiting for the API to be ready, then calling the API, receiving the data, and figuring out how to inject the data into the page.
>
> This workflow might seem fine for simple pages, but for more complex scenarios, it often results in a foundation of messy code that becomes a headache to debug and maintain later on.

TypeScript is a powerful tool for writing high-quality code. Defining data types is essentially defining your frontend data models. Once the data models are established, various operations on these models can be implemented using pure functions. When combined with a reactive system, you only need to import these pure functions and apply a simple secondary encapsulation. Many people struggle with TypeScript's type system primarily because they haven't switched their development mindset. You might want to try this development approach to experience the benefits of TypeScript before deciding whether to remove `git-hooks`.

Using `git-hooks` for pre-commit checks not only helps improve your code quality and reduces project maintenance costs, but also makes it easier to take over someone else's code. The few downsides are mainly a small learning curve and a period of adjustment. However, the benefits are substantial. (The SoybeanAdmin project has a 100% type coverage, serving as a best practice, and is an excellent way for you to get started with TypeScript.) You can try it out for a while (feel free to discuss in our community group anytime) before deciding whether to remove `git-hooks`.

## Removing Git Hooks

:::code-group

```bash [Temporarily Disable Checks]
It is recommended to follow strict type checks as much as possible during the initial phase, and only temporarily bypass the checks when absolutely necessary.

git add .

git commit -m "commit message" # [!code --]
git commit -m "commit message" --no-verify # [!code ++]

git push
```

```bash [Permanently Disable Checks]
[!CAUTION] Not recommended
1. Remove the commands in the `simple-git-hooks` section of the `package.json` file.

2. Run the `simple-git-hooks` command.

```

:::
