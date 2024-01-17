<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Button } from '$lib/components/ui/button';

	export let text: string;
</script>

<Tooltip.Root openDelay={100} closeOnPointerDown={false}>
	<Tooltip.Trigger>
		<Button class="h-8 w-8 border-0 px-0 py-0 shadow-none hover:bg-transparent" variant="outline">
			<slot />
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>{text}</p>
	</Tooltip.Content>
</Tooltip.Root>
