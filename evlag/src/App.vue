<template>
  <v-app>
    
    
    <v-main>
      

      <router-view>

    </router-view>
    </v-main>
  </v-app>
</template>

<script>

import store from './store'
import axios from 'axios'
export default {
  name: 'App',

  components: {
    
    
  },
 data: () => ({
    //
  }),
  mounted()
  {
    this.gi()
    {
      axios({
        method: 'post',
        URL:"/user/profile",
        headers:
        {
          token:localStorage.getItem("token"),
        },
        data:{
          id:localStorage.getItem("id")
        }
      }).then((response)=>{
        store.commit("Username",response.data.data.firstName+ " " +response.data.data.lastName);
        store.commit("Phone",response.data.data.mobileNumber);
      })
    }
  },
  methods:
  {
    
  }
 
};
</script>
