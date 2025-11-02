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
				<p class="float-left max-w-[75ch] text-lg lg:text-2xl">My name is <span class="supports-hover:not-hover:bg-primary bg-none"> [REDACTED]</span>, but you can call me vividsystem.<br />I am a student building software and hardware in his free-time. My current focus lies in full-stack web development.<br />
					This journey began in first grade when I got a book about programming in <A href="https://scratch.mit.edu/" class="link-vivid-pink">Scratch</A>.
					Back then it was just playing around at a computer as there weren't many things that could be done on the (even in those days) ancient Windows XP&#8482; computer.
					And now this <span class="italic">small little</span> hobby of mine is progressing to be the thing I will do the rest of my life. <br />
					Over time I have learned how to build web-apps using modern <A href="https://www.typescriptlang.org/" class="link-vivid-pink">Typescript</A>-Frameworks like <A href="https://www.solidjs.com/" class="link-vivid-pink">SolidJS</A>, style them (even though it is a pain everytime) and how to build my own <A href="/projects" class="link-vivid-pink">Hardware</A>.
					<br />

					<span>Come along on this journey and see where it takes me!</span>

				</p>
			</div>
		</main>
	);
}
