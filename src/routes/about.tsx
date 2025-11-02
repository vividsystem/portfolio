import { Meta, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function About() {
	return (
		<main class="mx-auto text-primary p-4">
			<Title>About vividsystem</Title>
			<Meta
				name="description"
				content="The about me page of vividsystem's personal website"
			/>

			<div class="w-fit m-0 p-4">
				<p class="float-left max-w-[75ch]">My name is <span class="supports-hover:not-hover:bg-primary bg-none"> [REDACTED]</span>, but you can call me vividsystem.<br />I am a student building software and hardware in his free-time. My current focus lies in full-stack web development.</p>
			</div>
		</main>
	);
}
