import { A } from "@solidjs/router";
import { ArrowUpRight } from "lucide-solid";
import { GithubIcon, SlackIcon } from "~/components/Icons";

export default function Contact() {
	return (
		<main class="p-4 text-primary">
			<h1 class="text-2xl lg:text-5xl text-shadow-solid-vivid-pink underline decoration-8 pb-4">Contact</h1>
			<p class="text-xl lg:text-4xl">Below you'll find my socials. I might take ages to respond.</p>
			<div>
				<A href="https://hackclub.slack.com/team/U097J2YPW1H" class="flex flex-row items-center p-2 gap-2 link-vivid-pink no-underline w-fit">
					<SlackIcon class="size-8 fill-white" />
					<h2 class="text-xl lg:text-4xl">@vividsystem</h2>
					<ArrowUpRight class="size-8 stroke-[4]" />
				</A>
				<A href="https://github.com/vividsystem" class="flex flex-row items-center p-2 gap-2 link-vivid-pink no-underline w-fit">
					<GithubIcon class="size-8 fill-white" />
					<h2 class="text-xl lg:text-4xl">@vividsystem</h2>
					<ArrowUpRight class="size-8 stroke-[4]" />
				</A>

			</div>
		</main >
	)
}
