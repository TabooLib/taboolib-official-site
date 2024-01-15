<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Button } from '$lib/components/ui/button';
	import { GithubLogo } from 'radix-icons-svelte';

	export let stars: string;
</script>

<Tooltip.Root openDelay={100} closeDelay={50} closeOnPointerDown={false}>
	<Tooltip.Trigger>
		<Button
			href="https://github.com/TabooLib/taboolib"
			target="_blank"
			variant="outline"
			class="h-8 border-0 px-2 py-0 shadow-none"
		>
			<GithubLogo class="mr-1.5 h-[1.4rem] w-[1.4rem]" />
			<span>{stars}</span>
			<span class="sr-only">Github</span>
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>Github星标</p>
	</Tooltip.Content>
</Tooltip.Root>
