<template>
	<div>
		<input ref="searchBox" class="search-input" placeholder="请输入查询关键字" @keyup.enter="keywordFilter" />
		<button class="search-btn" @click="keywordFilter">search</button>
	</div>
</template>

<script>
	export default {
		name: 'SearchBox',
		methods: {
			keywordFilter(){
				var keyword = this.$refs.searchBox.value;
				console.log(keyword);
			}
		}
	}
</script>

<style>
/* 	.icon{
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	
	.icon-search{
		width: 18px;
		height: 18px;		
		border: 1px solid #D2691E;
		background-image: url(../../../public/icons/search.png);
		background-position: center center; 
	} */
	
	.search-btn{
		width: 60px;
		height: 29px;
		border: none;
		margin-left: -62px;
	}
	
	.search-input{
		height: 30px;
		width: 680px;
		border: 1px solid gainsboro;
	}
</style>
