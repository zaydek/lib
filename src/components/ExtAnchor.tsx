import React from "react"
import { target_blank } from "src/attrs"

export default function ExtAnchor(props: React.ComponentProps<"a">) {
	return <a {...props} {...target_blank} />
}
