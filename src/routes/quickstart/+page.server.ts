import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	const BASE_URL = import.meta.env.VITE_DATA_URL;
	const requiredComponents = await fetch(BASE_URL + '/required').then((res) => res.json());
	const types: any[] = await fetch(BASE_URL + '/components').then((res) => res.json());
	const type = url.searchParams.get('type') ?? 'all';
	const res = await fetch(BASE_URL + '/components/' + type).then((res) => res.json());
	const categories: any[] = res.categories;

	return {
		categories,
		requiredComponents,
		types
	};
}) satisfies PageServerLoad;
