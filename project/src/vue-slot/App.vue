<template>
	<div>
		<h2>Vue Slot</h2>
		<div>
			<Category classify="美食" :classifyContent="food"/>
			<Category classify="游戏" :classifyContent="game"/>
			<Category classify="电影" :classifyContent="film"/>
		</div>
	</div>
</template>

<script>
	import Category from './components/Category.vue'
	export default{
		name: 'App',
		data(){
			return {
				food: ["火锅", "烧白", "烤鱼", "串串"],
				game: ["王者荣耀", "皇室战争", "绝地求生", "魔兽世界"],
				film: ["寄生虫", "让子弹飞", "夺冠", "战狼2"],
			}
		},
		components: {Category}
	}
</script>

<style>
</style>
