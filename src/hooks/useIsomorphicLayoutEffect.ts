import { useEffect, useLayoutEffect } from "react"

// https://github.com/streamich/react-use/blob/master/src/useIsomorphicLayoutEffect.ts
export default typeof window !== "undefined" ? useLayoutEffect : useEffect
