<script>
	import '../app.css';
	import '@fontsource/press-start-2p';
	import '$lib/assets/fonts/blendor_pro/stylesheet.css';
	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />
<slot />
<Footer />
