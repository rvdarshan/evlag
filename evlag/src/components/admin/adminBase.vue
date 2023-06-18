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
                            <v-navigation-drawer background-color="grey-darken-3" permanent fixed style="margin-top: 4.2%">
                            <v-list-item >
                                <v-list-item-content>
                                <v-list-item-title class="text-h6">
                                    <p style="text-align:center">EVLAG</p>
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    <p style="text-align:center">ADMIN</p>
                                </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider></v-divider>
                            <v-tabs 
                                vertical slider-color="white" grow v-model="active_tab" >
                                
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
                                <v-tab background-color="grey-darken-3" >
                                <v-list-item-icon>
                                    <v-icon left>{{ item.icon }}</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item-content>
                                 </v-tab>
                                </v-list-item>
                                </router-link>
                               <v-divider style="margin-bottom:-5%"></v-divider>
                                
                            </v-list>
                            <v-divider ></v-divider>
                            </v-tabs>
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
          { title: 'DASHBOARD', icon: 'mdi-view-dashboard', link:'admindash' }, 
          { title: 'APPOINTMENTS', icon: 'mdi-human-male-board-poll', link:'appointment'},
          { title: 'VISITOR LOG', icon:'mdi-book-open', link:'loguser'},   
          
        ],
        
      }
    },
    
  }
</script>