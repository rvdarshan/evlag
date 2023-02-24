<template>
    <div>
        
    <v-app-bar
      app
      color="grey-darken-2"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../../assets/images/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../../assets/images/logo-no-background.png"
          width="100"
          style="margin-left:5%"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        @click="logout()"
        link
      >
        <span class="mr-2">Sign Out</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    </div>
</template>

<script>
import store from '../../store'
import axios from 'axios';
export default {
  
  computed:
  {
    em()
    {
      return store.state.email
    },
    user()
    {
      return store.state.name
    },
    phone()
    {
      return store.state.phoneNumber
    }
  },
  methods:
  {
    logout()
    {
      axios({
      method: "get",
      url: this.baseURL+ '/superAdmin/logout',
      headers:{
          token: localStorage.getItem('Token')                   
      },
       params:{
          id:this.$route.query.id,
       }
      
    }).then((response)=>{
      if(response.data.status)
      {
        
        localStorage.removeItem("Token");
        localStorage.removeItem("ID");
        this.$router.push('/');
      }
    })
    }
  }
}
</script>