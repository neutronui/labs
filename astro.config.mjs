// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Labs',
			logo: {
				light: './public/neutron.svg',
				dark: './public/neutron_dark.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/neutronui/labs' }],
			sidebar: [
				{
					label: 'CSS 🎨',
					autogenerate: { directory: 'css' }
				}
			],
			customCss: ['./src/main.css'],
		}),
	],
});
