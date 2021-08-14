<template>
	<div>
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
		data(){
			return {
				code: 200,
				message: 'success',
				data: {
					count: 16,
					list: [
						{"userGuid":"4dcc5ed9-7553-0a0e-24e4-cd45c1475383","roleName":"超级管理员","deptName":"最高权限用户组","username":"admin","nickname":"admin","email":"admin@example.com","tel":null,"createdDate":"2020-03-17T07:50:05.049+0000"},
						{"userGuid":"4e7bffb7-ead5-df98-d773-229b74b6e2a3","roleName":"超级管理员","deptName":"最高权限用户组","username":"luy","nickname":"luy","email":"luy@qq.com","tel":"13312378979","createdDate":"2020-03-19T01:24:23.047+0000"},
						{"userGuid":"4ae0924c-01c1-e5b5-fff4-a2ed3f8722bb","roleName":"管理员","deptName":"设备组","username":"zenj","nickname":"zenj","email":"","tel":"","createdDate":"2020-03-20T13:32:49.877+0000"},
						{"userGuid":"48a14ae9-f056-6e83-b07b-e66d41763d91","roleName":"4G终端管理员","deptName":"4G设备管理组","username":"4gadmin","nickname":"4g设备管理","email":"231868008@qq.com","tel":"13883839281","createdDate":"2020-04-08T02:38:58.574+0000"},
						{"userGuid":"4bfb97a1-69f4-9e35-22d9-85266fb52289","roleName":"管理员","deptName":"jkq","username":"smartjk","nickname":"smartjk","email":"test@qq.com","tel":"15803069213","createdDate":"2020-04-23T12:27:46.078+0000"},
						{"userGuid":"4f3463ad-e59b-4f3c-52d5-414a8d8244bd","roleName":"管理员","deptName":"cgj","username":"kmcgj","nickname":"kmcgj","email":"test@qq.com","tel":"15803069213","createdDate":"2020-04-23T12:28:27.900+0000"},
						{"userGuid":"4f02e3f7-2fdc-5121-8485-28622d61daab","roleName":"一般用户","deptName":"whq","username":"wuhuaqu","nickname":"whq","email":"231868008@qq.com","tel":"15803069213","createdDate":"2020-04-24T03:39:56.953+0000"},
						{"userGuid":"455c782a-4c50-632d-364c-98d848a55999","roleName":"一般用户","deptName":"gdq","username":"guanduqu","nickname":"gdq","email":"231868008@qq.com","tel":"15803069213","createdDate":"2020-04-24T03:41:52.885+0000"},
						{"userGuid":"4c071b4c-d22f-46c7-0474-224a4b200aaf","roleName":"超级管理员","deptName":"aeroTest","username":"htjc","nickname":"htjc","email":"231868008@qq.com","tel":"13883839281","createdDate":"2020-04-27T03:41:05.605+0000"},
						{"userGuid":"45ec4cba-d26b-3aee-a7bf-b500ddef1eb8","roleName":"一般用户","deptName":"xsq","username":"xishanqu","nickname":"xsq","email":"","tel":"","createdDate":"2020-04-27T07:12:39.651+0000"},
						{"userGuid":"4417a574-4dea-87f1-c94d-f01296d03e87","roleName":"一般用户","deptName":"cgq","username":"chenggongqu","nickname":"cgq","email":"","tel":"","createdDate":"2020-04-27T07:13:05.890+0000"},
						{"userGuid":"43372f87-67c9-baa0-326f-958b52caf1af","roleName":"一般用户","deptName":"plq","username":"panlongqu","nickname":"plq","email":"","tel":"","createdDate":"2020-04-27T07:16:04.054+0000"},
						{"userGuid":"44a88447-7546-b8e5-98d7-1da4f7a100ac","roleName":"一般用户","deptName":"qxtest","username":"qxwztest","nickname":"qxwztest","email":"13883839281@qq.com","tel":"13883839281","createdDate":"2020-04-27T11:15:35.180+0000"},
						{"userGuid":"4cde6c92-9ba4-8b7b-4e4a-927390629d9e","roleName":"一般用户","deptName":"gtj","username":"guotuju","nickname":"guotuju","email":"test@qq.com","tel":null,"createdDate":"2020-04-30T07:07:52.406+0000"},
						{"userGuid":"47a3fdef-a0b7-883f-dea3-84a92d316d8b","roleName":"一般用户","deptName":"swj","username":"shuiwuju","nickname":"shuiwuju","email":"test@qq.com","tel":null,"createdDate":"2020-04-30T07:08:23.123+0000"},
						{"userGuid":"40fa4226-7945-25fc-7451-3e5e15d71b82","roleName":"一般用户","deptName":"swj","username":"jkqswj","nickname":"jkqswj","email":"test@qq.com","tel":null,"createdDate":"2020-04-30T07:24:24.774+0000"}					]
					]	
				}
			}
		}
	}
</script>

<style>
</style>
