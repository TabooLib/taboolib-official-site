<script lang="ts">
	export let lang: string;
	export let text: string;
</script>

<pre class={lang}><code>{text}</code></pre>

<style lang="postcss">
	pre {
		@apply bg-[#F7F7F7] font-mono text-[#24292e] dark:bg-[#1E293B] dark:text-[#c9d1d9];
		@apply mb-4 mt-4 overflow-x-auto rounded-xl p-4;
	}

	code {
		font-family: var(--font-family-monospace);
		font-size: 0.875rem;
	}
</style>
