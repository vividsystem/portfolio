import { MetaProvider, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
	return (
		<MetaProvider>
			<main class="flex flex-col justify-self-center items-center text-gray-700 p-4 min-h-full">
				<Title>vividsystem</Title>
				<div>
					<h1 class="text-4xl lg:text-9xl text-primary font-normal py-4">Hi, I am <br /><span class="intro supports-hover:not-hover:bg-primary supports-hover:hover:text-vivid-pink">vividsystem</span></h1>
					<p class="text-2xl lg:text-4xl text-secondary">I <A class="link" href="/projects">build things</A> in my free-time.</p>
				</div>
			</main>
		</MetaProvider>
	);
}
