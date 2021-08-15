<template>
	<div>
		<input ref="searchBox" class="search-input" placeholder="请输入查询关键字" v-model="keyword" @keyup.enter="keywordFilter" />
		<button class="search-btn" @click="keywordFilter">search</button>
	</div>
</template>

<script>
	export default {
		name: 'SearchBox',
		data(){
			return {
				keyword: ""
			}
		},
		methods: {
			keywordFilter(){
				var keyword = this.$refs.searchBox.value;
				this.$bus.$emit("keywordChange", keyword);
			}
		},
		mounted(){
			this.$bus.$on("pageChange", pager => {
				var query = {
					"keyword": this.keyword,
					"pageIndex": pager.pageIndex,
					"pageSize": pager.pageSize
				};
				this.$bus.$emit("search", query);
			});
		},
		beforeDestroy(){
			this.$bus.$off("pageChange");
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
