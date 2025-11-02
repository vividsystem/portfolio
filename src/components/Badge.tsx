export default function Badge(props: { text: string }) {
	return (
		<div class="rounded-lg">
			<span>{props.text}</span>
		</div>
	)
}
