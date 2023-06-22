<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                
                <v-layout wrap justify-center>
                    <v-flex lg12>
                        <v-card>
                            <v-card-title>APPOINTMENTS
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
                                <!-- <v-btn color="black" @click="saveAsPDF()"><p style="margin-top:30%;color:white">PRINT</p></v-btn> -->
                            </v-card-title>
                            <v-data-table
                                header-fixed
                                height="700px"
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
import html2pdf from 'html2pdf.js';

export default {
    data(){
        return{
            search:'',
            userdata:[],
            headers: [
                {
                    text:'DATE',
                    align:'start',
                    sortable:true,
                    value:'visitedDate',

                },
                 {
                    text:'NAME',
                    sortable:false,
                    value:'visitorName'
                },
                {
                    text:'PHONE',
                    sortable:false,
                    value:'visitorPhoneNumber',
                }, 
               
                {
                    text:'IN-TIME',
                    sortable:false,
                    value:'enterTime'
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
                url:this.baseURL+'/view/allvisitors',
                headers:{
                    token:localStorage.getItem("Token"),
                },
                

            }).then((response)=>{
                if(response.data.status)
                {
                    console.log("responded");
                    if(response.data.data.purpose=="PRINCIPAL VISIT")
                    {
                        this.userdata=response.data.data;
                    }
                    
                }
                else{
                    alert("Something went wrong")
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        },
         saveAsPDF() {
            
                    const element = document.getElementById('_id'); // Replace 'content' with the ID of the element containing your webpage content

                    html2pdf()
                        .set({
                        margin: 1,
                        filename: 'webpage.pdf',
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { dpi: 192, letterRendering: true },
                        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
                        })
                        .from(element)
                        .save();
                    },
    },
}
</script>