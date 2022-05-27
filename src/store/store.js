import Vue from "vue"
import Vuex from "vuex"
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    state:{
        suitePath: "",
       
    },
    mutations:{
        set_suitePath(state,pathName){
            state.suitePath = pathName;
        },
    }
})