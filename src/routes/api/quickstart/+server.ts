import type { RequestHandler } from '../$types';

export const POST: RequestHandler = async ({ request }) => {
	const BASE_URL = import.meta.env.VITE_DATA_URL;
	const data = await request.json();
	const { project, components } = data;
	const res = await fetch(BASE_URL + '/quickstart', {
		method: 'POST',
		body: JSON.stringify({ project, components })
	});
	return new Response(await res.blob(), {
		headers: {
			'Content-Type': 'application/zip',
			'Content-Disposition': 'attachment; filename="sdk.zip"'
		}
	});
};
