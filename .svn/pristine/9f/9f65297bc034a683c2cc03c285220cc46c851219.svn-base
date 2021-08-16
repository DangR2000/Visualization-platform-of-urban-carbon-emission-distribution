import axios from 'axios'
import store from '@/store'
import {getToken} from '@/utils/auth'
import {
	Message
} from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//设置axios可以携带cookie
axios.defaults.withCredentials = true;
/* const CancelToken = axios.CancelToken
var cancel; */
var service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 30000
})
//添加请求拦截器
service.interceptors.request.use(function(config) {
	config.headers['X-Authorization-Token'] = getToken()
	return config
}, function(error) {
	return Promise.reject(error)
})
//添加响应拦截器
service.interceptors.response.use(function(response) {
	/**
	 * 下面的注释为通过在response里，自定义code来标示请求状态
	 * 当code返回如下情况则说明权限有问题，登出并返回到登录页
	 * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
	 */
	console.info(response);
		const res = response.data;
		if (res.code !== 0) {
			let error = {};
			switch (res.code) {
				case 400:
					error.message = '错误请求'
					break;
				case 401:
					error.message = res.msg
					break;
				case 403:
					error.message = '拒绝访问'
					break;
				case 404:
					error.message = '请求错误,未找到该资源'
					window.location.href = "/NotFound"
					break;
				case 405:
					error.message = '请求方法未允许'
					break;
				case 408:
					error.message = '请求超时'
					break;
				case 500:
					error.message = '服务器端出错'
					break;
				case 501:
					error.message = '网络未实现'
					break;
				case 502:
					error.message = '网络错误'
					break;
				case 503:
					error.message = '服务不可用'
					break;
				case 504:
					error.message = '网络超时'
					break;
				case 505:
					error.message = 'http版本不支持该请求'
					break;
				default:
					error.message = `连接错误${error.response.status}`
			}
			alert(error.message);
		} else {
			return response
		}
}, function(error) {
	if (error && error.response) {
		// 1.公共错误处理
		// 2.根据响应码具体处理
		switch (error.response.status) {
			case 400:
				error.message = '错误请求'
				break;
			case 401:
				error.message = '未授权，请重新登录'
				break;
			case 403:
				error.message = '拒绝访问'
				break;
			case 404:
				error.message = '请求错误,未找到该资源'
				window.location.href = "/NotFound"
				break;
			case 405:
				error.message = '请求方法未允许'
				break;
			case 408:
				error.message = '请求超时'
				break;
			case 500:
				error.message = '服务器端出错'
				break;
			case 501:
				error.message = '网络未实现'
				break;
			case 502:
				error.message = '网络错误'
				break;
			case 503:
				error.message = '服务不可用'
				break;
			case 504:
				error.message = '网络超时'
				break;
			case 505:
				error.message = 'http版本不支持该请求'
				break;
			default:
				error.message = `连接错误${error.response.status}`
		}
	} else {
		// 超时处理
		if (JSON.stringify(error).includes('timeout')) {
			Message.error('服务器响应超时，请刷新当前页')
		}
		error.message('连接服务器失败')
	}
	Message.error(error.message)
	/***** 处理结束 *****/
	//如果不需要错误处理，以上的处理过程都可省略
	return Promise.resolve(error.response)
})
//4.导入文件
export default service
