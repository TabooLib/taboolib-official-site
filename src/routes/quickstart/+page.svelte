<script lang="ts">
	import { quickstart } from '../../stores/quickstart';

	import type { PageData } from './$types';

	export let data: PageData;

	const requiredComponents = data.requiredComponents;
	$: components = $quickstart.components;
</script>

<div></div>
