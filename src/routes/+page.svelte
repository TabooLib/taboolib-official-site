<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'radix-icons-svelte';
	import Highlight from 'svelte-highlight';
	import kotlin from 'svelte-highlight/languages/kotlin';
	import nord from 'svelte-highlight/styles/nord';
	import Tool from './Tool.svelte';
	import TaboolibIcon from '$lib/components/TaboolibIcon.svelte';
	import { fade } from 'svelte/transition';

	const registerCommandCode = `command("tp") {
    literal("random") {
        execute<ProxyPlayer> { sender, _, _ ->
            sender.teleport(sender.entities().randomOrNull() ?: return@execute)
        }
    }
    player {
        execute<ProxyPlayer> { sender, ctx, _ ->
            sender.teleport(ctx.player())
        }
    }
    execute<ProxyPlayer> { sender, _, _ ->
        sender.teleport(sender.entityNearly() ?: return@execute)
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
</script>

<svelte:head>
	<title>TabooLib Official Site</title>
	<meta
		name="description"
		content="TabooLib 是一个现代化的 Minecraft 开发框架，旨在提供快速、安全的软件和丰富的插件 API。"
	/>
	{@html nord}
</svelte:head>

<div class="relative from-gray-950 to-gray-900 py-24 sm:py-32 md:py-40">
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
					TabooLib v6 已发布
					<ArrowRight class="ml-2" />
				</Button>
			</div>
			<h1
				class="pixel-12 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl"
			>
				一个现代化的
				<br />
				<span class="block text-primary lg:inline-block">Minecraft开发框架</span>
			</h1>
			<p
				class="pixel-12 mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300 md:px-24 lg:px-48"
			>
				TabooLib是一个基于Kotlin的跨平台框架，旨在提供快速、安全的软件和丰富的插件API。
				<br />
				作为Minecraft中最广泛使用、性能最佳、稳定性最高的软件之一，TabooLib提供快速更新和有益的支持，旨在改善Minecraft的生态系统。
			</p>
			<div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
				<Button href="/quickstart">快速开始</Button>
				<Button
					class="border-primary text-primary hover:text-primary"
					variant="outline"
					href="/quickstart"
				>
					查看文档
				</Button>
			</div>
		</div>
	</div>
</div>
<div class="dark bg-background py-24 sm:py-32">
	<div
		class="mx-auto grid max-w-7xl gap-16 px-4 sm:gap-y-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"
	>
		<div>
			<h2
				class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
			>
				利用 TabooLib
				<span class="block text-primary">快速注册命令</span>
			</h2>
			<p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
				TabooLib提供了一个简单的命令注册dsl，可以让你在几行代码内完成命令的注册。
			</p>
			<div class="mt-8 flex flex-wrap gap-x-3 gap-y-1.5">
				<Button href="/register-command">注册实例</Button>
				<Button
					class="border-primary text-primary hover:text-primary"
					variant="outline"
					href="/docs/command"
				>
					命令文档
				</Button>
			</div>
		</div>
		<Highlight language={kotlin} code={registerCommandCode} />
	</div>
</div>
<div class="dark bg-background py-24 sm:py-32">
	<div
		class="mx-auto grid max-w-7xl gap-16 px-4 sm:gap-y-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"
	>
		<Highlight language={kotlin} code={subscribeEventCode} />
		<div>
			<h2
				class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
			>
				利用 TabooLib
				<span class="block text-primary">快速监听事件</span>
			</h2>
			<p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
				TabooLib提供了一个简单的事件监听注解，可以让你在几行代码内完成事件的监听。
			</p>
			<div class="mt-8 flex flex-wrap gap-x-3 gap-y-1.5">
				<Button href="/register-command">监听器实例</Button>
				<Button
					class="border-primary text-primary hover:text-primary"
					variant="outline"
					href="/docs/command"
				>
					监听器文档
				</Button>
			</div>
		</div>
	</div>
</div>
<div class="from-gray-900 to-gray-950 py-24 sm:py-32">
	<div class="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center text-center">
			<h2
				class="pixel-12 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
			>
				超丰富的
				<span class="block text-primary">魔法般的工具</span>
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
			<Tool
				title="箱子菜单构建"
				description="TabooLib提供了一个简单的箱子菜单构建工具，可以让你高效快速的构建仓库/商店/多页菜单等内容。"
				href="/docs/menu"
			/>
			<Tool
				title="物品构建"
				description="TabooLib提供了一个简单的物品构建工具，可以让你更加方便的构建物品。"
				href="/docs/item"
			/>
			<Tool
				title="NMS"
				description="TabooLib提供了一个简单的NMS工具，可以让你用简单的代码完成NMS的操作。"
				href="/docs/nms"
			/>
			<Tool
				title="配置文件"
				description="TabooLib提供了一个简单的配置文件工具，可以让你轻松实现配置文件的读写。"
				href="/docs/config"
			/>
			<Tool
				title="国际化"
				description="TabooLib提供了一个简单的国际化工具，可以让你的插件支持多语言。"
				href="/docs/i18n"
			/>
			<Tool
				title="数据库"
				description="TabooLib提供了一个简单的数据库工具，可以让你轻松实现数据库的读写。"
				href="/docs/database"
			/>
			<Tool
				title="粒子效果"
				description="TabooLib提供了一个简单的粒子效果工具，可以让你轻松实现粒子效果的创建与播放。"
				href="/docs/particle"
			/>
			<Tool
				title="寻路"
				description="TabooLib提供了一个简单的寻路工具，可以让你轻松实现寻路算法的使用。"
				href="/docs/pathfinder"
			/>
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
		@apply rounded-lg !px-8 !py-8;
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
