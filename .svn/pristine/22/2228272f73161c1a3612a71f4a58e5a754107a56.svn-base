import request from '@/utils/request'

const login = {
	// 登录方法
	login(params) {
		return request({
			url: '/admin/sys/login',
			method: 'post',
			params: params
		})
	},

	// 获取用户详细信息
	getInfo() {
		return request({
			url: '/getInfo',
			method: 'get'
		})
	},

	// 退出方法
	logout() {
		return request({
			url: '/logout',
			method: 'post'
		})
	},

	// 获取验证码
	getCodeImg() {
		return request({
			url: '/captcha.jpg',
			method: 'get'
		})
	},

	// 注册方法
	register(params) {
		return request({
			url: '/admin/sys/user/save',
			method: 'post',
			params: params
		})
	},

	//获取验证码
	getVerificationCode(params) {
		return request({
			url: '/mail/getEmailVerificationCode',
			method: 'get',
			params: params
		})
	},
	//上传文件
	upload(params) {
		return request({
			url: '/shape/upload',
			method: 'post',
			params: params
		})
	},
	//历史方案
	getInfo1(params) {
		return request({
			url: '/case/info/list',
			method: 'get',
			params: params
		})
	},
	//新建方案
	createCase(params) {
		return request({
			url: '/case/info/save',
			method: 'post',
			params: params
		})
	},
}
//导出
export default login
