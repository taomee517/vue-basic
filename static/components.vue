<template>
	<li>{{thresh.field}}阈值：{{thresh.lower}} {{thresh.unit}} - {{thresh.upper}} {{thresh.unit}}</li>
</template>

<script>
	export default{
		name: "threshold",
		props: ["thresh"]
	}
</script>

<style>
</style>
