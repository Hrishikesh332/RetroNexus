<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary';

	let classes = '';
	export { classes as class };
</script>

<button class={`relative group ${classes}`}>
	{#if variant === 'primary'}
		<svg
			class="stroke-violet-700 fill-violet-600 button-shadow w-full
		h-full group-hover:fill-violet-500"
			viewBox="0 0 161 59"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M15.8321 1L1 15.8696L1.00005 58H145.761L160 43.1304V1H15.8321Z" stroke-width="2" />
		</svg>
	{:else if variant === 'secondary'}
		<svg
			class="stroke-violet-300 fill-violet-200 button-shadow w-full
			h-full group-hover:fill-violet-300"
			viewBox="0 0 161 59"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M1.00005 1L1 42.5L15.8321 58H160V16L145.761 1H1.00005Z" stroke-width="2" />
		</svg>
	{/if}
	<span
		class="absolute top-[50%] translate-x-[-50%] left-[50%]
		translate-y-[-50%] font-extrabold text-slate-50 block w-max"
		class:text-violet-800={variant === 'secondary'}
	>
		<slot />
	</span>
</button>
