import Vue from "vue"
import Vuex from "vuex"
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    state:{
        suitePath: "",
        login_id: "0",
        login_pwd: "",
       
    },
    mutations:{
        set_suitePath(state,pathName){
            state.suitePath = pathName;
        },
        set_loginid(state,value) {
            state.login_id = value
        },
        set_loginpwd(state,value) {
            state.login_pwd = value
        }
    }
})