<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import Markdown from '$lib/components/markdown/Markdown.svelte';

	export let data: PageData;

	const componentDetails = data.componentDetails;
</script>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="relative border-b border-gray-200 py-8 dark:border-gray-800">
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
			<div class="my-2">
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
		<div class="order-first lg:order-last lg:col-span-2"></div>
	</div>
</div>
