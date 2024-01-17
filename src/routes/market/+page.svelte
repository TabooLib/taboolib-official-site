<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { reveal } from 'svelte-reveal';
	import { Input } from '$lib/components/ui/input';

	export let data: PageData;

	$: searchInput = '';

	$: types = data.types;
	$: currentType = $page.url.searchParams.get('type') || 'all';

	$: categories = data.categories;
	$: currentCategory = $page.url.searchParams.get('category') || 'all';

	$: list = data.list;

	$: content = list.filter((item) => {
		if (currentCategory !== 'all' && !containsCategory(item.categories, currentCategory)) {
			return false;
		}
		if (searchInput !== '') {
			if (
				!item.title.toLowerCase().includes(searchInput.toLowerCase()) &&
				!item.description.toLowerCase().includes(searchInput.toLowerCase())
			) {
				return false;
			}
		}
		return true;
	});

	function containsCategory(categories: any[], category: string) {
		return categories.find((c) => c === category) !== undefined;
	}

	function changeType(type: string) {
		goto(`/market?type=${type}&category=all`);
	}

	function changeCategory(category: string) {
		goto(`/market?type=${currentType}&category=${category}`);
	}

	function getColor(type: string) {
		return types.find((t) => t.name === type)?.color || 'primary';
	}

	const hots = [
		{
			type: 'module',
			name: 'ui',
			title: 'UI模块',
			description: 'TabooLib提供了一个简单的UI构建工具，可以让你高效快速的构建UI界面。'
		},
		{
			type: 'module',
			name: 'nms',
			title: 'NMS模块',
			description: 'TabooLib提供了一个简单的NMS工具，可以让你用简单的代码完成NMS的操作。'
		},
		{
			type: 'module',
			name: 'config',
			title: '配置文件模块',
			description: 'TabooLib提供了一个简单的配置文件工具，可以让你轻松实现配置文件的读写。'
		},
		{
			type: 'module',
			name: 'database',
			title: '数据库模块',
			description: 'TabooLib提供了一个简单的数据库工具，可以让你轻松实现数据库的读写。'
		}
	];
</script>

