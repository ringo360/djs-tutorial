// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://djs-docs.pages.dev',
	integrations: [
		starlight({
			title: 'Discord.js 日本語ガイド',
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
			},
			social: {
				github: 'https://github.com/ringo360/djs-docs',
			},
			editLink: {
				baseUrl: 'https://github.com/ringo360/djs-docs/edit/master/',
			},
			disable404Route: true,
			sidebar: [
				{
					label: 'Hello discord.js!',
					items: [
						{ label: 'Discord.jsとは', link: '/about/introduction' },
						{ label: 'はじめましょう！', link: '/about/getting-started' },
					],
					// autogenerate: { directory: 'about' },
				},
				{
					label: 'チュートリアル',
					autogenerate: { directory: 'tutorial' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
