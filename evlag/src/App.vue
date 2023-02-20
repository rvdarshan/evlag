<template>
<div>
  <v-app>
    <v-main>
      
        <v-layout wrap>
          <v-flex xs12><navBar/></v-flex>
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
export default {
  name: 'App',

  components: {
    navBar,
  },

  data: () => ({
    //
  }),
};
</script>
