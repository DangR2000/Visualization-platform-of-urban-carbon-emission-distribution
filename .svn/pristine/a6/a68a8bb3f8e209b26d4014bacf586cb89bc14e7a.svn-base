import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from 'vuex-along'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//这里放全局参数
		userInfo:{},
		caseInfo:{},
		caseBasicData:{},
		jenks:[],
		baseRegion:[]
	},
	mutations: {
		//这里是set方法 this.$store.commit('setCaseBasicData', caseBasicData);    
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo
		},
		setCaseBasicData(state, caseBasicData) {
			state.caseBasicData = caseBasicData
		},
		setCaseInfo(state, caseInfo) {
			state.caseInfo = caseInfo
		},
		setJenks(state, jenks) {
			state.jenks = jenks
		},
		setBaseRegion(state, baseRegion) {
			state.baseRegion = baseRegion
		},
	},
	getters: {
		//这里是get方法 this.$store.getters.getCaseBasicData
		getUserInfo: state => state.userInfo,
		getCaseBasicData: state => state.caseBasicData,
		getCaseInfo: state => state.caseInfo,
		getJenks: state => state.jenks,
		getBaseRegion: state => state.baseRegion
	},
	actions: {},
	modules: {},
	plugins: [createVuexAlong()]
})
