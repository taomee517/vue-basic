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
						{"userGuid":"4dcc5ed9-7553-0a0e-24e4-cd45c1475383","roleInfoId":"48ae1169-7651-29c2-ba40-ca247566a393","roleName":"超级管理员","deptInfoId":"42a1c5bd-968e-df49-28d5-4e78c4750da6","deptName":"最高权限用户组","username":"admin","nickname":"admin","email":"admin@example.com","tel":null,"wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-03-17T07:50:05.049+0000","userType":1,"company":"云南航天工程物探检测股份有限公司重庆分部"},
						{"userGuid":"4e7bffb7-ead5-df98-d773-229b74b6e2a3","roleInfoId":"48ae1169-7651-29c2-ba40-ca247566a393","roleName":"超级管理员","deptInfoId":"42a1c5bd-968e-df49-28d5-4e78c4750da6","deptName":"最高权限用户组","username":"luoyi","nickname":"罗毅","email":"luoyi@qq.com","tel":"13312378979","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-03-19T01:24:23.047+0000","userType":0,"company":null},
						{"userGuid":"4ae0924c-01c1-e5b5-fff4-a2ed3f8722bb","roleInfoId":"4f53abc3-6526-6a39-88e7-1b5302793281","roleName":"管理员","deptInfoId":"4cbf9200-e7df-733d-9b47-318e979b1a90","deptName":"设备组","username":"zengjian","nickname":"曾健","email":"","tel":"","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-03-20T13:32:49.877+0000","userType":0,"company":null},
						{"userGuid":"48a14ae9-f056-6e83-b07b-e66d41763d91","roleInfoId":"48adabb4-b7d3-1df4-b12c-a140410cddbd","roleName":"4G终端管理员","deptInfoId":"48e0990b-363c-8ef8-a90e-f6e54873afa3","deptName":"4G设备管理组","username":"4gadmin","nickname":"4g设备管理","email":"231868008@qq.com","tel":"13883839281","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-08T02:38:58.574+0000","userType":0,"company":null},
						{"userGuid":"4bfb97a1-69f4-9e35-22d9-85266fb52289","roleInfoId":"4f53abc3-6526-6a39-88e7-1b5302793281","roleName":"管理员","deptInfoId":"4e322c34-b3db-a692-55fb-038538b1659d","deptName":"经开区","username":"smartjk","nickname":"smartjk","email":"543406697@qq.com","tel":"15803069213","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-23T12:27:46.078+0000","userType":0,"company":null},
						{"userGuid":"4f3463ad-e59b-4f3c-52d5-414a8d8244bd","roleInfoId":"4f53abc3-6526-6a39-88e7-1b5302793281","roleName":"管理员","deptInfoId":"4df863dd-72a5-20a9-9e65-a0b3816eb29f","deptName":"城管局","username":"kmcgj","nickname":"kmcgj","email":"543406697@qq.com","tel":"15803069213","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-23T12:28:27.900+0000","userType":0,"company":null},
						{"userGuid":"4f02e3f7-2fdc-5121-8485-28622d61daab","roleInfoId":"4e4e1b68-fff8-a926-91c5-8bdea9a9b283","roleName":"一般用户","deptInfoId":"43f788d5-acad-291a-84f4-9a67e30300be","deptName":"五华区","username":"wuhuaqu","nickname":"五华区","email":"231868008@qq.com","tel":"15803069213","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-24T03:39:56.953+0000","userType":0,"company":null},
						{"userGuid":"455c782a-4c50-632d-364c-98d848a55999","roleInfoId":"4e4e1b68-fff8-a926-91c5-8bdea9a9b283","roleName":"一般用户","deptInfoId":"4f06e1b0-3b74-bbeb-6326-13d83e22949c","deptName":"官渡区","username":"guanduqu","nickname":"官渡区","email":"231868008@qq.com","tel":"15803069213","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-24T03:41:52.885+0000","userType":0,"company":null},
						{"userGuid":"4c071b4c-d22f-46c7-0474-224a4b200aaf","roleInfoId":"48ae1169-7651-29c2-ba40-ca247566a393","roleName":"超级管理员","deptInfoId":"48d8bdb7-2b53-5d77-3993-547f588058ab","deptName":"航天检测测试","username":"htjc","nickname":"htjc","email":"231868008@qq.com","tel":"13883839281","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-27T03:41:05.605+0000","userType":0,"company":null},
						{"userGuid":"45ec4cba-d26b-3aee-a7bf-b500ddef1eb8","roleInfoId":"4e4e1b68-fff8-a926-91c5-8bdea9a9b283","roleName":"一般用户","deptInfoId":"4af90123-f637-c610-98dc-e8b4a04cdc9d","deptName":"西山区","username":"xishanqu","nickname":"西山区","email":"","tel":"","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-27T07:12:39.651+0000","userType":0,"company":null},
						{"userGuid":"4417a574-4dea-87f1-c94d-f01296d03e87","roleInfoId":"4e4e1b68-fff8-a926-91c5-8bdea9a9b283","roleName":"一般用户","deptInfoId":"4f009629-a79b-f68c-0a23-fb31dba2d6af","deptName":"呈贡区","username":"chenggongqu","nickname":"呈贡区","email":"","tel":"","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-27T07:13:05.890+0000","userType":0,"company":null},
						{"userGuid":"43372f87-67c9-baa0-326f-958b52caf1af","roleInfoId":"4e4e1b68-fff8-a926-91c5-8bdea9a9b283","roleName":"一般用户","deptInfoId":"4d2793b1-e068-9cdd-8007-1db70f3ac0b7","deptName":"盘龙区","username":"panlongqu","nickname":"盘龙区","email":"","tel":"","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-27T07:16:04.054+0000","userType":0,"company":null},
						{"userGuid":"44a88447-7546-b8e5-98d7-1da4f7a100ac","roleInfoId":"4e4e1b68-fff8-a926-91c5-8bdea9a9b283","roleName":"一般用户","deptInfoId":"49af57bf-b7bf-a6ee-1dcd-e63bbd879984","deptName":"千寻位置测试","username":"qxwztest","nickname":"qxwztest","email":"13883839281@qq.com","tel":"13883839281","wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-27T11:15:35.180+0000","userType":0,"company":null},
						{"userGuid":"4cde6c92-9ba4-8b7b-4e4a-927390629d9e","roleInfoId":null,"roleName":null,"deptInfoId":"40cb2906-2a83-9df6-e6ce-9333ea4a7fbb","deptName":"国土局","username":"guotuju","nickname":"guotuju","email":"543406697@qq.com","tel":null,"wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-30T07:07:52.406+0000","userType":0,"company":null},
						{"userGuid":"47a3fdef-a0b7-883f-dea3-84a92d316d8b","roleInfoId":null,"roleName":null,"deptInfoId":"4a6c192e-ba78-5f23-65c1-c791b232e09b","deptName":"滇中水务局","username":"shuiwuju","nickname":"shuiwuju","email":"543406697@qq.com","tel":null,"wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-30T07:08:23.123+0000","userType":0,"company":null},
						{"userGuid":"40fa4226-7945-25fc-7451-3e5e15d71b82","roleInfoId":null,"roleName":null,"deptInfoId":"4a6c192e-ba78-5f23-65c1-c791b232e09b","deptName":"滇中水务局","username":"jkqswj","nickname":"jkqswj","email":"543406697@qq.com","tel":null,"wxId":null,"sessionKey":null,"isDel":0,"createdBy":null,"createdDate":"2020-04-30T07:24:24.774+0000","userType":0,"company":null}					]
					]	
				}
			}
		}
	}
</script>

<style>
</style>
