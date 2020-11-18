import React from "react"
import { target_blank } from "../attrs" // TODO: Change to absolute imports?

// Ex:
//
// <ExtAnchor href="TODO">Hello, world!</ExtAnchor>
// -> <a href="TODO" {...target_blank}>Hello, world!</ExtAnchor>
//
// TODO: Make `href` required?
export default function ExtAnchor(props: React.ComponentProps<"a">) {
	return <a {...props} {...target_blank} />
}
