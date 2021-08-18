<template>
	<div class="category-container">
		<h2>{{classify}}分类</h2>
		<ul>
			<li>xxxx</li>
			<li>xxxx</li>
			<li>xxxx</li>
			<li>xxxx</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'Category',
		data(){
			return {};
		},
		props:['classify']
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
		background-color:#00E0E0;
	}
	ul{
		list-style: none
	}
</style>
