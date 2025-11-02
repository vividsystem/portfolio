import { A } from "@solidjs/router";

export default function Header() {
	return (
		<header class="static top-0 right-0 left-0 flex flex-row">
			<A href="/" class="link-vivid-pink aspect-square"><img src="/favicon.svg" alt="vividsystem logo" class="size-16" /></A>

		</header >
	)
}
