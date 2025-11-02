import { createMousePosition, MousePosition, useMousePosition } from "@solid-primitives/mouse";
import { createEffect, createSignal, onMount, Show } from "solid-js";
import { Portal } from "solid-js/web";

export default function Cursor() {
	const [r, setR] = createSignal<Window | undefined>(undefined)
	const pos = createMousePosition(r())
	createEffect(() => {
		if (window !== r()) {
			setR(r)
		}
		console.log(pos.x, pos.y)
	})

	return (
		<div class={`z-[99] absolute bg-white size-5`} style={`left: ${pos.x}px; top: ${pos.y}px`}>
		</div>
	)
}
