import { A, useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import { Portal } from "solid-js/web";
import { useMatchMedia } from "~/lib/media";

export default function Nav() {
	const noHover = useMatchMedia("(hover: none)")

	const [open, setOpened] = createSignal(false)
	return (
		<Portal>
			<div class="fixed bottom-0 left-0 right-0 flex flex-row items-center justify-center p-4">
				<nav class="bg-vivid-pink rounded-4xl text-navy flex items-center">
					<ul class="container flex justify-center items-center p-3 relative">
						<li class="link-navy px-2 relative">
							<A href="/about">About</A>
						</li>
						<li class="link-navy px-2 group/projects relative">
							<A href="/projects" onClick={(e) => {
								if (noHover()) {
									e.preventDefault()
									setOpened(!open())
								}
							}}>Projects</A>
							<div class="group-hover/projects:visible group-hover/projects:pointer-events-auto group-focus/projects:visible invisible pointer-events-none absolute bottom-full pb-6  left-1/2 -translate-x-1/2" classList={{
								"visible": open() && noHover()
							}}>
								<div class="rounded-2xl p-4 bg-vivid-pink">
									<ul class="flex flex-col gap-2">
										<li class="link-navy px-2">Software</li>
										<li class="link-navy px-2">Hardware</li>
										<hr class="border-navy border-2 border-dotted" />
										<li class="link-navy px-2"><A href="/projects" />See all</li>
									</ul>
								</div>
							</div>
						</li>

						<li class="link-navy px-2 relative">
							<A href="/contact">Contact</A>
						</li>

					</ul>
				</nav>
			</div>
		</Portal>
	);
}
