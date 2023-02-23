<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                <v-layout wrap justify-center>
                        <v-flex lg12>
                            <h2 style="font-family:typ;font-size:40px; text-align: center;margin-top:2%"><u>SECURITY LIST</u></h2>
                        </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg12>
                        <v-card>
                            <v-card-title>SECURITY
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="search"
                                    single-line
                                    hide-details
                                    outlined
                                    dense
                                ></v-text-field>
                                <v-spacer></v-spacer>
                            </v-card-title>
                            <v-data-table
                                :headers="headers"
                                :items="userdata"
                                :search="search"
                            ></v-data-table>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            search:'',
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
                params:{
                    id:localStorage.getItem("ID"),
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
        
    }
}
</script>

