import type { PageServerLoad } from './$types';

type Category = {
	name: string;
	title: string;
};

type Type = {
	name: string;
	title: string;
};

type Content = {
	type: string;
	categories: Category[];
	name: string;
	title: string;
	description: string;
};

export const load = (async ({ fetch, url }) => {
	const types: Type[] = [
		{ name: 'all', title: '全部' },
		{ name: 'platforms', title: '平台' },
		{ name: 'modules', title: '模块' },
		{ name: 'expansions', title: '扩展' },
		{ name: 'templates', title: '模板' }
	];
	const type = url.searchParams.get('type') ?? 'all';
	const category = url.searchParams.get('category') ?? 'all';
	const categories: Category[] = [
		{ name: 'all', title: '全部' },
		{ name: 'utils', title: '工具' },
		{ name: 'data', title: '数据' },
		{ name: 'misc', title: '杂项' }
	];

	const content: Content[] = [
		{
			name: 'UI',
			type: 'modules',
			categories: [],
			title: 'UI',
			description: 'TabooLib提供了一个简单的UI构建工具，可以让你高效快速的构建UI界面。'
		},
		{
			name: 'Data',
			type: 'modules',
			categories: [],
			title: 'Data',
			description: 'TabooLib提供了一个简单的数据存储工具，可以让你高效快速的存储数据。'
		},
		{
			name: 'Misc',
			type: 'modules',
			categories: [],
			title: 'Misc',
			description: 'TabooLib提供了一些杂项工具，可以让你高效快速的完成一些杂项工作。'
		},
		{
			name: 'NMS',
			type: 'modules',
			categories: [],
			title: 'NMS',
			description: 'TabooLib提供了一个简单的NMS工具，可以让你高效快速的构建NMS代码。'
		}
	];
	return {
		type,
		category,
		types,
		categories,
		content
	};
}) satisfies PageServerLoad;
