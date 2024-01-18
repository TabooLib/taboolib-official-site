import type { PageServerLoad } from './$types';

export const load = (async () => {
	const BASE_URL = import.meta.env.VITE_DATA_URL;
	const requiredComponents = await fetch(BASE_URL + '/required').then((res) => res.json());

	return {
		requiredComponents
	};
}) satisfies PageServerLoad;
