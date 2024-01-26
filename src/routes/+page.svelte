<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'radix-icons-svelte';
	import Highlight from 'svelte-highlight';
	import kotlin from 'svelte-highlight/languages/kotlin';
	import nord from 'svelte-highlight/styles/nord';
	import Tool from './Tool.svelte';
	import TaboolibIcon from '$lib/components/icons/TaboolibIcon.svelte';
	import { reveal } from 'svelte-reveal';

	const registerCommandCode = `command("test") {
	dynamic("args") {
	    execute<ProxyPlayer> { sender, ctx, _ ->
	        sender.teleport("Hello \${ctx["args"]}!")
	    }
	}
    execute<ProxyPlayer> { sender, _, _ ->
	    sender.teleport("Hello TabooLib!")
	}
}`;
	const subscribeEventCode = `@SubscribeEvent
fun onJoin(e: PlayerJoinEvent) {
	val player = e.player
	// 向玩家发送消息
	player.sendMessage("Hello")
	// 如果玩家是op则发送消息
	if (player.isOp) {
		player.sendMessage("You are op")
	}
}`;

	const tools = [
		{
			title: 'NMS',
			description: '跨版本 NMS 工具, TabooLib 的经典功能!',
			href: 'https://docs.tabooproject.org'
		},
		{
			title: 'UI',
			description: '快速构建箱子菜单, 支持虚拟化!',
			href: 'https://docs.tabooproject.org'
		},
		{
			title: 'Kether',
			description: '内建脚本解决方案',
			href: 'https://docs.tabooproject.org'
		},
		{
			title: 'Database',
			description: '勾史',
			href: 'https://docs.tabooproject.org'
		},
	];
</script>

<svelte:head>
	<title>首页 | TabooLib</title>
	<meta
		name="description"
		content="现代化的 Minecraft 跨平台服务端开发框架。"
	/>
	{@html nord}
</svelte:head>

<div
	use:reveal={{ transition: 'fade' }}
	class="relative from-gray-950 to-gray-900 py-24 sm:py-32 md:py-40"
>
	<TaboolibIcon class="absolute inset-x-0 top-6 hidden h-[40rem] w-full lg:block" />
	<div class="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
		<div class="relative z-[1] text-center">
			<div class="mb-10">
				<Button
					class="rounded-full border-primary text-primary hover:text-primary"
					variant="outline"
					href="https://github.com/TabooLib/taboolib"
					target="_blank"
				>
					TabooLib v6.1 已发布
					<ArrowRight class="ml-2" />
				</Button>
			</div>
			<h1
				class="pixel-12 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl"
			>
				现代化
				<br />
				<span class="block text-primary lg:inline-block">跨平台开发框架</span>
			</h1>
			<p
				class="pixel-12 mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300 md:px-24 lg:px-48"
			>
				基于 Kotlin，为 Minecraft (Java 版) 提供一个跨平台的开发框架
				<br />
				旨在替代频繁的操作，以及解决一些令人头疼的问题
			</p>
			<div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
				<Button href="https://github.com/taboolib/taboolib-sdk">快速开始</Button>
				<Button
					class="border-primary text-primary hover:text-primary"
					variant="outline"
					href="https://docs.tabooproject.org"
				>
					查看文档
				</Button>
			</div>
		</div>
	</div>
</div>
<div class="dark bg-background py-24 sm:py-32">
	<div
		use:reveal
		class="mx-auto grid max-w-7xl gap-16 px-4 sm:gap-y-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"
	>
		<div>
			<h2
				class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
			>
				快速
				<span class="block text-primary">注册跨平台命令</span>
			</h2>
			<p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
				TabooLib 提供了一个极速的命令工具，可以在几行内完成命令注册。
			    <br />
				用了都说垃圾。
			</p>
			<!--<div class="mt-8 flex flex-wrap gap-x-3 gap-y-1.5">-->
			<!--	<Button href="/examples/command">注册实例</Button>-->
			<!--	<Button-->
			<!--		class="border-primary text-primary hover:text-primary"-->
			<!--		variant="outline"-->
			<!--		href="https://docs.tabooproject.org/"-->
			<!--	>-->
			<!--		命令文档-->
			<!--	</Button>-->
			<!--</div>-->
		</div>
		<Highlight language={kotlin} code={registerCommandCode} />
	</div>
</div>
<div class="dark bg-background py-24 sm:py-32">
	<div
		use:reveal
		class="mx-auto grid max-w-7xl gap-16 px-4 sm:gap-y-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"
	>
		<div class="lg:order-last">
			<h2
				class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
			>
				快速
				<span class="block text-primary">监听事件</span>
			</h2>
			<p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
				只需一个注解, 写在任何地方。
			</p>
			<!--<div class="mt-8 flex flex-wrap gap-x-3 gap-y-1.5">-->
			<!--	<Button href="/examples/listener">监听器实例</Button>-->
			<!--	<Button-->
			<!--		class="border-primary text-primary hover:text-primary"-->
			<!--		variant="outline"-->
			<!--		href="https://docs.tabooproject.org/"-->
			<!--	>-->
			<!--		监听器文档-->
			<!--	</Button>-->
			<!--</div>-->
		</div>
		<Highlight language={kotlin} code={subscribeEventCode} />
	</div>
</div>
<div class="from-gray-900 to-gray-950 py-24 sm:py-32">
	<div class="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
		<div use:reveal class="flex flex-col items-center text-center">
			<h2
				class="pixel-12 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
			>
				还有一些
				<span class="block text-primary">魔术般的工具</span>
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
			{#each tools as tool}
				<Tool {...tool} />
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	:global(.hljs) {
		font-family: 'Fira Code', 'JetBrains Mono', 'SF Mono', Menlo, Monaco, Consolas,
			'Liberation Mono', 'Courier New', monospace;
		white-space: pre-wrap;
		word-break: break-word;
		overflow-x: auto;
		@apply rounded-lg !px-6 !py-6;
	}
	:global(.hljs-keyword) {
		@apply !text-primary;
	}
	:global(.hljs-symbol) {
		@apply !text-primary;
	}
	:global(.hljs-string) {
		@apply !text-green-300;
	}
	:global(.hljs-meta) {
		@apply !text-green-300;
	}
	:global(.hljs-title) {
		@apply !text-primary;
	}
	:global(.hljs-type) {
		@apply !text-primary;
	}
	:global(.hljs-comment) {
		@apply !text-gray-500;
	}
</style>
