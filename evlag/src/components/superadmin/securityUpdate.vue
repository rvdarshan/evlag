<template>
    <div>
        <v-layout wrap justify-center>
                        <v-flex lg12>
                            <h2 style="font-family:typ;font-size:40px; text-align: center;margin-top:2%"><u>SECURITY PROFILE UPDATE</u></h2>
                        </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg5>
                        
                                <v-text-field
                                    label="NAME"
                                    outlined
                                    dense 
                                    style="margin-top: 15%"
                                    v-model="name"
                                    :rules="nameRules"
                                    required
                                ></v-text-field>
                                   
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg5>
                        
                                <v-text-field
                                    label="EMAIL"
                                    outlined
                                    dense 
                                    style="margin-top: 3%"
                                    v-model="email"
                                    :rules="emailRules"
                                    required
                                ></v-text-field>
                                   
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg5>
                        
                                <v-text-field
                                    label="PHONE"
                                    outlined
                                    dense 
                                    style="margin-top: 3%"
                                    
                                ></v-text-field>
                                   
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center style="margin-top: 5%">
                        <v-flex lg6>
                            <v-row
                                align="center"
                                justify="space-around"
                            >
                                <v-btn
                                tile
                                color="success"
                                >
                                <v-icon left>
                                    mdi-pencil
                                </v-icon>
                                UPDATE
                                </v-btn>
                            </v-row>
                        </v-flex>
                </v-layout>
    </div>
</template>
<script>
export default {
    data: ()=>({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }
    )
}
</script>