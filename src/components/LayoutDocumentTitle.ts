import { useLayoutEffect } from "react"

interface Props {
	title: string
	children: JSX.Element
}

// Ex:
//
// <LayoutDocumentTitle title="...">
//   {children}
// </LayoutDocumentTitle>
//
// Or
//
// <LayoutDocumentTitle title="..." />
//
export default function LayoutDocumentTitle({ title, children }: Props): JSX.Element | null {
	useLayoutEffect(() => {
		const originalTitle = document.title
		document.title = title
		return () => {
			document.title = originalTitle
		}
	}, [title])
	return children || null
}
