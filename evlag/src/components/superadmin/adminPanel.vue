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
                            <v-navigation-drawer permanent fixed style="margin-top: 4.2%">
                            <v-list-item >
                                <v-list-item-content>
                                <v-list-item-title class="text-h6">
                                    <p style="margin-left:35%">EVLAG</p>
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    <p style="margin-left:28%">SUPER ADMIN</p>
                                </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider></v-divider>
                            
                            <v-list
                                dense
                                nav
                                v-for="item in items"
                                :key="item.title"
                                link
                            >
                            <router-link :to="item.link" style="text-decoration:none;color:black;">
                                <v-list-item
                                
                                >
                                
                                <v-list-item-icon>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item-content>
                                
                                </v-list-item>
                                </router-link>
                                <v-divider></v-divider>
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
          { title: 'DASHBOARD', icon: 'mdi-view-dashboard', link:'dashboard' },
          { title: 'PROFILE', icon: 'mdi-account', link:'profilesuper' },
          { title: 'SECURITY', icon:'mdi-security', link:'securitymanagement' },
          { title: 'LOG', icon:'mdi-book-open', link:'userlog' },
        ],
        
      }
    },
    
  }
</script>