<template>
	<threshold
		v-for="item in result"
		v-bind:thresh="item"
		v-bind:key="item.id"
	>					
	</threshold>
</template>

<script>
	// 定义组件(外部引入)
	import threshold from ./static/components.vue
	export default {
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
		  
		components: {
			threshold
		}
	}
</script>

<style>
</style>
