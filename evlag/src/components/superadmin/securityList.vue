<template>
  <div>
    <!-- <vue-element-loading
      :active="isLoading"
      is-full-screen
      color="grey"
      spinner="bar-fade-scale"
    />
    <ServerError v-if="ServerError" /> -->
    <v-layout wrap justify-center >
      <v-flex xs12 text-center>
        <v-card>
          <v-card-title>
            SECURITY LIST
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="SEARCH SECURITY NAME"
              single-line
              hide-details
              outlined
              dense
            >
            </v-text-field>            
          </v-card-title>
                <v-data-table :headers="headers" :items="userdata" :search="search" fixed-header>
                    <template v-slot:[`item._id`]="{ item }">
                    <v-btn icon color="red" @click="myDialog = true; myItem = item._id;">
                        <v-icon> mdi-delete </v-icon>
                    </v-btn>
                
                    </template>
                </v-data-table>
                </v-card>
            </v-flex>
            </v-layout>
                <v-snackbar v-model="snackbar" :timeout="timeout" width="300">
                    {{ text }}
                  </v-snackbar>
                <v-dialog v-model="myDialog" max-width="450">
                <v-card>
                  <v-card-title class="text-h5"> Are you sure to delete this account? </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="myDialog = false;">Cancel</v-btn>
                    <v-btn
                      color="red darken-1"
                      text
                      @click="                      
                        removeData();
                      "
                      >Delete</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            myItem : null,
            isLoading: false,
            dialog: false,
            timeout:1000,
            snackbar: false,
            text: "",
            myDialog:false,
            search: "",
            ServerError: false,
            userdata:[],
            headers: [
                {
                    text:'SECURITY NAME',
                    align:'start',
                    sortable:false,
                    value:'securityName'

                },
                {
                    text:'SECURITY ID', value:'securityId'
                },
                {
                    text:'EMAIL', value:'securityEmail',
                },
                {
                    text:'PHONE',value:'securityPhoneNumber'
                },
                {
                    text: "Actions", value:'_id', sortable: false, width: "20%" 
                },

            ]
        }
    },
    
    mounted(){
        this.getData();
    },
    methods:{
        getData()
        {
            axios({
                method:'get',
                url:this.baseURL+'/view/allsecurities',
                headers:{
                    token:localStorage.getItem("Token"),
                },
                

            }).then((response)=>{
                if(response.data.status)
                {
                    console.log("responded");
                    this.userdata=response.data.data;
                }
                else{
                    alert("Something went wrong")
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        removeData() {
      this.isLoading = true;
      axios({
        method: "post",
        url: "/security/delete",
        headers: {
          token:localStorage.getItem("Token"),
        },
         data: {
          id: this.myItem,
        },
      })
        .then((response) => {
            this.myDialog = false;
          this.isLoading = false;

          if (response.data.status) {
            this.snackbar = true;
            this.text = "Successfully Deleted";
            setTimeout(()=>this.getData(),1000); 
          } else {
            this.isLoading = false;
            this.snackbar = true;
            this.text = response.data.msg;
            console.log(response.data.msg);
          }
        })
        .catch((error) => {
          this.isLoading = false;
          this.ServerError = true;
          console.log(error);
        });
    },
        
        
    }
}
</script>