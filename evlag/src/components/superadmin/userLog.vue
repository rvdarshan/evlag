<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                
                <v-layout wrap justify-center>
                    <v-flex lg12>
                        <v-card>
                            <v-card-title>VISITOR'S LOG
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
                                header-fixed
                                height="700px"
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
                    text:'DATE',
                    align:'start',
                    sortable:true,

                },
                 {
                    text:'NAME',
                    sortable:false,
                },
                {
                    text:'PHONE',
                    sortable:false,
                },
                {
                    text:'EMAIL',
                    sortable:false,
                },
                {
                    text:'VEHICLE NO',
                    sortable:false,
                },
                {
                    text:'IN-TIME',
                    sortable:false,
                },
                {
                    text:'OUT-TIME',
                    sortable:false,
                },

            ]
        }
    }
}
</script>