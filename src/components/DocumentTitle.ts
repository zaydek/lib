import { useEffect } from "react"

interface Props {
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
export default function DocumentTitle({ title, children }: Props): JSX.Element | null {
	useEffect(() => {
		const originalTitle = document.title
		document.title = title
		return () => {
			document.title = originalTitle
		}
	}, [title])
	return children || null
}
