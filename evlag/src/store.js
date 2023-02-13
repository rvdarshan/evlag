import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({

    state:
    {
        Username: "",
        Phone: ""
    },
    mutations:
    {
        Username(state,item)
        {
            state.Username=item
        },
        Phone(state,item)
        {
            state.Phone=item
        }
    }
})