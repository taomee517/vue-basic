<template>
	<div class="category-container">
		<h2>{{classify}}</h2>
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name: 'CategoryDefaultSlot',
		data(){
			return {};
		},
		props:['classify']
	}
</script>

<style scoped>
	.category-container{
		width: 400px;
		height: 100%;
		margin-left: 50px;
		float: left;
		display:inline
	}
	h2{
		background-color: orangered;
		text-align: center;
	}
	li{
		margin-left: -40px;
		background-color:#00E0E0;
		border: 1px solid #00AAAA;
	}
	ul{
		list-style: none
	}
</style>
