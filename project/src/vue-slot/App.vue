<template>
	<div>
		<h2>Vue Slot</h2>
		<div class="base-container">
			<Category classify="美食" :classifyContent="food"/>
			<Category classify="游戏" :classifyContent="game"/>
			<Category classify="电影" :classifyContent="film"/>
		</div>
		
		<div class="slot-container">
			<Category classify="美食" :classifyContent="food"/>
			<CategorySlot classify="游戏">
				<ul>
					<li v-for="item in game">{{item}}</li>
				</ul>
			</CategorySlot>
			<Category classify="电影" :classifyContent="film"/>
		</div>
	</div>
</template>

<script>
	import Category from './components/Category.vue'
	import CategorySlot from './components/CategorySlot.vue'
	export default{
		name: 'App',
		data(){
			return {
				food: ["火锅", "烧白", "烤鱼", "串串"],
				game: ["王者荣耀", "皇室战争", "绝地求生", "魔兽世界"],
				film: ["寄生虫", "让子弹飞", "夺冠", "战狼2"],
			}
		},
		components: {Category,CategorySlot}
	}
</script>

<style>
	.base-container{
		height: 300px;
	}
	.slot-container{
		float: left;
		margin-top: 60px;
		height: 300px;
	}
</style>
