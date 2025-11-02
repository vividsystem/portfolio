import { A, createAsync, query } from "@solidjs/router";
import { ArrowUpRight, CodeXml, GitMerge, GitPullRequest } from "lucide-solid";
import { createEffect, createResource, Show } from "solid-js";
import { Repository } from "~/routes/projects";

const getTopics = query(async (topics_url) => {
	const res = await fetch(topics_url)
	const data = (await res.json()) as { names: Array<string> }
	return data.names
}, "get_topics")

const getLanguages = query(async (languages_url) => {
	const res = await fetch(languages_url)
	const data = (await res.json()) as { [lang: string]: number }
	return Object.keys(data)
}, "get_languages")

export default function RepoCard(props: { repo: Repository }) {
	const topics = createAsync(() => getTopics(props.repo.topics_url))
	const languages = createAsync(() => getLanguages(props.repo.languages_url))
	createEffect(() => {
		console.log(languages.latest)
	})
	return (

		<div class="bg-primary p-4 w-full shadow-solid-vivid-pink flex flex-col last:justify-end">

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
			<Show when={languages.latest !== undefined}>
				<p class="text-secondary">written in {languages.latest?.join(" ")}</p>
			</Show>


		</div>
	)
}