<svelte:head>
	<title>组件市场 - TabooLib</title>
	<meta name="description" content="TabooLib组件市场" />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="py-8 sm:py-16">
		<div class="grid gap-8 sm:gap-y-16 lg:grid-cols-2 lg:items-center">
			<div use:reveal>
				<h2
					class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
				>
					组件市场
				</h2>
				<p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
					你可以在这里找到你需要的组件，所有的组件都是开源的，你可以自由的使用它们，它们由官方/社区开发者提供。
				</p>
				<div class="mt-8 flex flex-wrap gap-x-3 gap-y-1.5">
					<Button href="/docs">组件作者指南</Button>
					<Button
						class="border-primary text-primary hover:text-primary"
						variant="outline"
						href="/docs"
					>
						发布组件
					</Button>
				</div>
			</div>
			<div class="lg:pl-10">
				<div class="lg:pl-10">
					<div class="grid grid-cols-2 gap-4 sm:grid-cols-2 xl:grid-cols-2">
						{#each hots as hot}
							<div use:reveal={{ transition: 'scale' }}>
								<div
									class="group relative cursor-pointer divide-y overflow-hidden rounded-xl bg-card shadow ring-1 ring-border transition duration-200 ease-in-out hover:bg-muted hover:ring-2 hover:ring-primary"
								>
									<div class="flex-1 px-4 py-5 sm:p-6">
										<a href="/market/{hot.type}/{hot.name}">
											<p
												class="flex items-center gap-1.5 truncate text-base font-semibold text-gray-900 dark:text-white"
											>
												{hot.title}
											</p>
											<p class="mt-1 text-[15px] text-gray-500 dark:text-gray-400">
												{hot.description}
											</p>
										</a>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="-mt-20 flex flex-col pt-20 lg:grid lg:grid-cols-10 lg:gap-8">
		<div class="lg:col-span-2">
			<aside
				class="hidden overflow-y-auto py-8 lg:sticky lg:top-[--header-height] lg:-mx-4 lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:px-4"
			>
				<div use:reveal class="relative">
					<nav class="space-y-3">
						<div class="block w-full flex-col">
							<h3 class="mb-2">组件类型</h3>
							<div>
								<div class="flex flex-col">
									{#each categories as category}
										<div class="flex h-6 items-center">
											<div
												class:selectedLine={category.name === currentCategory}
												class="mr-2 h-full w-0.5 bg-gray-200 dark:bg-gray-300"
											></div>
											<button
												class="my-2 h-full flex-1 pl-4 text-left text-sm font-semibold text-gray-400 transition duration-200 ease-in-out hover:text-primary dark:text-gray-300 dark:hover:text-primary"
												class:selected={category.name === currentCategory}
												on:click={() => {
													changeCategory(category.name);
												}}
											>
												{category.title}
											</button>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</nav>
					<div class="align-center my-6 flex w-full flex-row items-center text-center">
						<div class="dark:border-gray-830 flex w-full border-t border-dashed border-gray-300" />
					</div>
					<div class="space-y-3">
						<div class="space-y-3 lg:space-y-1.5">
							<a href="/docs" class="block w-full">
								<span class="flex items-center justify-between">
									<span
										class="text-sm font-semibold text-gray-400 transition-colors duration-200 ease-in-out hover:text-primary dark:text-gray-300 dark:hover:text-primary"
									>
										组件作者指南
									</span>
								</span>
							</a>
							<a href="/docs" class="block w-full">
								<span class="flex items-center justify-between">
									<span
										class="text-sm font-semibold text-gray-400 transition-colors duration-200 ease-in-out hover:text-primary dark:text-gray-300 dark:hover:text-primary"
									>
										发布组件
									</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</aside>
		</div>
		<div class="lg:col-span-8">
			<div class="mt-8 pb-24">
				<div use:reveal class="mb-8 flex items-center justify-between gap-3">
					<div class="relative hidden lg:block">
						{#each types as type}
							<button
								class="rounded-md pb-2 pr-4 font-medium text-gray-900 transition-colors duration-200 ease-in-out hover:text-primary dark:text-white dark:hover:text-primary"
								class:selected={type.name === currentType}
								on:click={() => {
									changeType(type.name);
								}}
							>
								{type.title}
							</button>
						{/each}
					</div>
					<div class="inline-flex w-64 gap-2 -space-x-px rounded-md shadow-sm">
						<Input placeholder="输入你的关键词" bind:value={searchInput} />
					</div>
				</div>
				<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
					{#each content as item}
						<div class="group relative flex flex-col" use:reveal>
							<div
								class="relative flex flex-1 flex-col overflow-hidden rounded-xl bg-card shadow ring-1 ring-border transition duration-200 hover:ring-2 hover:ring-primary"
							>
								<a class="relative flex flex-1 flex-col" href="/market/{item.type}/{item.name}">
									<div class="flex-1 px-4 py-5 sm:p-6">
										<div
											class="mb-6 flex select-none text-4xl font-bold"
											style="color: {getColor(item.type)};"
										>
											{item.type.charAt(0).toUpperCase()}
										</div>
										<p
											class="flex items-center gap-1.5 truncate text-base font-semibold text-gray-900 dark:text-white"
										>
											{item.title}
										</p>
										<p class="mt-1 text-[15px] text-gray-500 dark:text-gray-400">
											<span class="line-clamp-2">
												{item.description}
											</span>
										</p>
									</div>
									<div class="bg-gray-100/50 px-4 py-4 dark:bg-gray-800/50 sm:px-6">
										<div
											class="-my-1 flex items-center justify-between gap-3 text-gray-600 dark:text-gray-300"
										>
											元数据
										</div>
									</div>
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.selected {
		@apply text-primary dark:text-primary;
	}

	.selectedLine {
		@apply bg-primary dark:bg-primary;
	}
</style>
