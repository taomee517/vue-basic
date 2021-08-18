<template>
	<div class="category-container">
		<h2>{{classify}}分类</h2>
		<ul>
			<li v-for="item in classifyContent">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'Category',
		data(){
			return {};
		},
		props:['classify','classifyContent']
	}
</script>

<style scoped="scoped">
	.category-container{
		width: 400px;
		height: 600px;
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
