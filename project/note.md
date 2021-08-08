# 笔记

## 脚手架文件结构：
	|-- node_modules
	|-- public								*
	|-- |-- favicon.ico
	|-- |-- index.html  	主页面			*
	|-- src
	|-- |-- assets 			静态资源
	|-- |	'-- logo.png
	|-- |-- components 		组件				*
	|-- |	'-- HelloWorld.vue
	|-- |-- App.vue			汇总所有组件		*
	|-- |-- main.js			入口文件			*
	|-- .gitignore
	|-- babel.config.js		babel配置文件
	|-- package.json		应用包配置文件	*
	|-- package-lock.json	包版本控制文件	*	
	|-- README.md			项目描述文件 
	
## Vue ref属性
	1. 被用来给元素或子组件注册引用信息（id的替代者）
	2. 应用在html元素上时获取到的是真实DOM元素，应用在组件标签上获取的是组件实例对象（VueComponent实例）
	3. 使用方式：
		标识：<h2 ref="hw">Hello World</h2>
			 <SelfDefinedTag ref="sdt"></SelfDefinedTag>
		获取：vm.refs.hw
			 vm.refs.sdt
			 
## Vue插件
	功能： 用于增强Vue
	本质： 包含install方法的一个对象，install的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据
	定义插件：
		对象.install = function(Vue, options){
			// 1.定义一个过滤器
			Vue.filter(...)
			
			// 2.添加全局指令
			Vue.directive(...)
			
			// 3.配置全局混入
			Vue.mixin(...)
			
			// 4.添加实例方法
			Vue.prototype.$myMethod = function(){...}
			Vue.prototype.$myProp = xxxx	
		}
	使用插件： Vue.use(xxx)	
	
## scoped样式
	作用：让样式只在局部生效，防止冲突
	写法：<style scoped></style>
	
## 总结列表操作
	1. 组件化的编码流程
		(1). 拆分静态组件：组件按照功能点拆分，命名不要与html元素冲突 
		(2). 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是多个组件在用
			1). 一个组件在用，将数据放在该组件
			2). 多个组件在用，将数据放在共同的父组件上（状态提升）
		(3). 交互实现：从绑定事件开始	
	2. 子父组件通信
		(1).  父组件 ===> 子组件通信，父组件在子组件的标签中写入属性值，子组件通过props接收属性
		(2).  子组件 ===> 父组件通信，父组件提前给子组件一个函数，当子组件调用函数时就可以实现数据通信
		(3).  还可以通过localStorage， sessionStorage实现
		(4).  定义自定义事件evt，在组件中绑定事件，并将数据传入 this.$emit("evt", data)
		(5).  给组件标签添加ref属性，动态绑定on事件 vm.$refs.rtag.$on("evt", data)
	3. 使用v-model时要切记，v-model绑定的值不能是props传过来的值，因为props是不能修改的
	4. props传过来的如果是对象类型的值，修改对象的属性Vue不会报错，但不推荐这样做

## Vue 脚手架配置代理
### 方法一
	在vue.config.js中添加如下配置,proxy的地址为你要访问服务器地址
	devServer{
		proxy: "http://localhost:5000"
	}
	说明：
		1. 配置简单，请求时直接发给前端（8080）即可
		2. 但不能配置多个代理，不能灵活的控制请求是否走代理（有可能直接请求了前端的静态资源）
		3. 工作方式：按照上述配置，当请求了前端不存在的资源时，那么该请求会被转到后端服务器
	
### 方法二
	在vue.config.js中编写具体的代理规则
	module.exports = {
		devServer: {
			proxy:	{
				'api1': {
					target: 'http://localhost:5000',
					changeOrigin: true,
					pathRewrite: {'^api1', ''}
				},
				'api2': {
					target: 'http://localhost:5001',
					changeOrigin: true,
					pathRewrite: {'^api2', ''}
				}
			}
		}
	}
	说明：
		1. 可以配置多个代理，且可以灵活的控制请求是否走代理
		2. 但配置项目略微繁琐，请求时必须添加前前缀
	

