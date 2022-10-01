import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		userInfo:{},
		loginPopupShow:false,//控制是否打开登录弹窗,
		seachTabs:[],
		paperList:[]
	},
    mutations: {
		setUserInfo(state,userInfo){
			// that.$store.commit('setUserInfo',res.data)
			// (this.$store.state.userinfo)
					state.userInfo= userInfo
		},
		setLoginPopupShow(state,isLoginPopupShow){
					state.loginPopupShow= isLoginPopupShow
		},
		setSearchTabs(state,seachTabs){
					state.seachTabs.push(seachTabs)
		},
		clearST(state){
			state.seachTabs=[]
		},
		setPaperList(state,paperList){
					state.paperList=state.paperList.concat(paperList)
		},
		clearPL(state){
			state.paperList=[]
		}
	},
    actions: {}
})
export default store
