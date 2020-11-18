// if (step === undefined) {
// 	const nstep = 1
// 	step = current => current + nstep
// } else if (typeof step === "number") {
// 	const nstep = step
// 	step = current => current + nstep
// }

// Ex:
//
// range(1) // [0]
// range(4) // [0, 1, 2, 3]
// range(8) // [0, 1, 2, 3, 4, 5, 6, 7]
//
// Based on https://stackoverflow.com/a/30651275.
//
export default function range(to: number): number[]
export default function range(from: number, to: number): number[]
export default function range(from: number, to: number, step: number): number[]
export default function range(from: number, to?: number, step?: number): number[] {
	if (to === undefined && step === undefined) {
		to = from
		return Array(to)
			.fill(undefined)
			.map((_, x) => x)
	}
	if (from !== undefined && to !== undefined && step === undefined) {
		return Array(to - from)
			.fill(undefined)
			.map((_, x) => from + x)
	}
	if (from !== undefined && to !== undefined && typeof step === "number") {
		if (step <= 0) {
			throw new Error("range: step must be greater than 0")
		}
		const arr = []
		for (let x = from; x < to; x += step) {
			arr.push(x)
		}
		return arr
	}
	return []
}
