// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.deltadizzy.org',
	integrations: [
		starlight({
			title: 'Emily\'s Archive',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/DeltaDizzy/DeltaWebsite' },
				{ icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/deltadizzy.bsky.social'}
			],
			sidebar: [
				{ label: 'Home', link: '/'},
				{ label: 'Research', items: [{ autogenerate: { directory: 'research'} }] }
			],
		}),
	],
});
