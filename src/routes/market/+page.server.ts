import type { PageServerLoad } from './$types';

type Category = {
	name: string;
	title: string;
};

export type Component = {
	name: string;
	title: string;
	color: string;
};

type Content = {
	component: Component;
	categories: Category[];
	name: string;
	title: string;
	description: string;
	contributors?: string[];
	links?: {
		meta?: {
			[key: string]: string;
		};
		custom?: { title: string; href: string }[];
	};
};

export const load = (async ({ fetch, url }) => {
	const BASE_URL = import.meta.env.VITE_DATA_URL;
	const components: Component[] = await fetch(BASE_URL + '/components').then((res) => res.json());
	const hots = await fetch(BASE_URL + '/hots').then((res) => res.json());
	const component = url.searchParams.get('component') ?? 'all';
	const res = await fetch(BASE_URL + '/components/' + component).then((res) => res.json());

	const categories: Category[] = res.categories;
	const list: Content[] = res.components;

	return {
		components,
		categories,
		list,
		hots
	};
}) satisfies PageServerLoad;
