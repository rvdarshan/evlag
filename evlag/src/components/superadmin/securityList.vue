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
                                :items="securitydata"
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
export default {
    data(){
        return{
            search:'',
            securitydata:[],
            headers: [
                {
                    text:'SECURITY NAME',
                    align:'start',
                    sortable:false,

                },
                {
                    text:'SECURITY ID',
                },
                {
                    text:'EMAIL',
                },
                {
                    text:'PHONE'
                },

            ]
        }
    }
}
</script>