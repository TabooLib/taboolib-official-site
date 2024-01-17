<script lang="ts">
	import { Sun, Moon } from 'radix-icons-svelte';
	import { mode, toggleMode } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Button } from '$lib/components/ui/button';

	$: currentMode = $mode;
</script>

<Tooltip.Root openDelay={100} closeOnPointerDown={false}>
	<Tooltip.Trigger>
		<Button class="h-8 w-8 border-0 px-0 py-0 shadow-none" on:click={toggleMode} variant="outline">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>切换到{currentMode === 'dark' ? '明亮' : '暗黑'}模式</p>
	</Tooltip.Content>
</Tooltip.Root>
