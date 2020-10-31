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
interface Props {
	title: string
	children?: React.ReactNode
}

export default function DocumentTitle(props: Props) {
	useEffect(() => {
		const originalTitle = document.title
		document.title = props.title
		return () => {
			document.title = originalTitle
		}
	}, [props.title])
	return <>{props.children}</>
}
