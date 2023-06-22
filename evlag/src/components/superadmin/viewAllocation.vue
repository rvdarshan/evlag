<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                
                <v-layout wrap justify-center>
                    <v-flex lg12>
                        <v-card>
                            <v-card-title>SECURITY POSTINGS
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

            </v-flex>
        </v-layout>
         <v-snackbar v-model="snackbar" :timeout="timeout" width="300">
                    {{ text }}
                  </v-snackbar>
                <v-dialog v-model="myDialog" max-width="450">
                <v-card>
                  <v-card-title class="text-h5"> Are you sure to delete this allocation? </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="myDialog = false;">Cancel</v-btn>
                    <v-btn
                      color="red darken-1"
                      text
                      @click="removeData()"
                      >Delete</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
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
            dialog: false,
            timeout:1000,
            snackbar: false,
            text: "",
            myDialog:false,
            ServerError: false,
            myItem : null,
            isLoading: false,
            headers: [
                {
                    text:'DATE',
                    align:'start',
                    sortable:true,
                    value:'allotedDate',

                },
                {
                    text:'SECURITY ID',
                    sortable:false,
                    value:'securityInCharge.securityId'
                },
                 {
                    text:'NAME',
                    sortable:false,
                    value:'securityInCharge.securityName'
                },
               
                {
                    text:'LOCATION',
                    sortable:false,
                    value:'AllotedLocation'
                },
                
                {
                    text:'WORKING TIME',
                    sortable:false,
                    value:'workingTime'
                },
                
                
                {
                    text:'STATUS',
                    sortable:false,
                    value:'status'
                },
                {
                    text: "ACTION", value:'_id', sortable: false, width: "20%" 
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
                url:this.baseURL+'/view/all/allocationsss',
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
        url: "/allocation/delete",
        headers: {
          token:localStorage.getItem("Token"),
        },
         data: {
          id: this.myItem
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