<template>
	<div>
		<ol>
			<li 
				v-for="user in data.list"
				:key="user.userGuid"
			>
			{{user.username}} - {{user.roleName}} - {{user.deptName}} - {{user.createdDate}}
			</li>
		</ol>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				code: 200,
				message: 'success',
				data: {
					count: 16,
					list: [
						{"userGuid":"4dcc5ed9","roleName":"超级管理员","deptName":"最高权限用户组","username":"admin","nickname":"admin","email":"admin@example.com","tel":null,"createdDate":"2020-03-17T07:50:05.049+0000"},
						{"userGuid":"4e7bffb7","roleName":"超级管理员","deptName":"最高权限用户组","username":"luy","nickname":"luy","email":"luy@qq.com","tel":"13312378979","createdDate":"2020-03-19T01:24:23.047+0000"},
						{"userGuid":"4ae0924c","roleName":"管理员","deptName":"设备组","username":"zenj","nickname":"zenj","email":"","tel":"","createdDate":"2020-03-20T13:32:49.877+0000"},
						{"userGuid":"48a14ae9","roleName":"4G终端管理员","deptName":"4G设备管理组","username":"4gadmin","nickname":"4g设备管理","email":"231868008@qq.com","tel":"13883839281","createdDate":"2020-04-08T02:38:58.574+0000"},
						{"userGuid":"4bfb97a1","roleName":"管理员","deptName":"jkq","username":"smartjk","nickname":"smartjk","email":"test@qq.com","tel":"15803069213","createdDate":"2020-04-23T12:27:46.078+0000"},
						{"userGuid":"4f3463ad","roleName":"管理员","deptName":"cgj","username":"kmcgj","nickname":"kmcgj","email":"test@qq.com","tel":"15803069213","createdDate":"2020-04-23T12:28:27.900+0000"},
						{"userGuid":"4f02e3f7","roleName":"一般用户","deptName":"whq","username":"wuhuaqu","nickname":"whq","email":"231868008@qq.com","tel":"15803069213","createdDate":"2020-04-24T03:39:56.953+0000"},
						{"userGuid":"455c782a","roleName":"一般用户","deptName":"gdq","username":"guanduqu","nickname":"gdq","email":"231868008@qq.com","tel":"15803069213","createdDate":"2020-04-24T03:41:52.885+0000"},
						{"userGuid":"4c071b4c","roleName":"超级管理员","deptName":"aeroTest","username":"htjc","nickname":"htjc","email":"231868008@qq.com","tel":"13883839281","createdDate":"2020-04-27T03:41:05.605+0000"},
						{"userGuid":"45ec4cba","roleName":"一般用户","deptName":"xsq","username":"xishanqu","nickname":"xsq","email":"","tel":"","createdDate":"2020-04-27T07:12:39.651+0000"},
						{"userGuid":"4417a574","roleName":"一般用户","deptName":"cgq","username":"chenggongqu","nickname":"cgq","email":"","tel":"","createdDate":"2020-04-27T07:13:05.890+0000"},
						{"userGuid":"43372f87","roleName":"一般用户","deptName":"plq","username":"panlongqu","nickname":"plq","email":"","tel":"","createdDate":"2020-04-27T07:16:04.054+0000"},
						{"userGuid":"44a88447","roleName":"一般用户","deptName":"qxtest","username":"qxwztest","nickname":"qxwztest","email":"13883839281@qq.com","tel":"13883839281","createdDate":"2020-04-27T11:15:35.180+0000"},
						{"userGuid":"4cde6c92","roleName":"一般用户","deptName":"gtj","username":"guotuju","nickname":"guotuju","email":"test@qq.com","tel":null,"createdDate":"2020-04-30T07:07:52.406+0000"},
						{"userGuid":"47a3fdef","roleName":"一般用户","deptName":"swj","username":"shuiwuju","nickname":"shuiwuju","email":"test@qq.com","tel":null,"createdDate":"2020-04-30T07:08:23.123+0000"},
						{"userGuid":"40fa4226","roleName":"一般用户","deptName":"swj","username":"jkqswj","nickname":"jkqswj","email":"test@qq.com","tel":null,"createdDate":"2020-04-30T07:24:24.774+0000"}					
					]
				}
			}
		},
	}
</script>

<style>
</style>
