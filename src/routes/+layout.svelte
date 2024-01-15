<script lang="ts">
	import '../app.pcss';
	import Header from './Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { GithubLogo } from 'radix-icons-svelte';
	import type { LayoutData } from './$types';
	import { Button } from '$lib/components/ui/button';

	export let data: LayoutData;

	const stars = data.stars;

	const links = [
		{
			title: '官方插件',
			items: [
				{
					title: 'Adyeshach',
					href: 'https://github.com/TabooLib/adyeshach'
				},
				{
					title: 'Chemdah',
					href: 'https://github.com/TabooLib/chemdah'
				},
				{
					title: 'Zaphkiel',
					href: 'https://github.com/TabooLib/zaphkiel'
				}
			]
		},
		{
			title: '社区',
			items: [
				{
					title: 'Github',
					href: 'https://github.com/TabooLib/taboolib'
				},
				{
					title: 'MCBBS Group',
					href: 'https://www.mcbbs.net/group-2119-1.html'
				}
			]
		},
		{
			title: '友情链接',
			items: [
				{
					title: 'MCBBS',
					href: 'https://www.mcbbs.net'
				}
			]
		}
	];
</script>

<ModeWatcher />
<div class="app">
	<Header {stars}></Header>

	<main>
		<slot />
	</main>

	<footer class="relative">
		<div class="border-t border-gray-200 dark:border-gray-800">
			<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
				<div class="xl:grid xl:grid-cols-2 xl:gap-8">
					<div class="flex auto-cols-fr grid-flow-col flex-col gap-8 lg:grid xl:col-span-2">
						{#each links as { title, items }}
							<div>
								<h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">{title}</h3>
								<ul role="list" class="mt-6 space-y-4">
									{#each items as { title, href }}
										<li
											class="text-base text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
										>
											<a {href} target="_blank" rel="noopener noreferrer"> {title}</a>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="border-t border-gray-200 dark:border-gray-800">
			<div
				class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-x-3 lg:px-8 lg:py-4"
			>
				<div class="flex items-center justify-center gap-x-1.5 lg:order-3 lg:flex-1 lg:justify-end">
					<Button
						href="https://github.com/TabooLib/taboolib"
						target="_blank"
						variant="outline"
						size="icon"
						class="border-0 shadow-none"
					>
						<GithubLogo class="h-[1.4rem] w-[1.4rem]" />
						<span class="sr-only">Github</span>
					</Button>
				</div>
				<div
					class="mt-3 flex items-center justify-center gap-x-1.5 lg:order-1 lg:mt-0 lg:flex-1 lg:justify-start"
				>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Copyright © 2024 TabooProject Designed by
						<a
							class="hover:underline"
							href="https://github.com/Leosouthey"
							target="_blank"
							rel="noopener noreferrer">Leosouthey</a
						>
						-
						<a
							class="hover:underline"
							href="https://github.com/TabooLib/taboolib/blob/master/LICENSE"
							target="_blank"
							rel="noopener noreferrer">MIT License</a
						>
					</p>
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
