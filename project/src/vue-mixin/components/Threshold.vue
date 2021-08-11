<template>
	<!-- 组件的结构 -->
	<div>
		<ol>
			<!-- @click="showItem(thresh)" -->
			<li
				v-for="thresh in result"
				v-bind:key="thresh.id"
				class="threshold"
				@click="showInnerText($event)"
			>	
				{{thresh.field}}阈值：{{thresh.lower}} {{thresh.unit}} - {{thresh.upper}} {{thresh.unit}}
			</li>
		</ol>
	</div>
</template>

<script>
	// 组件交互相关的代码（数据，方法等）
	import {mix} from '../mixin.js'
	export default {
		name: 'Threshold',
		data() {
			return {
				code: 200,
				message: "成功",
				result: [
					{id: 1, field: "电压", unit: "V", lower: 5, upper: 36},
					{id: 2, field: "频率", unit: "Hz", lower: 100, upper: 5000},
					{id: 3, field: "温度", unit: "°C", lower: -10, upper: 50}
				]
			}
		},
		mixins: [mix]
	}
</script>

<style>
	/* 组件的样式 css */
	.threshold{
		color: chocolate;
	}
</style>
