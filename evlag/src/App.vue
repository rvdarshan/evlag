<template>
  <v-app>
    

    <v-main>
    <login/>
     <router-view>

    </router-view>
    </v-main>
  </v-app>
</template>

<script>
// import axios from 'axios';
// import store from './store';
import login from './components/superAdmin/loginSuper.vue'


export default {
  name: 'App',

  components: {
    login,
  },

  data: () => ({
    //
  }),
};
</script>
