import { MetaProvider, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
	return (
		<MetaProvider>
			<main class="text-center mx-auto text-gray-700 p-4">
				<Title>vividsystem</Title>
				<h1 class="max-6-xs text-9xl text-primary font-normal">Hi, I am <br /><span class="intro hover:font-bold hover:text-vivid-pink text-vivid-blue">vividsystem</span></h1>
				<p class="text-4xl text-secondary">A student <A class="link" href="/projects">building stuff</A> in his free-time</p>
			</main>
		</MetaProvider>
	);
}
