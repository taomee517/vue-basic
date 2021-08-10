<template>
	<div>
		<Threshold :datas="result"></Threshold>
	</div>
</template>

<script>
	import Threshold from './components/Threshold'
	export default{
		name: 'App',
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
		components:{
			Threshold
		}
	}
</script>

<style>
</style>
