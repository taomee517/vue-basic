// const proxy = require('http-proxy-middleware');
// Vue配置参考：https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/case-axios/main.js'
	},	
  },
  lintOnSave: false,
  // devServer: {
  // 	  proxy: 'http://192.168.1.45:8008'
  // },
  devServer: {
	  host: '192.168.1.45',
	  port: 8080,
	  open: true,
  	  proxy: {
		'/test': {
		  target: 'http://192.168.1.45:8008',
		  changeOrigin: true,
		  pathRewrite: { '^/test': ''}
	  }
	}
  }
}