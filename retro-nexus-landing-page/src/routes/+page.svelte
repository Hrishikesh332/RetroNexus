<script lang="ts">
	import Button from '$lib/button.svelte';
	import Input from '$lib/input.svelte';
	import RetroBG from '$lib/assets/retroBG.png?w-800';
	import Image from '$lib/image.svelte';

	const heros = import.meta.glob('$lib/assets/heros/*.{jpg,jpeg,png}', {
		query: { w: '200;400;600' },
		import: 'default',
		eager: true
	});

	const herosOne: any[] = [];
	const herosTwo: any[] = [];

	let i = 0;
	for (const key in heros) {
		if (i <= 5) {
			herosOne.push(heros[key]);
		} else if (i <= 9) {
			herosTwo.push(heros[key]);
		}
		i++;
	}
</script>

<Image
	src={RetroBG}
	alt="Retro Background"
	class="h-[600px]  absolute
		top-0 left-0 pointer-events-none -z-10
	lg:w-full opacity-60"
/>

<section class="text-center max-w-2xl 2xl:max-w-4xl mx-auto pt-12 space-y-8 px-4">
	<div class="space-y-4">
		<h1
			class="text-2xl min-[400px]:text-3xl text-violet-400
			font-title title-shadow md:text-4xl lg:text-5xl 2xl:text-6xl mx-auto"
		>
			Embark on Unpredictable Adventures
		</h1>
		<p class="title-shadow text-sm sm:text-base xl:text-lg">
			Experience the Magic of RetroNexus: Where Your Every Move Shapes a Unique Story, and Your
			Achievements Become Valuable Treasures in the Digital Realm.
		</p>
	</div>
	<div class="space-y-4 mx-auto">
		<div class="flex -space-x-4 mx-auto sm:w-fit">
			<Input
				placeholder="Enter your email"
				id="email"
				class="w-80
				text-lg"
			/>
			<Button class="w-36 text-lg" variant="primary">Sign Up</Button>
		</div>
		<em class="block text-xs sm:text-sm xl:text-base"
			>Enter your email above to get notified when our beta is up or for any further releases.
			<br /> Don’t worry, you can unsubscribe at any moment.</em
		>
	</div>
</section>
<div class="py-8 w-[150%] space-y-4">
	<div class="flex gap-4 translate-x-[-15%]">
		{#each herosOne as hero, i}
			<Image
				src={hero}
				alt="Heroororo"
				class={` ${i > 2 ? 'hidden md:block' : 'block'}
			w-full`}
			/>
		{/each}
	</div>
	<div class="flex gap-4 translate-x-[-5%]">
		{#each herosTwo as hero, i}
			<Image
				src={hero}
				alt="Heroororo"
				class={` ${i > 3 ? 'hidden md:block' : 'block'}
w-full`}
			/>
		{/each}
	</div>
</div>
