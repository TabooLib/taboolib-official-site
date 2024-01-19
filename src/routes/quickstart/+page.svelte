<script lang="ts">
	import { quickstart, removeComponent, clearComponents } from '../../stores/quickstart';
	import { Button } from '$lib/components/ui/button';
	import { reveal } from 'svelte-reveal';
	import type { PageData } from './$types';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import Meta from '../market/Meta.svelte';
	import { GithubLogo } from 'radix-icons-svelte';
	import ContributorsIcon from '$lib/components/icons/ContributorsIcon.svelte';
	import DocumentIcon from '$lib/components/icons/DocumentIcon.svelte';
	import DeleteIcon from '$lib/components/icons/DeleteIcon.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { toast } from 'svelte-sonner';

	export let data: PageData;

	$: project = {
		name: '',
		package: ''
	};

	const types = data.types;

	$: categories = data.categories;
	$: currentCategory = $page.url.searchParams.get('category') || 'all';

	$: searchInput = '';
	$: currentType = $page.url.searchParams.get('type') || 'all';

	const requiredComponents = data.requiredComponents;
	$: selectedComponents = $quickstart.components;
	$: allComponents = [...requiredComponents, ...selectedComponents];
	$: components = allComponents.filter((item: any) => {
		if (currentType !== 'all' && item.type.name !== currentType) {
			return false;
		}
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

	async function getSDK() {
		if (project.name === '') {
			toast.error('请输入项目名称');
			return;
		}
		if (project.package === '') {
			toast.error('请输入包名');
			return;
		}
		const body = {
			project: project,
			components: selectedComponents
		};

		const res = await fetch('/api/quickstart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		const blob = await res.blob();
		const url = window.URL.createObjectURL(blob);
		window.open(url);
	}

	function containsCategory(categories: any[], category: string) {
		return categories.find((c) => c === category) !== undefined;
	}

	function changeType(type: string) {
		goto(`/quickstart?type=${type}&category=all`);
	}

	function changeCategory(category: string) {
		goto(`/quickstart?type=${currentType}&category=${category}`);
	}
</script>

<svelte:head>
	<title>快速开始 | TabooLib</title>
	<meta name="description" content="TabooLib快速开始" />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="py-8 sm:py-16">
		<div class="grid gap-8 sm:gap-y-16 lg:grid-cols-2 lg:items-center">
			<div use:reveal>
				<h2
					class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
				>
					快速开始
				</h2>
				<p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
					输入基本信息并选择一些模块来快速生成你的 TabooLib 项目。
				</p>
				<div class="mt-8 flex flex-wrap gap-x-3 gap-y-1.5">
					<Button on:click={() => getSDK()}>生成项目</Button>
					<Button disabled class="border-primary text-primary hover:text-primary" variant="outline">
						多模块项目 (敬请期待)
					</Button>
				</div>
			</div>
			<div class="lg:pl-10">
				<div use:reveal class="space-y-4 lg:pl-10">
					<div class="grid w-full max-w-sm items-center gap-1.5">
						<Label class="text-base" for="name"
							>项目名称
							<span class="text-red-500">*</span>
						</Label>
						<Input type="email" id="name" placeholder="ExampleProject" bind:value={project.name} />
						<p class="text-muted-foreground text-sm">
							项目名称将作为项目的文件夹名称，不可包含空格和特殊字符。
						</p>
					</div>
					<div class="grid w-full max-w-sm items-center gap-1.5">
						<Label class="text-base" for="package"
							>包名
							<span class="text-red-500">*</span>
						</Label>
						<Input
							type="email"
							id="package"
							placeholder="com.example.project"
							bind:value={project.package}
						/>
						<p class="text-muted-foreground text-sm">
							包名将作为项目的包名，不可包含空格和特殊字符。包名不要与现有的项目重复，否则将会导致
							TabooLib 无法加载。
						</p>
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
												class="hover:text-primary dark:hover:text-primary my-2 h-full flex-1 pl-4 text-left text-sm font-semibold text-gray-400 transition duration-200 ease-in-out dark:text-gray-300"
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
						<div class="flex w-full border-t border-dashed border-gray-200 dark:border-gray-800" />
					</div>
					<div class="space-y-3">
						<div class="space-y-3 lg:space-y-1.5">
							<span class="flex items-center justify-between">
								<Button class="w-full" on:click={() => clearComponents()}>清空组件</Button>
							</span>
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
								class="hover:text-primary dark:hover:text-primary rounded-md pb-2 pr-4 font-medium text-gray-900 transition-colors duration-200 ease-in-out dark:text-white"
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
					{#each components as component}
						<div class="group relative flex flex-col" use:reveal>
							<div
								class="bg-card ring-border hover:ring-primary relative flex flex-1 flex-col overflow-hidden rounded-xl shadow ring-1 transition duration-200 hover:ring-2"
							>
								<div class="absolute right-4 top-5 z-10">
									<Tooltip.Root openDelay={100} closeDelay={50} closeOnPointerDown={false}>
										<Tooltip.Trigger
											><button
												on:click={() => removeComponent(component)}
												disabled={requiredComponents.includes(component)}
												class="bg-destructive flex h-8 w-8 items-center justify-center rounded-lg text-white opacity-0 transition duration-200 disabled:bg-black group-hover:opacity-30 group-hover:hover:opacity-100"
											>
												<DeleteIcon />
											</button>
										</Tooltip.Trigger>
										<Tooltip.Content
											class="rounded-lg {requiredComponents.includes(component)
												? 'bg-black'
												: 'bg-destructive'} text-white"
										>
											{requiredComponents.includes(component)
												? '该组件是必选组件，无法删除。'
												: '删除该组件。'}
										</Tooltip.Content>
									</Tooltip.Root>
								</div>
								<a
									class="relative flex flex-1 flex-col"
									href="/market/{component.type.name}/{component.name}"
								>
									<div class="flex-1 px-4 py-5 sm:p-6">
										<div
											class="mb-6 flex select-none text-4xl font-bold"
											style="color: {component.type.color};"
										>
											{component.type.name.charAt(0).toUpperCase()}
										</div>
										<p
											class="flex items-center gap-1.5 truncate text-base font-semibold text-gray-900 dark:text-white"
										>
											{component.title}
										</p>
										<p class="mt-1 text-[15px] text-gray-500 dark:text-gray-400">
											<span class="line-clamp-2">
												{component.description}
											</span>
										</p>
									</div>
									<div class="bg-gray-100/50 px-4 py-4 sm:px-6 dark:bg-gray-800/50">
										<div
											class="-my-1 flex items-center justify-between gap-3 text-gray-600 dark:text-gray-300"
										>
											<div>
												{#if component.links && component.links.meta}
													{#if component.links.meta.document}
														<a href={component.links.meta.document} target="_blank">
															<Meta text="文档">
																<DocumentIcon />
															</Meta>
														</a>
													{/if}
													{#if component.links.meta.github}
														<a
															href="https://github.com/{component.links.meta.github}"
															target="_blank"
														>
															<Meta text="Github">
																<GithubLogo class="h-[20px] w-[20px]" />
															</Meta>
														</a>
													{/if}
												{/if}
											</div>
											<Meta text="贡献人数">
												<div class="text-base">
													<ContributorsIcon />
												</div>
												<div class="ml-2 text-sm font-medium text-gray-900 dark:text-white">
													{#if component.contributors}
														{component.contributors.length}
													{:else}
														0
													{/if}
												</div>
											</Meta>
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
