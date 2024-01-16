import type { Type } from '../../+page.server';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const BASE_URL = import.meta.env.VITE_DATA_URL;
	const type = params.type;
	const name = params.name;

	const types: Type[] = await fetch(BASE_URL + '/components').then((res) => res.json());
	const componentDetails = await fetch(BASE_URL + '/components/' + type + '/' + name).then((res) =>
		res.json()
	);

	return {
		types,
		componentDetails
	};
}) satisfies PageServerLoad;
