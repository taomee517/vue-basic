<template>
	<div>
		<form>
			<label for="username">姓名：</label>
			<input id="username" type="text" v-model="username" placeholder="username" />
			<br><br>
			
			<label for="phone">手机：</label>
			<input id="phone" type="text" v-model="phone" placeholder="phone number" />
			<br><br>
			
			<label for="age">年龄：</label>
			<input id="age" type="text" v-model.number="age" placeholder="age" />
			<br><br>
			
			<label>性别：</label>
			<label for="gender-male">男</label>
			<input id="gender-male" type="radio" v-model="gender" value="男"/>
			<label for="gender-female">女</label>
			<input id="gender-female" type="radio" v-model="gender" value="女"/>
			<br><br>
			
			<label>爱好：</label>
			<input id="hobbies-basketball" type="checkbox" v-model="hobbies" value="篮球"/>
			<label for="hobbies-basketball">篮球</label>
			<input id="hobbies-football" type="checkbox" v-model="hobbies" value="足球"/>
			<label for="hobbies-football">足球</label>
			<input id="hobbies-music" type="checkbox" v-model="hobbies" value="音乐"/>
			<label for="hobbies-music">音乐</label>
			<br><br>
			
			<label>城市：</label>
			<select v-model="city">
				<option value="成都">成都</option>
				<option value="重庆">重庆</option>
				<option value="武汉">武汉</option>
			</select>			
			<br><br>
			
			<label for="motto">座右铭：</label><br>
			<textarea id="motto" v-model.lazy="motto" class="motto"></textarea>
			<br><br>
			
			<input type="button" @click="submit" value="注册" />
		</form>
	</div>
</template>

<script>
	export default {
		name: 'UserForm',
		data(){
			return {
				username: "taomee",
				age: "32",
				phone: "13167861235",
				gender: "男",
				hobbies: ["音乐","足球"],
				city: "重庆",
				motto: "有志者,事竟成",
			}
		},
		methods:{
		  submit: function(){
			  var postData = {
				  username: this.username,
				  phone: this.phone,
				  gender: this.gender,
				  hobbies: JSON.stringify(this.hobbies),
				  motto: this.motto
			  };
			  alert(JSON.stringify(postData));
		  }
		}
	}
</script>

<style>
	.motto{
		color: dimgrey;
		width: 400px;
		height: 80px;
	}
</style>
