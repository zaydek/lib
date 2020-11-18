import range from "./range"

test("range: range(to)", () => {
	expect(range(0)).toStrictEqual([])
	expect(range(1)).toStrictEqual([0])
	expect(range(4)).toStrictEqual([0, 1, 2, 3])
	expect(range(8)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7])
})

test("range: range(from, to)", () => {
	expect(range(0, 0)).toStrictEqual([])
	expect(range(0, 1)).toStrictEqual([0])
	expect(range(0, 4)).toStrictEqual([0, 1, 2, 3])
	expect(range(0, 8)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7])
})

test("range: range(from, to, step) (1 of 2)", () => {
	expect(() => range(0, 0, 0)).toThrow("range: step must be greater than 0")
	expect(range(0, 0, 1)).toStrictEqual([])
	expect(range(0, 1, 1)).toStrictEqual([0])
	expect(range(0, 4, 1)).toStrictEqual([0, 1, 2, 3])
	expect(range(0, 8, 1)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7])
})

test("range: range(from, to, step) (2 of 2)", () => {
	expect(() => range(0, 0, 0)).toThrow("range: step must be greater than 0")
	expect(range(0, 0, 2)).toStrictEqual([])
	expect(range(0, 1, 2)).toStrictEqual([0])
	expect(range(0, 4, 2)).toStrictEqual([0, 2])
	expect(range(0, 8, 2)).toStrictEqual([0, 2, 4, 6])
})
