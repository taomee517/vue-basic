<template>
	<div>
		<h3 ref="regret" v-text="regret"></h3>
		<UserForm ref="userform"></UserForm>
		<button @click="captureRegret">获取欢迎DOM</button>
		<button @click="captureUser">获取用户VC</button>
	</div>
</template>

<script>
	import UserForm from './components/UserForm.vue'
	export default {
		name: 'App',
		components: {UserForm},
		data(){
			return {regret: "Welcome to Taomee's Github!"}
		},
		methods: {
			captureRegret(){
				var rgt = this.$refs.regret;
				alert(rgt.innerText);
			},
			captureUser(){
				var uf = this.$refs.userform;
				uf.submit();
			}
		}
	}
</script>

<style>
	.welcome{
		color: blue;
	}
</style>
