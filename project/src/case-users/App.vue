<template>
	<div>
		<h2>practice case: user-list</h2>
		<SearchBox></SearchBox>
		<UserList></UserList>
		<Pager></Pager>
	</div>
</template>

<script>
	import SearchBox from './components/SearchBox.vue'
	import UserList from './components/UserList.vue'
	import Pager from './components/Pager.vue'
	
	export default {
		name: 'App',
		components: {SearchBox, UserList, Pager}
	}
</script>

<style>
</style>
