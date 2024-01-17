<script lang="ts">
	export let href: string;
</script>

<a
	class="flex items-center gap-1.5 text-gray-500 transition-colors duration-200 ease-in-out hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
	{href}
>
	<div class="flex items-center gap-2">
		<slot />
	</div>
</a>
