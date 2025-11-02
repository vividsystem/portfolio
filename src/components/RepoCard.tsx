import { A, createAsync, query } from "@solidjs/router";
import { ArrowUpRight, CodeXml, GitMerge, GitPullRequest } from "lucide-solid";
import { createEffect, createResource, Show } from "solid-js";
import { Repository } from "~/routes/projects";

export default function RepoCard(props: { repo: Repository }) {
	return (

		<div class="bg-primary p-4 w-full shadow-solid-vivid-pink flex flex-col last:justify-self-end relative">

			<div class="flex flex-row justify-between items-center">
				<h2 class="text-xl lg:text-3xl text-navy text-bold underline underline-offset-4 underline-vivid-pink decoration-5">{props.repo.fork ? props.repo.full_name : props.repo.name}</h2>
				<div class="flex flex-row">
					<Show when={props.repo.homepage}>
						<A href={props.repo.homepage!}><ArrowUpRight /></A>
					</Show>
					<A href={props.repo.html_url}><GitPullRequest class="size-8 hover:stroke-vivid-pink" /></A>
				</div>
			</div>
			<p class="text-secondary text-lg lg:text-2xl">{props.repo.description}</p>
			<Show when={props.repo.language}>
				<p class="text-secondary static bottom-0 mt-auto">written in {props.repo.language}</p>
			</Show>


		</div>
	)
}
