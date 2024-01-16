import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		type: params.type,
		name: params.name
	};
}) satisfies PageServerLoad;
