<script lang="ts">
	export let ordered: boolean;
	export let start: number;
</script>

{#if ordered}
	<ol {start}><slot /></ol>
{:else}
	<ul><slot /></ul>
{/if}

<style lang="postcss">
	ol {
		@apply my-4 list-inside list-decimal pl-4;
	}

	ul {
		@apply my-4 list-inside list-disc pl-4;
	}
</style>
