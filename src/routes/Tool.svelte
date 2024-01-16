<script lang="ts">
	import { reveal } from 'svelte-reveal';
	export let title: string;
	export let description: string;
	export let href: string;
</script>

<div
	use:reveal={{ transition: 'scale' }}
	class="pixel-12 background-card relative isolate flex flex-1 cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 transition-colors hover:border-primary dark:border-gray-800 dark:hover:border-primary"
>
	<div class="flex flex-1 flex-col gap-x-8 gap-y-4 rounded-xl px-4 py-5 dark:bg-gray-900/50 sm:p-6">
		<a href="/docs">
			<h3
				class="truncate text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl"
			>
				{title}
			</h3>
			<p class="mt-1 text-[15px] text-gray-500 dark:text-gray-300">
				{description}
			</p>
		</a>
	</div>
</div>
