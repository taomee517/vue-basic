<template>
	<div>
		<h2>Vue Slot</h2>
		<div class='top-container'>
			<Category classify="美食"/>
			<Category classify="游戏"/>
			<Category classify="电影"/>
		</div>
	</div>
</template>

<script>
	import Category from './components/Category.vue'
	export default{
		name: 'App',
		components: {Category}
	}
</script>

<style>
	.top-container{
		margin-left: 50px;
		float: left;
		display:inline
	}
</style>
