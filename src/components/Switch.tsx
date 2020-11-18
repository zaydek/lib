import React from "react"

// Ex:
//
// <Case case={...}>
//   ...
// <Case>
//
interface CaseProps<T> {
	case: T
	children?: React.ReactNode
}

export function Case<T>(props: CaseProps<T>) {
	return <>{props.children}</>
}

// Ex:
//
// <Switch on={...}>
//   <Case case={...}>
//     ...
//   <Case>
//   <Case case={...}>
//     ...
//   <Case>
//   <Case case={...}>
//     ...
//   <Case>
// </Switch>
//
// TODO: Add tests.
//
interface SwitchProps<T> {
	on: T
	children: React.ReactElement<CaseProps<T>>[]
}

export function Switch<T>(props: SwitchProps<T>) {
	return props.children.find(each => each.props.case === props.on) || null
}
