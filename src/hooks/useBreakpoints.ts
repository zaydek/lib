import { useLayoutEffect, useState } from "react"

interface Breakpoints {
	xs: number
	sm: number
	md: number
	lg: number
	xl: number
}

const defaultBreakpoints = {
	xs: 40 * 16, // ->  640px
	sm: 48 * 16, // ->  768px
	md: 56 * 16, // ->  896px
	lg: 64 * 16, // -> 1024px
	xl: 80 * 16, // -> 1280px
}

// Ex:
//
// function Component() {
//   const { sm } = useBreakpoints()
//   return (
//     sm && (
//       ...
//     )
//   )
// }
//
export default function useBreakpoints(breakpoints: Breakpoints = defaultBreakpoints) {
	const [xs, setXS] = useState(true)
	const [sm, setSM] = useState(true)
	const [md, setMD] = useState(true)
	const [lg, setLG] = useState(true)
	const [xl, setXL] = useState(true)

	useLayoutEffect(() => {
		function handleResize() {
			setXS(window.innerWidth >= breakpoints.xs)
			setSM(window.innerWidth >= breakpoints.sm)
			setMD(window.innerWidth >= breakpoints.md)
			setLG(window.innerWidth >= breakpoints.lg)
			setXL(window.innerWidth >= breakpoints.xl)
		}
		handleResize()
		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [breakpoints])

	return { xs, sm, md, lg, xl }
}
