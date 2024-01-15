<script lang="ts">
	import { page } from '$app/stores';
	import Github from './Github.svelte';
	import Mode from './Mode.svelte';

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
			href: '/showcase'
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
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		@apply border-b border-gray-200 bg-background backdrop-blur;
		@apply sticky top-0 z-50 -mb-px dark:border-gray-800 lg:mb-0 lg:border-0;
	}

	li {
		@apply text-sm font-semibold;
		@apply transition-colors duration-200 ease-in-out hover:text-primary;
	}

	li[aria-current='page'] {
		@apply text-primary;
	}
</style>
