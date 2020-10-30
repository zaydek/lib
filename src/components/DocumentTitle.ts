import { useEffect } from "react"

interface LayoutDocumentTitleProps {
	title: string
	children: JSX.Element
}

// Ex:
//
// <DocumentTitle title="...">
//   {children}
// </DocumentTitle>
//
// Or
//
// <DocumentTitle title="..." />
//
export default function DocumentTitle({ title, children }: LayoutDocumentTitleProps): JSX.Element | null {
	useEffect(() => {
		const originalTitle = document.title
		document.title = title
		return () => {
			document.title = originalTitle
		}
	}, [title])
	return children || null
}
