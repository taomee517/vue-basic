import Vue from 'vue'
import App from './App'


new Vue({
	components: {App},
	render: creatElement => creatElement(App)
}).$mount('#app');
