<template>
	<div>
		<h2>Vue Base</h2>
		<div class="base-container">
			<Category classify="美食" :classifyContent="food"/>
			<Category classify="游戏" :classifyContent="game"/>
			<Category classify="电影" :classifyContent="film"/>
		</div>
		
		<h2>Vue Slot</h2>
		<div class="slot-container">
			<CategoryDefaultSlot classify="美食">
				<ul>
					<li v-for="item in food">{{item}}</li>
				</ul>
			</CategoryDefaultSlot>
			<CategoryNamedSlot>
				<h2 slot="title">游戏</h2>
				<img slot="show" src="../../public/images/thrones.jpg" />
				<ul slot="content">
					<li v-for="item in game">{{item}}</li>
				</ul>
			</CategoryNamedSlot>
			<CategoryNamedSlot>
				<template v-slot:title>
					<h2>电影</h2>
				</template>
				<template v-slot:content>
					<ul>
						<li v-for="item in film">{{item}}</li>
					</ul>
				</template>
				<template v-slot:more>
					<a class="more" href="#">4K</a>
					<a class="more" href="#">BluRay</a>
					<a class="more" href="#">1080P</a>
					<a class="more" href="#">720P</a>
					<a class="more" href="#">Auto</a>
				</template>
			</CategoryNamedSlot>
		</div>
		
		<h2>Vue Scope Slot</h2>
		<div class="scope-container">
			<CategoryScopeSlot>
				<template slot-scope="film">
					<h2>{{film.title}}</h2>
					<ul>
						<li v-for="item in film.content">{{item}}</li>
					</ul>
				</template>
			</CategoryScopeSlot>
			<CategoryScopeSlot>
				<template slot-scope="film">
					<h2 class="mid-title">{{film.title}}</h2>
					<ul>
						<li class="mid-li" v-for="item in film.content">{{item}}</li>
					</ul>
				</template>
			</CategoryScopeSlot>
			<CategoryScopeSlot>
				<template slot-scope="film">
					<h2 class="end-title">{{film.title}}</h2>
					<a class="end" v-for="item in film.content" href="#">>> {{item}}</a>
				</template>
			</CategoryScopeSlot>
		</div>
	</div>
</template>

<script>
	import Category from './components/Category.vue'
	import CategoryDefaultSlot from './components/CategoryDefaultSlot.vue'
	import CategoryNamedSlot from './components/CategoryNamedSlot.vue'
	import CategoryScopeSlot from './components/CategoryScopeSlot.vue'
	
	export default{
		name: 'App',
		data(){
			return {
				food: ["火锅", "烧白", "烤鱼", "串串"],
				game: ["王者荣耀", "皇室战争", "绝地求生", "魔兽世界"],
				film: ["寄生虫", "让子弹飞", "夺冠", "战狼2"],
			}
		},
		components: {Category,CategoryDefaultSlot,CategoryNamedSlot,CategoryScopeSlot}
	}
</script>

<style scoped>
	.base-container{
		width: 100%;
		height: 200px;
	}
	.slot-container{
		float: left;
		width: 100%;
		height: 500px;
	}
	.scope-container{
		float: left;
		width: 100%;
		height: 200px;
	}
	.mid-title{
		color: gainsboro;
		background-color: brown;
		text-align: center;
	}
	.mid-li{
		color: ghostwhite;
		background-color: #696969;
		border: 1px solid #7C7C7C;
	}
	.end-title{
		color: gainsboro;
		background-color: blue;
		text-align: center;
	}
	.end{
		display: block;
	}
	.more{
		margin-right: 10px;
	}
</style>
