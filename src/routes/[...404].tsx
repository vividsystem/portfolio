import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function NotFound() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4">
			<Title>Page not found</Title>
			<h1 class="text-6xl text-sky-700 font-thin uppercase my-16">Page Not Found</h1>
			<p class="text-4xl">Go <A href="/" class="link text-vivid-pink">home</A></p>

		</main>
	);
}
