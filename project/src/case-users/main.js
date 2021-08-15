import Vue from 'vue'
import App from './App.vue'

new Vue({
	el: '#app',
	render: h => h(App),
	// 注册全局事件总线
	beforeCreate(){
		Vue.prototype.$bus = this;
	}
})