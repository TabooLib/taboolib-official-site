import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const BASE_URL = import.meta.env.VITE_DATA_URL;
	const component = params.component;
	const name = params.name;

	const componentDetails = await fetch(BASE_URL + '/components/' + component + '/' + name).then(
		(res) => res.json()
	);

	return {
		componentDetails
	};
}) satisfies PageServerLoad;
