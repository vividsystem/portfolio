import { Meta, Title } from "@solidjs/meta"
import { createAsync, query, useParams } from "@solidjs/router"
import { createResource, For, Show } from "solid-js"
import RepoCard from "~/components/RepoCard"

export interface Repository {
	id: number,
	name: string,
	full_name: string
	html_url: string
	description?: string
	fork: boolean
	homepage?: string
	forks_count: number
	stargazers_count: number
	watchers_count: number
	size: number // in kB
	tags_url: string
	topics: string[]
	language?: string
}

export interface FullRepository extends Repository {
}

const getRepos = query(async () => {
	const res = await fetch("https://api.github.com/users/vividsystem/repos?type=owner&per_page=100")
	if (!res.ok) {
		return
	}
	let repos: Repository[];
	try {
		repos = await res.json() as Repository[]

	} catch (e) {
		console.log(e, res)
		return
	}

	return repos

}, "get_repos")


export default function Projects() {
	const params = useParams();
	const allowed_forks: string[] = []
	const hidden_repos: string[] = ["portfolio", "vividsystem", "siege"]
	const repos = createAsync(() => getRepos())
	return (
		<main class="p-4">
			<Title>projects | vividsystem</Title>
			<Meta
				name="description"
				content="View projects vividsystem has made!"
			/>
			<h1 class="text-2xl lg:text-5xl text-primary pb-4">My projects</h1>
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<For each={repos() ?? []} fallback={
					<div>
						<h2 class="text-xl lg:text-4xl text-vivid-pink">Huh!? Where did the projects go?</h2>
						<p class="text-vivid-blue text-lg lg:text-3xl">You might have hit Githubs rate-limit</p>
					</div>
				}>
					{(repo) => (
						<Show when={(!repo.fork || allowed_forks.includes(repo.name)) && !hidden_repos.includes(repo.name) && (!params.type || repo.topics.includes(params.type))}>
							<RepoCard repo={repo} />
						</Show>
					)}
				</For>
			</div>

		</main>
	)
}
