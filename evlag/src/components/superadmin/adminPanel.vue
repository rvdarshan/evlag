<template>
    <div>
        <v-layout wrap justify-center style="height: 100vh">
            <v-flex lg12>
                <v-layout wrap justify-center>
                    <v-flex lg2>
                        <!-- <v-card
                            height="100vh"
                            width="256"
                            class="mx-auto"
                        > -->
                            <v-navigation-drawer permanent fixed>
                            <v-list-item >
                                <v-list-item-content>
                                <v-list-item-title class="text-h6">
                                    <p class="nu">EVLAG</p>
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    <p>Super Admin</p>
                                </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider></v-divider>

                            <v-list
                                dense
                                nav
                            >
                                <v-list-item
                                v-for="item in items"
                                :key="item.title"
                                link
                                >
                                <v-list-item-icon>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                                
                            </v-list>
                            </v-navigation-drawer>
                        <!-- </v-card> -->
                    </v-flex>
                    <v-flex lg10>
                        
                            <router-view></router-view>
                        
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Profile', icon: 'mdi-account' },
          { title: 'Security', icon:'mdi-security' },
          { title: 'Log', icon:'mdi-book-open' },
        ],
        right: null,
      }
    },
  }
</script>