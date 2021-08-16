import request from '@/utils/request'

const caseinfo = {
	//上传文件
	upload(params){
		return request({
			url: '/shape/upload',
			method: 'post',
			params: params
		})
	},
	//新建方案
	createCase(params){
		return request({
			url:'/case/info/save',
			method:'post',
			params:params
		})
	},
	//碳排量计算
	ceComputed(params){
		console.info(params);
		return request({
			url:'/case/info/urbanCECalculation',
			method:'post',
			params:params
		})
	},
	
	//历史方案
	historyCase(params){
		return request({
			url:'/case/info/list',
			method:'get',
			params:params
		})
	},
	//获取历史方案数据
	planCE(params){
		return request({
			url:'/case/info/planCE',
			method:'post',
			params:params
		})
	},
	//获取省市区数据
	baseRegion(){
		return request({
			url:'/case/info/baseRegion',
			method:'post'
		})
	},
}
//导出
export default caseinfo