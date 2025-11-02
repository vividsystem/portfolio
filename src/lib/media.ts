import { createEffect, createSignal } from "solid-js"
export const useMatchMedia = (query: string) => {
	const [matches, setMatches] = createSignal(false)

	createEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches()) {
			setMatches(media.matches);
		}

		const listener = () => setMatches(media.matches);
		media.addEventListener('change', listener);

		return () => media.removeEventListener('change', listener);
	})

	return matches

}
