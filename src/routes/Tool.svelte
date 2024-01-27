<script lang="ts">
	import { reveal } from 'svelte-reveal';
	export let title: string;
	export let description: string;
	export let href: string;
</script>

<div class="group relative flex flex-col" use:reveal={{ transition: 'scale' }}>
	<div
		class="relative flex flex-1 flex-col overflow-hidden rounded-xl bg-card shadow ring-1 ring-border transition duration-100 hover:ring-2 hover:ring-primary"
	>
		<div
			class="flex flex-1 flex-col gap-x-8 gap-y-4 rounded-xl px-4 py-5 dark:bg-gray-900/50 sm:p-6"
		>
			<a class="flex-1" href="https://docs.tabooproject.org">
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
</div>
