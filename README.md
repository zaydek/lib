# @zaydek/lib

`@zaydek/lib` is a typed standard library for personal use. Contributions and improvements are welcome as issues and or pull requests.

To get started, simply run this command:

```bash
yarn add @zaydek/lib
# or npm i @zaydek/lib
```

## Table of Contents

- [`attrs/disableAutoCorrect`](#disableAutoCorrect)
- [`attrs/target_blank`](#target_blank)
- [`components/DocumentTitle`](#DocumentTitle)
- [`components/LayoutDocumentTitle`](#LayoutDocumentTitle)

---

<a id="disableAutoCorrect" href="#disableAutoCorrect">`attrs/disableAutoCorrect`</a><br>

Attributes for disabling autocorrect.

Read https://davidwalsh.name/disable-autocorrect for more information.

Usage:

<!-- prettier-ignore -->
```tsx
import { disableAutoCorrect } from "@zaydek/lib/attrs"

// ...

<input type="text" {...disableAutoCorrect} />
```

---

<a id="target_blank" href="#target_blank">`attrs/target_blank`</a>

Attributes for safely opening an anchor in a separate page.

Read https://mathiasbynens.github.io/rel-noopener for more information.

Usage:

<!-- prettier-ignore -->
```tsx
import { target_blank } from "@zaydek/lib/attrs"

// ...

<a href="..." {...target_blank} />
```

---

<a id="DocumentTitle" href="#DocumentTitle">`components/DocumentTitle`</a><br>
<a id="LayoutDocumentTitle" href="#LayoutDocumentTitle">`components/LayoutDocumentTitle`</a>

```ts
interface DocumentTitleProps {
	title: string
	children: JSX.Element
}
```

The `DocumentTitle` components declaratively render `document.title`. They can be used as wrapper components or as side-effects.

The difference between `DocumentTitle` and `LayoutDocumentTitle` is simply whether `useEffect` or `useLayoutEffect` is used. `useLayoutEffect` renders _eagerly_ whereas `useEffect` renders _lazily_. If you don’t know what that means, use `DocumentTitle`.

Usage:

<!-- prettier-ignore -->
```tsx
import { DocumentTitle } from "@zaydek/lib/components"

// ...

<DocumentTitle title="...">
	{children}
</DocumentTitle>
```

<!-- prettier-ignore -->
```tsx
import { DocumentTitle } from "@zaydek/lib/components"

// ...

<DocumentTitle title="..." />
```

## License

Licensed as [MIT](./LICENSE).
