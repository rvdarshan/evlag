import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{

    },
    mutations:{
        email(state,item)
        {
            state.email=item;
        },
        name(state,item)
        {
            state.name=item;
        },
        phoneNumber(state,item)
        {
            state.phoneNumber=item;
        },
        Designation(state,item)
        {
            state.Designation=item;
        }
    }
})