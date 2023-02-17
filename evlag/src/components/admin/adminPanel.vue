<template>
    <div>
      <v-layout wrap style="height: 100vh; background-color: #BDBDBD;">
        <v-flex lg2 xs2>
          <template>
            <v-card elevation="0" class="mx-auto" max-width="500" max-height="600">
              <v-toolbar color="white"  >
                
  
                <v-toolbar-title style="margin-left:32%">Super Admin</v-toolbar-title>
  
                <v-spacer></v-spacer>
  
                
              </v-toolbar>
  
              <v-list style=" background-color: #BDBDBD;">
                <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action"
                  no-action >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title" style="font-size:20px"></v-list-item-title>
                    </v-list-item-content>
                  </template>
  
                  <v-list-item v-for="child in item.items" :key="child.title">
                    <v-list-item-content>
                      <router-link :to="child.link" style="text-decoration:none;color:black;">
                      <v-list-item-title v-text="child.title" style="font-size:20px"></v-list-item-title>
                      </router-link>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
              
             
            </v-card>
          </template>
        </v-flex>
        <v-flex xs10 lg10 px-1>
          <v-card elevation="10" style="height: 100vh;">
  
            <router-view></router-view>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </template>
  
  
  
  
  <script>
  export default {
    data: () => ({
      items: [
        {
          action: 'mdi-view-dashboard',
          items: [{ title: 'Dashboard',link: 'dashBoard' },
                  {title:'Profile',link: 'profile'}],
          title: 'Dashboard',
        },
        {
          action: 'mdi-account',
          active: true,
          items: [
            { title: 'Registration',link: 'registration' },
            { title: 'View Employee',link: 'viewEmployee' },
            
            
          ],
          title: 'Employee Management',
        },
        
        
      ],
    }),
      
  }
  </script>
  