import { toKebabCase, toTitleCase } from "./case"

test("toKebabCase", () => {
	expect(toKebabCase("")).toBe("")
	expect(toKebabCase("hello-world")).toBe("hello-world")
	expect(toKebabCase("HelloWorld")).toBe("hello-world")
	expect(toKebabCase(toTitleCase("hello-world"))).toBe("hello-world")
	expect(toKebabCase(toTitleCase("hello-world"))).toBe(toKebabCase(toTitleCase("hello-world")))
})

test("toTitleCase", () => {
	expect(toTitleCase("")).toBe("")
	expect(toTitleCase("hello-world")).toBe("HelloWorld")
	expect(toTitleCase("HelloWorld")).toBe("HelloWorld")
	expect(toTitleCase(toKebabCase("HelloWorld"))).toBe("HelloWorld")
	expect(toTitleCase(toKebabCase("HelloWorld"))).toBe(toTitleCase(toKebabCase("HelloWorld")))
})
