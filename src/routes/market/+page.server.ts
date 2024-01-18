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
	const types: Component[] = await fetch(BASE_URL + '/components').then((res) => res.json());
	const hots = await fetch(BASE_URL + '/hots').then((res) => res.json());
	const type = url.searchParams.get('type') ?? 'all';
	const res = await fetch(BASE_URL + '/components/' + type).then((res) => res.json());

	const categories: Category[] = res.categories;
	const list: Content[] = res.components;

	return {
		types,
		categories,
		list,
		hots
	};
}) satisfies PageServerLoad;
