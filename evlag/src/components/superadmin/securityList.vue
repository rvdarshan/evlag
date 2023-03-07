<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12 style="background-color:#545454"  scroll>
                <v-layout wrap justify-center>
                        <v-flex lg8>
                            
                        </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg12>
                        <v-card>
                            <v-card-title>SECURITY LIST
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="SEARCH SECURITY NAME"
                                    single-line
                                    hide-details
                                    outlined
                                    dense
                                ></v-text-field>
                                <v-spacer></v-spacer>
                            </v-card-title>
                            <v-data-table
                            fixed-header
                            height="700px"
                                :headers="headers"
                                :items="userdata"
                                :search="search"
                            >
                                <template v-slot:top>
                                    <v-toolbar
                                        flat
                                    >
                                       
                                        <v-dialog v-model="dialogDelete" max-width="500px">
                                        <v-card>
                                            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                            <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                            <v-spacer></v-spacer>
                                            </v-card-actions>
                                        </v-card>
                                        </v-dialog>
                                    </v-toolbar>
                                    </template>
                                    <template>
                                    <!-- <v-icon
                                        small
                                        class="mr-2"
                                        @click="editItem(item)"
                                    >
                                        mdi-pencil
                                    </v-icon> -->
                                    <v-icon
                                        small
                                        @click="deleteItem(item)"
                                    >
                                        mdi-delete
                                    </v-icon>
                                    </template>
                            </v-data-table>
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
            dialog: false,
            dialogDelete: false,
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
                    text:'ACTION',value: 'actions',sortable: false 
                },

            ]
        }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
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
        deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
        
    }
}
</script>

