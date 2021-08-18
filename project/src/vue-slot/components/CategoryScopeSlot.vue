<template>
	<div class="category-container">
		<slot :title="classify" :content="film"></slot>
	</div>
</template>

<script>
	export default{
		name: 'CategoryScopeSlot',
		data(){
			return {
				classify: "电影",
				film: ["寄生虫", "让子弹飞", "夺冠", "战狼2"]
			};
		}
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
