<script>
	/**
	 * @typedef {Object} Picture
	 * @property {Object} sources - The object containing different sources of image data.
	 * @property {Object[]} sources.avif - The array of objects containing source and width for AVIF images.
	 * @property {string} sources.avif[].src - The source of the AVIF image.
	 * @property {number} sources.avif[].w - The width of the AVIF image.
	 * @property {Object[]} sources.webp - The array of objects containing source and width for WebP images.
	 * @property {string} sources.webp[].src - The source of the WebP image.
	 * @property {number} sources.webp[].w - The width of the WebP image.
	 * @property {Object} img - The object containing the default image source.
	 * @property {string} img.src - The default image source.
	 * @property {number} img.w - The width of the default image.
	 * @property {number} img.h - The height of the default image.
	 */

	/** REQUIRED */

	/** @type {Picture} */
	export let src;

	export let alt = '';

	/** OPTIONAL */

	/** @type {Boolean} */
	export let draggable = false;

	/** @type {'async' | 'sync' | 'auto'} */
	export let decoding = 'async';

	/** @type {'lazy' | 'eager'} */
	export let loading = 'lazy';

	let classes = '';
	export { classes as class };
</script>

<picture>
	{#each Object.entries(src.sources) as [format, images]}
		<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
	{/each}

	<img
		src={src.img.src}
		{alt}
		class={classes}
		{loading}
		{decoding}
		{draggable}
		width={src.img.w}
		height={src.img.h}
	/>
</picture>
