import React from "react"
import { target_blank } from "../attrs"

interface ExtAnchorProps extends React.ComponentProps<"a"> {
	href: string
}

// Ex:
//
// <ExtAnchor href="TODO">Hello, world!</ExtAnchor>
// -> <a href="TODO" {...target_blank}>Hello, world!</ExtAnchor>
//
// TODO: Make `href` required?
export default function ExtAnchor({ href, ...props }: ExtAnchorProps) {
	return <a href={href} {...props} {...target_blank} />
}
