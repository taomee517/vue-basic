<template>
	<div>
		<h3> {{ pageTips }} </h3><br/>
		<h3> {{ date }} </h3><br/>
		<label>timestamp: </label>
		<h3 v-format = "date"></h3>
	</div>
</template>

<script>	
	export default{
		name: "App",
		data(){
			return{				
				date: '2021-08-12 14:00:00'
			}
		},
		computed:{
			pageTips(){
				return this.buildTip();
			}
		}
	}
</script>

<style>
</style>
