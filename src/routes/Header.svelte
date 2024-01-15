<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import Github from './Github.svelte';
	import Mode from './Mode.svelte';
	import * as Sheet from '$lib/components/ui/sheet';

	$: open = false;
	import { onMount } from 'svelte';

	onMount(() => {
		function handleResize() {
			if (window.innerWidth > 1024) {
				open = false;
			}
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	export let stars: string;

	const navs = [
		{
			name: '首页',
			href: '/'
		},
		{
			name: '模块列表',
			href: '/modules'
		},
		{
			name: '快速开始',
			href: '/quickstart'
		},
		{
			name: '开发文档',
			href: '/docs'
		},
		{
			name: '优秀案例',
			href: '/showcases'
		}
	];
</script>

<header>
	<div
		class="mx-auto flex h-[4rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
	>
		<div class="flex items-center gap-1.5 lg:flex-1">
			<a href="/" class="flex items-center gap-1">
				<div
					class="flex items-center rounded-md px-2 py-1 text-2xl font-semibold text-primary hover:bg-muted"
				>
					<div class="opacity-80">Taboo</div>
					<div class="font-bold text-opacity-100">Lib</div>
				</div>
			</a>
		</div>
		<ul class="hidden items-center gap-x-8 lg:flex">
			{#each navs as nav}
				<li aria-current={$page.url.pathname === nav.href ? 'page' : undefined}>
					<a href={nav.href}>{nav.name}</a>
				</li>
			{/each}
		</ul>
		<div class="flex items-center justify-end gap-1.5 lg:flex-1">
			<Mode />
			<Github {stars} />
			<div class="inline-flex lg:hidden">
				<Sheet.Root bind:open>
					<Sheet.Trigger>
						<Button
							class="h-8 w-8 border-0 px-0 py-0 text-foreground shadow-none"
							variant="outline"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</Button>
					</Sheet.Trigger>
					<Sheet.Content side="left">
						<Sheet.Header>
							<Sheet.Title class="text-left">菜单</Sheet.Title>
							<Sheet.Description class="text-left">请选择你要前往的页面</Sheet.Description>
						</Sheet.Header>
						<ul class="mt-2">
							{#each navs as nav}
								<li
									aria-current={$page.url.pathname === nav.href ? 'page' : undefined}
									class="py-2"
								>
									<a on:click={() => (open = false)} href={nav.href}>{nav.name}</a>
								</li>
							{/each}
						</ul>
					</Sheet.Content>
				</Sheet.Root>
			</div>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		@apply border-b bg-background/75 backdrop-blur;
		@apply sticky top-0 z-50 -mb-px border-border lg:mb-0 lg:border-0;
	}

	li {
		@apply text-sm font-semibold;
		@apply transition-colors duration-200 ease-in-out hover:text-primary;
	}

	li[aria-current='page'] {
		@apply text-primary;
	}
</style>
