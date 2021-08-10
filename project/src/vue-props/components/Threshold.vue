<template>
	<!-- 组件的结构 -->
	<div>
		<ol>
			<li
				v-for="thresh in datas"
				v-bind:key="thresh.id"
				class="threshold"
			>	
				{{thresh.field}}阈值：{{thresh.lower}} {{thresh.unit}} - {{thresh.upper}} {{thresh.unit}}
			</li>
		</ol>
	</div>
</template>

<script>
	// 组件交互相关的代码（数据，方法等）
	export default {
		name: 'Threshold',
		props: ["datas"]
	}
</script>

<style>
	/* 组件的样式 css */
	.threshold{
		color: chocolate;
	}
</style>
