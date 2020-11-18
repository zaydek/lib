import React from "react"
import { useEffect } from "react"

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
interface DocumentTitleProps {
	title: string
	children?: React.ReactNode
}

export default function DocumentTitle(props: DocumentTitleProps) {
	useEffect(() => {
		const originalTitle = document.title
		document.title = props.title
		return () => {
			document.title = originalTitle
		}
	}, [props.title])

	return <>{props.children}</>
}
