// Ex:
//
// toKebabCase("HelloWorld") -> "hello-world"
//
export function toKebabCase(title: string) {
	return title.replace(/[A-Z]/g, (ch, x) => (!x ? "" : "-") + ch.toLowerCase())
}

// Ex:
//
// toTitleCase("hello-world") -> "HelloWorld"
//
export function toTitleCase(kebab: string) {
	return kebab
		.split("-")
		.map(each => each.slice(0, 1).toUpperCase() + each.slice(1))
		.join("")
}
