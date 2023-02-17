<template>
  <v-app>
    

    <v-main>
      <appBar/>
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script>

import appBar from './components/basic/appBar.vue'
export default {
  name: 'App',

  components: {
    appBar,
  },

  data: () => ({
    //
  }),
};
</script>
