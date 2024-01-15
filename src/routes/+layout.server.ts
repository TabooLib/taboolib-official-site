import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const res = await fetch('https://api.github.com/repos/TabooLib/taboolib');
	return {
		stars: (await res.json()).stargazers_count
	};
}) satisfies LayoutServerLoad;
