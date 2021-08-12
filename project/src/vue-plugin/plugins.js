export default {
	install(Vue, project, version){
		// 添加一个全局方法
		Vue.prototype.buildTip = function(){
			return 'Welcome ' + project + '-' + version
		}
		
		// 添加一个全局指令
		Vue.directive("format", function(element, binding){
			var date = new Date(binding.value);
			element.innerText = date.getTime();
		})
	}
}