import { useLocation } from "@solidjs/router";
import { Portal } from "solid-js/web";

export default function Nav() {
	const location = useLocation();
	const active = (path: string) =>
		path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
	return (
		<Portal>
			<div class="fixed bottom-0 left-0 right-0 flex flex-row items-center justify-center p-4">
				<nav class="bg-vivid-pink rounded-4xl text-navy">
					<ul class="container flex items-center p-3">
						<li class="link px-2">
							<a href="/about">About</a>
						</li>
						<li class="link px-2 peer/project-link">
							<a href="/projects">Projects</a>
						</li>
					</ul>
				</nav>
			</div>
		</Portal>
	);
}
