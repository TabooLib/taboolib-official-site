<script lang="ts">
	export let depth: number;
	export let raw: string;
	export let text: string;

	$: id = `${text.toLowerCase().replace(/\s+/g, '-')}`;
</script>

<a href="#{id}">
	{#if depth === 1}
		<h1 {id}><slot /></h1>
	{:else if depth === 2}
		<h2 {id}><slot /></h2>
	{:else if depth === 3}
		<h3 {id}><slot /></h3>
	{:else if depth === 4}
		<h4 {id}><slot /></h4>
	{:else if depth === 5}
		<h5 {id}><slot /></h5>
	{:else if depth === 6}
		<h6 {id}><slot /></h6>
	{:else}
		{raw}
	{/if}
</a>

<style lang="postcss">
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply cursor-pointer font-bold tracking-tight text-gray-900 dark:text-white;
		@apply after:ml-4 after:font-mono after:text-primary after:opacity-0 after:transition-opacity after:duration-150 after:hover:opacity-100 after:hover:content-['#'];
	}
	h1 {
		@apply mb-4 mt-8  text-3xl sm:text-4xl;
	}
	h2 {
		@apply mb-4 mt-7 text-2xl sm:text-3xl;
	}
	h3 {
		@apply mb-4 mt-6 text-xl sm:text-2xl;
	}
	h4 {
		@apply mb-4 mt-5 text-lg sm:text-xl;
	}
	h5 {
		@apply mb-4 mt-4 text-base sm:text-lg;
	}
	h6 {
		@apply mb-4 mt-4 text-base sm:text-lg;
	}
</style>
