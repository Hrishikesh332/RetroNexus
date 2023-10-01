import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [
		imagetools({
			defaultDirectives: new URLSearchParams({
				format: 'avif;webp',
				as: 'picture'
			})
		}),

		sveltekit()

	]
});
