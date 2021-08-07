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


