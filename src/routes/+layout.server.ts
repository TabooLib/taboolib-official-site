import { fetchWithGithubAuth } from '$lib/utils';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	try {
		const res = await fetchWithGithubAuth('https://api.github.com/repos/TabooLib/taboolib');
		if (!res.ok) {
			return {
				stars: 0
			};
		}
		const data = await res.json();
		return {
			stars: data.stargazers_count
		};
	} catch (error) {
		console.error('获取 GitHub 仓库信息时出错:', error);
		return {
			stars: 0
		};
	}
}) satisfies LayoutServerLoad;
