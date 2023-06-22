<template>
<div>
  <v-app>
    <v-main>
      
        <v-layout wrap>
          <v-flex xs12><navBar v-if="$route.path!='/login' && $route.path!='/admin'  && $route.path!='/nav' && $route.path!='/' && $route.path!='/admindash' && $route.path!='/appointment' && $route.path!='/adminprofile' && $route.path!='/loguser'"/></v-flex>
          <v-flex xs12>
            <v-flex lg12><appBar v-if="$route.path!='/login' && $route.path!='/' && $route.path!='/nav'  && $route.path!='/superadmin' && $route.path!='/dashboard' && $route.path!='/profilesuper' && $route.path!='/securitymanagement' && $route.path!='/securityregistration' && $route.path!='/updatepassword' && $route.path!='/securitylist' && $route.path!='/securityprofile' && $route.path!='/securityupdate' && $route.path!='/addadmin' && $route.path!='/addlocation' && $route.path!='/viewallocation' && $route.path!='/userlog' && $route.path!='/securityedit' && $route.path!='/securityallocation'"></appBar></v-flex> 
            <router-view></router-view>
            </v-flex>
        </v-layout>
      
      
     
    </v-main>
  </v-app>
  </div>
</template>

<script>
import navBar from '@/components/basic/appBar.vue'
import appBar from '@/components/admin/adminBar.vue' 
import './assets/style/font.css'
import './assets/style/style.css'
import axios from 'axios'
import store from './store'
export default {
  name: 'App',

  components: {
    navBar,
    appBar,
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
        store.commit("role",response.data.data.designation);
        
      })
    }
  }
};
</script>
