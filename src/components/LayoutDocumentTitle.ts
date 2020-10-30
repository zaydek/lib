import { useLayoutEffect } from "react"

interface DocumentTitleProps {
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
export default function LayoutDocumentTitle({ title, children }: DocumentTitleProps): JSX.Element | null {
	useLayoutEffect(() => {
		const originalTitle = document.title
		document.title = title
		return () => {
			document.title = originalTitle
		}
	}, [title])
	return children || null
}
