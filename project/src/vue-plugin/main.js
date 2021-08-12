import Vue from 'vue'
import App from './App.vue'


import plugins from './plugins.js'

const project = 'vue-plugin'
const version = '1.0-SNAPSHOT'

Vue.use(plugins, project, version)

new Vue({
	el: '#app',
	components:{App},
	render: createElement => createElement(App)
})