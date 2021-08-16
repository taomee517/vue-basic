import Vue from 'vue'
import App from './App.vue'
import requests from './basejs/new-axios.js'

new Vue({
	el: '#app',
	components: {App},
	render: h => h(App),
	beforeCreate(){
		Vue.prototype.$req = requests
	}
})