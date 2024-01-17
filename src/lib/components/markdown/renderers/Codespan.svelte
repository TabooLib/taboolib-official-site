<script lang="ts">
	export let raw: string;
</script>

<code>{raw.replace(/`/g, '')}</code>

<style lang="postcss">
	code {
		@apply font-mono text-sm;
		@apply rounded-md px-2 py-1;
		@apply bg-[#F7F7F7] dark:bg-[#1E293B];
	}
</style>
