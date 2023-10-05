<script lang="ts">
	import Image from '$components/image.svelte';
	//@ts-ignore
	import logo from '$assets/RetroNexus.png?w=75;100';
	import { links } from '$utils';
	import Input from '$components/input.svelte';
	import Button from '$components/button.svelte';
</script>

<footer class="px-4 md:px-12 space-y-12 py-8">
	<div class="flex flex-col gap-8 md:flex-row justify-between">
		<div class="space-y-4">
			<span
				class="font-extrabold flex items-center gap-4 text-2xl
		title-shadow"
			>
				<Image src={logo} alt="Retro Nexus Logo" class="w-14" />
				<span>RETRO NEXUS</span>
			</span>
			<nav class="flex gap-4 lg:gap-8 font-bold">
				{#each links as link}
					<a href={link.href} class="text-lg">{link.label}</a>
				{/each}
			</nav>
		</div>
		<div class="space-y-4">
			<span class="font-extrabold text-xl">SUBSCRIBE</span>
			<div class="flex -space-x-4 sm:w-fit">
				<Input
					placeholder="Enter your email"
					id="email"
					variant="secondary"
					class="w-80
				text-lg"
				/>
				<Button class="w-36 text-lg" variant="secondary">SUBSCRIBE</Button>
			</div>
			<em class="block text-xs sm:text-sm xl:text-base">Subscribe to get notified when we launch</em
			>
		</div>
	</div>
	<div
		class="border-t border-violet-300 py-6 flex flex-col gap-4
		md:flex-row justify-between"
	>
		<span class="flex gap-4 text-lg">
			<a href="https://twitter.com/retronexusworld">Twitter</a>
			<a href="https://github.com/Retro-Nexus">Github</a>
		</span>
		<span> © 2023 Retro Nexus. All rights reserved. </span>
	</div>
</footer>
