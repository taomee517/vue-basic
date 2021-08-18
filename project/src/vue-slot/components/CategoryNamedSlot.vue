<template>
	<div class="category-container">
		<slot name="title"></slot>
		<slot name="show"></slot>
		<slot name="content"></slot>
		<slot name="more"></slot>
	</div>
</template>

<script>
	export default{
		name: 'CategoryNamedSlot',
		data(){
			return {};
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
	img{
		width: 100%;
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
