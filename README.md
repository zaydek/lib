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
- [`components/Switch`](#Switch)
- [`components/Case`](#Case)
- [`hooks/useBreakpoints`](#useBreakpoints)

---

<a id="disableAutoCorrect" href="#disableAutoCorrect">`attrs/disableAutoCorrect`</a><br>

Attributes for disabling autocorrect.

Read https://davidwalsh.name/disable-autocorrect for more information.

**Usage:**

<!-- prettier-ignore -->
```tsx
import { disableAutoCorrect } from "@zaydek/lib/attrs"

<input type="text" {...disableAutoCorrect} />
```

---

<a id="target_blank" href="#target_blank">`attrs/target_blank`</a>

Attributes for safely opening an anchor in a separate page.

Read https://mathiasbynens.github.io/rel-noopener for more information.

**Usage:**

<!-- prettier-ignore -->
```tsx
import { target_blank } from "@zaydek/lib/attrs"

<a href="…" {...target_blank} />
```

---

<a id="DocumentTitle" href="#DocumentTitle">`components/DocumentTitle`</a><br>
<a id="LayoutDocumentTitle" href="#LayoutDocumentTitle">`components/LayoutDocumentTitle`</a>

```ts
interface Props {
	title: string
	children?: React.ReactNode
}
```

The `DocumentTitle` components declaratively render `document.title`. They can be used as wrapper components or as side-effects.

The difference between `DocumentTitle` and `LayoutDocumentTitle` is simply whether `useEffect` or `useLayoutEffect` is used. `useLayoutEffect` renders _eagerly_ whereas `useEffect` renders _lazily_. If you don’t know what that means, use `DocumentTitle`.

**Usage:**

<!-- prettier-ignore -->
```tsx
import { DocumentTitle } from "@zaydek/lib/components"

<DocumentTitle title="…">
	{children}
</DocumentTitle>
```

<!-- prettier-ignore -->
```tsx
import { DocumentTitle } from "@zaydek/lib/components"

<DocumentTitle title="…" />
```

---

<a id="Switch" href="#Switch">`components/Switch`</a><br>
<a id="Case" href="#Case">`components/Case`</a><br>

Renders a switch-case expression using JSX. `<Default>` is not currently supported.

**Usage:**

```tsx
import { Switch, Case } from "@zaydek/lib/components"

<Switch on={…}>
  <Case case={…}>
    …
  <Case>
  <Case case={…}>
    …
  <Case>
  <Case case={…}>
    …
  <Case>
</Switch>
```

**Note:** `<Switch>` and `<Case>` are implemented using generics. This means you can use `<Switch<string>>` to enforce type-correctness for `on={…}` or `<Case<string>>` for `case={…}`. Note that `<Switch<string>>` **does not** enforce type-correctness for children `<Case>` elements.

---

<a id="useBreakpoints" href="#useBreakpoints">`hooks/useBreakpoints`</a><br>

Hook for conditionally rendering. The following breakpoints are used by default:

```ts
const defaultBreakpoints = {
	xs: 40 * 16, // ->  640px
	sm: 48 * 16, // ->  768px
	md: 56 * 16, // ->  896px
	lg: 64 * 16, // -> 1024px
	xl: 80 * 16, // -> 1280px
}
```

`useBreakpoints` simulates `@media (min-width: …)`. This API is preferred over `className="hidden sm:block"`.

You can parameterize breakpoints by passing a `Breakpoints` object. Note that only `xs-xl` breakpoints are supported.

**Usage:**

```tsx
import { useBreakpoints } from "@zaydek/lib/hooks"

function Component() {
	const screen = useBreakpoints()
	return (
		screen.sm && ( // @media (min-width: 768px) { … }
			…
		)
	)
}
```

## License

Licensed as [MIT](./LICENSE).
