import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		userInfo:{},
		loginPopupShow:false,//控制是否打开登录弹窗
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
	},
    actions: {}
})
export default store
