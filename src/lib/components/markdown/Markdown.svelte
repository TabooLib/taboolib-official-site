<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import heading from './renderers/Heading.svelte';
	import paragraph from './renderers/Paragraph.svelte';
	import code from './renderers/Code.svelte';
	import list from './renderers/List.svelte';
	import listItem from './renderers/ListItem.svelte';
	import orderedlistitem from './renderers/Orderedlistitem.svelte';
	import unorderedlistitem from './renderers/Unorderedlistitem.svelte';
	import codespan from './renderers/Codespan.svelte';

	export let content: string;

	const renderers = {
		heading,
		paragraph,
		code,
		list,
		listItem,
		orderedlistitem,
		unorderedlistitem,
		codespan
	};
</script>

<SvelteMarkdown {renderers} source={content} />
