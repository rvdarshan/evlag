<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                <v-card elevation="0" width="180vh" height="100vh" style="background-color:grey">
                    <v-layout wrap justify-center>
                        <v-flex lg12>
                            <v-card-title>
            SECURITY ALLOCATION
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
                    <v-btn icon color="green" @click="myDialog = true; myItem = item._id;">
                        <v-icon> mdi-message-draw </v-icon>
                    </v-btn>
                
                    </template>
                        
                        
                </v-data-table>
                        </v-flex>
                    </v-layout>
                </v-card>
                
            </v-flex>
        </v-layout>
        <v-dialog v-model="myDialog" max-width="450">
                <v-card>
                  <v-card-title class="text-h5">ALLOCATION</v-card-title>
                  <v-card-actions>
                    <v-layout wrap justify-center>
                            <v-flex lg12>
                                <v-select
                                :items="items"
                                label="LOCATION"
                                v-model="location"
                                solo
                                ></v-select>
                            </v-flex>
                        </v-layout>
                  </v-card-actions>
                  <v-card-actions>
                    <v-layout wrap justify-center>
                            <v-flex lg12>
                                <v-select
                                :items="shifts"
                                label="WORKING SHIFT"
                                v-model="shift"
                                solo
                                ></v-select>
                            </v-flex>
                        </v-layout>
                  </v-card-actions>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="myDialog = false;">Cancel</v-btn>
                    <v-btn
                      color="green"
                      text
                      @click="allocate()"
                      >Confirm</v-btn
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
            location:"",
            shift:"",
            dialog: false,
            timeout:1000,
            snackbar: false,
            text: "",
            myDialog:false,
            search: "",
            ServerError: false,
            items: ['FRONT COLLEGE GATE','FRONT BOYS HOSTEL','GIANA BOYS HOSTEL','FRONT GIRLS HOSTEL'],
            shifts: ['DAY','NIGHT'],
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
        allocate()
        {
            axios({
                method:'post',
                url:this.baseURL+'/superAdmin/securityAllocate',
                headers: {
                    token:localStorage.getItem("Token"),
                },
                data:{
                    securityInCharge:this.myItem,
                    AllotedLocation:this.location,
                    workingTime:this.shift,
                }
            }).then((response)=>{
                if(response.data.status)
                {
                    console.log("allocated");
                    this.$router.push('/securityallocation');
                }
                else{
            console.log(response.data.msg);
          }
        }
            )

        }
        
        
    }
}
</script>