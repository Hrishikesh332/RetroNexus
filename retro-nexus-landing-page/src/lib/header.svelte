<script lang="ts">
	import Image from '$lib/image.svelte';
	//@ts-ignore
	import logo from '$lib/assets/RetroNexus.png?w=75;100';
	import Button from '$lib/button.svelte';
	import { Menu } from 'lucide-svelte';
	import { clickOutside } from '$lib';
	import { links } from '$lib/utils';

	let showNavbar: boolean = false;
	let menuButton: HTMLElement;
</script>

<header class="w-full flex justify-between items-center px-6 py-2">
	<span
		class="font-extrabold flex items-center gap-4 text-2xl
		title-shadow"
	>
		<Image src={logo} alt="Retro Nexus Logo" class="w-14" />
		<span>RETRO NEXUS</span>
	</span>

	<!-- Desktop -->
	<nav class="hidden md:flex gap-4 lg:gap-8">
		{#each links as link}
			<a href={link.href} class="text-lg">{link.label}</a>
		{/each}
	</nav>

	<a href="https://github.com/Retro-Nexus" class="hidden md:block">
		<Button class="w-28" variant="secondary">GITHUB</Button>
	</a>
	<!-- Desktop End -->

	<!-- Mobile -->
	<span class="relative h-max my-auto md:hidden" bind:this={menuButton}>
		<button class="w-8 h-8 block my-auto" on:click|stopPropagation={() => (showNavbar = true)}>
			<Menu class="w-full h-full button-shadow" />
		</button>
		{#if showNavbar}
			<nav
				class="flex flex-col gap-4 absolute z-10 items-start text-xl
				bg-violet-800 text-slate-50 p-4 right-0
				border-violet-700 border-[3px] rounded-md w-40 font-medium"
				use:clickOutside={() => {
					showNavbar = false;
				}}
			>
				{#each links as link}
					<a href={link.href} class="block text-left w-full">{link.label}</a>
				{/each}
				<a href={'https://github.com/Retro-Nexus'} class="block text-left w-full">Github</a>
			</nav>
		{/if}
	</span>
	<!-- Mobile End -->
</header>
