import type { PageServerLoad } from './$types';

type Category = {
	name: string;
	title: string;
};

export type Type = {
	name: string;
	title: string;
	color: string;
};

type Content = {
	type: string;
	categories: Category[];
	name: string;
	title: string;
	description: string;
};

export const load = (async ({ fetch, url }) => {
	const BASE_URL = import.meta.env.VITE_DATA_URL;
	const types: Type[] = await fetch(BASE_URL + '/components').then((res) => res.json());

	const type = url.searchParams.get('type') ?? 'all';
	const res = await fetch(BASE_URL + '/components/' + type).then((res) => res.json());

	const categories: Category[] = res.categories;

	const list: Content[] = res.components;

	return {
		types,
		categories,
		list
	};
}) satisfies PageServerLoad;
