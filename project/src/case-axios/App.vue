<template>
	<div>
		<h2>Case Axios</h2>
		<button @click="getUsers">跨域获取人员数据</button>
	</div>
</template>

<script>
	export default{
		name: 'App',
		data(){
			return {}
		},
		methods:{
			getUsers(){
				this.$req.requests.get("/test/data/users").then(function (response) {
					var data = JSON.stringify(response.data);
					alert(data)
				}).catch(function(error){
					if(error.response){
					  //请求已发出，但服务器使用状态代码进行响应
					  //落在2xx的范围之外
					  console.log(error.response.data);
					  console.log(error.response.status);
					  console.log(error.response.headers);
					} else {
					  //在设置触发错误的请求时发生了错误
					  console.log('Error',error.message);
					}					
			   })
			}
		}		
	}
</script>

<style>
</style>
