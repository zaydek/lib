import React from "react"
import { useLayoutEffect } from "react"

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
interface LayoutDocumentTitleProps {
	title: string
	children?: React.ReactNode
}

export default function LayoutDocumentTitle(props: LayoutDocumentTitleProps) {
	useLayoutEffect(() => {
		const originalTitle = document.title
		document.title = props.title
		return () => {
			document.title = originalTitle
		}
	}, [props.title])
	return <>{props.children}</>
}
