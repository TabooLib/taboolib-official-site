<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Plus } from 'radix-icons-svelte';

	type Showcase = {
		name: string;
		link: string;
		image: string;
	};

	export let data;
	const { showcases } = data as { showcases: Showcase[] };
</script>

<svelte:head>
	<title>优秀案例 | TabooLib</title>
</svelte:head>

<main class="pb-16">
	<div class="container my-12 text-center">
		<p class="text-fd-muted-foreground text-lg">基于 TabooLib 的</p>
		<h1 class="mb-4 text-3xl font-semibold leading-snug md:text-5xl md:leading-snug">牛逼项目</h1>
		<div class="mt-6">
			<Button
				class="shadow-inner"
				href="https://github.com/TabooLib/taboolib/issues"
				target="_blank"
			>
				<Plus class="mr-2" />提交项目
			</Button>
		</div>
	</div>
	<div class="container mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each showcases as showcase}
			<a
				rel="noreferrer noopener"
				href={showcase.link}
				target="_blank"
				class="hover:border-fd-primary/30 relative flex aspect-[1.91/1] flex-col overflow-hidden rounded-2xl border transition-all"
			>
				<img
					src={showcase.image}
					alt={showcase.name}
					class="absolute inset-0 h-full w-full text-transparent"
				/>
				<p class="z-[2] mt-auto bg-black/50 p-4 text-sm font-medium text-white backdrop-blur-sm">
					{showcase.name}
				</p>
			</a>
		{/each}
	</div>
</main>
