// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://djs-docs.pages.dev',
	integrations: [
		starlight({
			title: 'Discord.js Tutorial',
			social: {
				github: 'https://github.com/ringo360/djs-docs',
			},
			editLink: {
				baseUrl: 'https://github.com/ringo360/djs-docs/edit/master/',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
