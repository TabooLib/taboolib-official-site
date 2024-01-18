<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import { Markdown as MarkdownExtension } from 'tiptap-markdown';
	import CharacterCount from '@tiptap/extension-character-count';
	import Heading from './extensions/heading';
	import Code from './extensions/code';
	import Starter from './extensions/starter';
	import './editor.pcss';
	import { anchors } from '../../../store/anchors';

	let element: HTMLDivElement;
	let editor: Editor;

	export let content: string;

	const renderers = [Heading, Code];
	const extensions = [MarkdownExtension, CharacterCount];

	onMount(() => {
		editor = new Editor({
			editable: false,
			element: element,
			extensions: [Starter, ...renderers, ...extensions],
			content,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			}
		});

		const json = editor.state.doc.toJSON();
		const temp = [];
		for (let i = 0; i < json.content.length; i++) {
			const node = json.content[i];
			if (node.type === 'heading') {
				temp.push(node.attrs.id);
			}
		}
		anchors.set(temp);
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div bind:this={element} />
{#if editor}
	<div class="character-count">
		{editor.storage.characterCount.characters()} 个字符
		<br />
		{editor.storage.characterCount.words()} 个单词
	</div>
{/if}

<style lang="postcss">
	.character-count {
		text-align: right;
		padding: 0.5rem;
		font-size: 1rem;
		color: #aaa;
	}
</style>
