<script lang="ts">
	export let id: string;
	export let type: 'text' | 'email' = 'text';
	export let placeholder: string = '';
	let classes = '';
	export { classes as class };
	export let variant: 'primary' | 'secondary' = 'primary';
</script>

<label class={`block relative group bg-slate-900 ${classes}`} for={id}>
	{#if variant === 'primary'}
		<svg
			class={`stroke-violet-700  button-shadow w-full
h-full group-hover:stroke-violet-600 `}
			viewBox="0 0 353 59"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M17.6154 1L1 15.8696L1.00011 58H335.904L352 43.1304V1H17.6154Z" stroke-width="2" />
		</svg>
	{:else if variant === 'secondary'}
		<svg
			class={`stroke-violet-300  button-shadow w-full
h-full group-hover:stroke-violet-400 `}
			viewBox="0 0 353 59"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M1 1V43L17.6154 58H352V16L335.904 1H1Z" stroke="#C4B5FD" stroke-width="2" />
		</svg>
	{/if}

	<input
		{type}
		{id}
		name={id}
		{placeholder}
		class="absolute top-[50%] peer translate-y-[-50%] left-0
		block ml-4 w-[90%] bg-transparent outline-none text-slate-50
		placeholder:text-slate-600"
	/>
</label>
