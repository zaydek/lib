# @zaydek/lib

`@zaydek/lib` is a typed standard library for personal use.

To get started, run this command:

```bash
yarn add --dev @zaydek/lib
# npm install --save-dev @zaydek/lib
```

## Table of Contents

- [`components/DocumentTitle`](#DocumentTitle)
- [`components/LayoutDocumentTitle`](#LayoutDocumentTitle)

---

<a id="DocumentTitle" href="#DocumentTitle">`components/DocumentTitle`</a><br>
<a id="LayoutDocumentTitle" href="#LayoutDocumentTitle">`components/LayoutDocumentTitle`</a>

```ts
interface Props {
	title: string
	children: JSX.Element
}
```

Wrapper or side-effect for setting `document.title`.

For example:

<!-- prettier-ignore -->
```jsx
import { DocumentTitle } from "@zaydek/lib/components"

function ComponentWithChildren({ children }) {
	return (
		<DocumentTitle title="...">
			{children}
		</DocumentTitle>
	)
}
```

```jsx
import { LayoutDocumentTitle } from "@zaydek/lib/components"

function ComponentWithSideEffect() {
	return <LayoutDocumentTitle title="..." />
}
```

## License

Licensed as [MIT](./LICENSE).
