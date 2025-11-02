import { createMousePosition, MousePosition, useMousePosition } from "@solid-primitives/mouse";
import { children, createEffect, createSignal, JSX, onMount, ParentProps, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";

interface PositionableElementProps extends JSX.HTMLAttributes<HTMLDivElement> {
	x: number
	y: number
}
export const PositionableElement = (props: ParentProps<PositionableElementProps>) => {
	const [rest, elem] = splitProps(props, ["children", "x", "y"])
	if (!elem.class?.includes("absolute")) {
		elem.class = elem.class ? elem.class + ' absolute' : "absolute"
	}
	return (
		<div {...elem} style={`left: ${rest.x}px; top: ${rest.y}px`}>
			{props.children}
		</div >
	)
}



export default function Cursor() {
	const [r, setR] = createSignal<Window | undefined>(undefined)
	const pos = createMousePosition(r())
	const [delta, setDelta] = createSignal<{ x: number, y: number }>({ x: pos.x, y: pos.y })
	createEffect(() => {
		if (window !== r()) {
			setR(r)
		}
		setDelta((prev) => ({ x: pos.x - prev.x, y: pos.y - prev.y }))
	})

	return (
		<div>
			<PositionableElement x={pos.x} y={pos.y} class="absolute z-[5000] rounded-full border-2 border-vivid-pink size-16 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center" >
				<div class="size-2 bg-vivid-pink rounded-full">
				</div>

			</PositionableElement>
		</div>
	)
}
