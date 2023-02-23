<template>
<div>
  <v-app>
    <v-main>
      
        <v-layout wrap>
          <v-flex xs12><navBar v-if="$route.path!='/'"/></v-flex>
          <v-flex xs12> 
            <router-view></router-view>
            </v-flex>
        </v-layout>
      
      
     
    </v-main>
  </v-app>
  </div>
</template>

<script>
import navBar from '@/components/basic/appBar.vue'
import './assets/style/font.css'
import './assets/style/style.css'
import axios from 'axios'
import store from './store'
export default {
  name: 'App',

  components: {
    navBar,
  },

  data: () => ({
    //
  }),
  mounted()
  {
    this.gi()
  },
  methods:
  {
    gi()
    {
      axios({
        method:'post',
        URL:'/parityadmin/login',
        headers:
        {
          token:localStorage.getItem('Token'),
        },
        data:{
          id:localStorage.getItem('ID')
        }
      }).then((response)=>{
        store.commit("email",response.data.data.email);
        store.commit("phoneNumber",response.data.data.phoneNumber);
        store.commit("name",response.data.data.name);
        store.commit("role",response.data.data.role);
        
      })
    }
  }
};
</script>
