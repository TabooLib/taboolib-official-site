<script lang="ts">
	import { anchors, type Anchor } from '../../../../store/anchors';
	import { Badge } from '$lib/components/ui/badge';
	import { reveal } from 'svelte-reveal';
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import Markdown from '$lib/components/markdown/Markdown.svelte';
	import AngleRight from '$lib/components/icons/AngleRight.svelte';
	import { GithubLogo } from 'radix-icons-svelte';
	import Link from './Link.svelte';
	import DocumentIcon from '$lib/components/icons/DocumentIcon.svelte';
	import { onDestroy, onMount } from 'svelte';

	export let data: PageData;

	let isCatalogOpen = false;

	const componentDetails = data.componentDetails;

	let contributors = data.contributors;

	let currentAnchors: Anchor[];
	let activeAnchor: Element | null = null;
	let handleScroll = () => {};

	onMount(() => {
		handleScroll = () => {
			const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
			const anchorsArray = Array.from(headings);

			const active = anchorsArray.find((anchor) => {
				const rect = anchor.getBoundingClientRect();
				if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
					return true;
				} else {
					return false;
				}
			});

			if (active) {
				activeAnchor = active;
			}
		};

		window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		window.removeEventListener('scroll', handleScroll);
	});

	anchors.subscribe((value) => {
		currentAnchors = value;
	});
</script>

<svelte:head>
	<title>{componentDetails.title} - {componentDetails.component.title} | TabooLib</title>
	<meta name="description" content={componentDetails.description} />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div
		use:reveal={{ transition: 'slide' }}
		class="relative border-b border-gray-200 py-8 dark:border-gray-800"
	>
		<div class="mb-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
			{componentDetails.component.name.charAt(0).toUpperCase() +
				componentDetails.component.name.slice(1)}
		</div>
		<div class="flex flex-col md:flex-row md:items-center md:justify-between">
			<div class="flex flex-col items-start gap-6 lg:flex-row">
				<div class="flex-1">
					<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
						<h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
							<div class="flex items-center gap-4">
								<span
									class="h-full select-none rounded-md bg-muted px-3 font-bold"
									style="color: {componentDetails.component.color};"
								>
									{componentDetails.component.name.charAt(0).toUpperCase()}
								</span>
								<div>{componentDetails.title}</div>
							</div>
						</h1>
					</div>
					<p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
						{componentDetails.description}
					</p>
					<div class="mt-4 flex flex-row items-center gap-3">
						{#each componentDetails.categories as category}
							<Badge>{category.title}</Badge>
						{/each}
					</div>
				</div>
			</div>
			<div class="mb-2 mt-8 md:my-0">
				<Button>添加到我的项目</Button>
				<!-- <Button variant="destructive">从我的项目中移除</Button> -->
			</div>
		</div>
	</div>
	<div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
		<div class="lg:col-span-8">
			<div class="prose prose-primary dark:prose-invert mt-8 max-w-none pb-24">
				<Markdown content={componentDetails.content} />
			</div>
		</div>
		<div class="order-first lg:order-last lg:col-span-2">
			<nav
				use:reveal={{ transition: 'slide', x: 50 }}
				class="group sticky top-[--header-height] -mx-4 max-h-[calc(100vh-var(--header-height))] overflow-y-auto bg-background/75 px-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-4 lg:px-4"
			>
				<div
					class="space-y-3 border-b border-dashed border-gray-200 py-3 dark:border-gray-800 lg:border-0 lg:py-8"
				>
					<button
						class="flex w-full items-center justify-between gap-1.5 lg:cursor-text lg:select-text"
						tabindex="-1"
						on:click={() => (isCatalogOpen = !isCatalogOpen)}
					>
						<span class="truncate text-sm/6 font-semibold">目录</span>
						<div
							class="h-4 w-4 transform transition-transform lg:hidden"
							class:rotate-90={isCatalogOpen}
						>
							<AngleRight />
						</div>
					</button>
					<ul class="space-y-1 lg:block" class:hidden={!isCatalogOpen}>
						{#each currentAnchors as anchor}
							<li class="space-y-1 lg:block" style="margin-left: {(anchor.level - 1) * 1.2}rem;">
								<a
									data-anchor
									href={`#${anchor.id}`}
									class:text-primary={activeAnchor &&
										activeAnchor.getAttribute('id') === `${anchor.id}`}
									class:dark:text-primary={activeAnchor &&
										activeAnchor.getAttribute('id') === `${anchor.id}`}
									class="block truncate text-sm/6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
								>
									<span class="relative">{anchor.content}</span>
								</a>
							</li>
						{/each}
					</ul>
					{#if componentDetails.links}
						<div class="!mt-6 hidden space-y-6 lg:block">
							<div class="align-center flex w-full flex-row items-center text-center">
								<div
									class="flex w-full border-t border-dashed border-gray-200 dark:border-gray-800"
								/>
							</div>
							<div class="space-y-3">
								<p class="flex items-center gap-1.5 text-sm/6 font-semibold">相关链接</p>
								<div class="space-y-3 lg:space-y-1.5">
									{#if componentDetails.links.meta}
										{#if componentDetails.links.meta.document}
											<Link href={componentDetails.links.meta.document}>
												<DocumentIcon />
												<span class="relative text-sm/6 font-medium"> 查阅文档 </span>
											</Link>
										{/if}
										{#if componentDetails.links.meta.document}
											<Link href="https://github.com/{componentDetails.links.meta.github}">
												<GithubLogo class="h-[20px] w-[20px]" />
												<span class="relative text-sm/6 font-medium">
													{componentDetails.links.meta.github}
												</span>
											</Link>
										{/if}
									{/if}
									{#if componentDetails.links.custom}
										{#each componentDetails.links.custom as link}
											<Link href={link.href}>
												<span class="relative cursor-pointer text-sm/6 font-medium"
													>{link.title}</span
												>
											</Link>
										{/each}
									{/if}
								</div>
							</div>
						</div>
					{/if}
					{#if componentDetails.contributors && componentDetails.contributors.length > 0}
						<div class="!mt-6 hidden space-y-6 lg:block">
							<div class="align-center flex w-full flex-row items-center text-center">
								<div
									class="flex w-full border-t border-dashed border-gray-200 dark:border-gray-800"
								/>
							</div>
							<div class="space-y-3">
								<p class="flex items-center gap-1.5 text-sm/6 font-semibold">贡献者</p>
								<div class="space-y-3 lg:space-y-1.5">
									{#each contributors as contributor}
										<Link href={contributor.items[0].html_url}>
											<div class="flex items-center gap-1.5">
												<img
													src={contributor.items[0].avatar_url}
													alt={contributor.items[0].login}
													class="h-6 w-6 rounded-full"
												/>
												<span class="relative text-sm/6 font-medium"
													>{contributor.items[0].login}</span
												>
											</div>
										</Link>
									{/each}
								</div>
							</div>
						</div>
					{/if}
				</div>
			</nav>
		</div>
	</div>
</div>
