<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex style="background-color:#545454"  scroll lg12>
                <v-img src="" height="100vh">
                    <v-card elevation="10" width="60%" height="77%" style="margin-left:20%; margin-top:6%">
                        <v-layout wrap justify-center>
                            <v-flex lg4>
                                <v-card elevation="0" height="77vh" color="#424242">
                                    <v-layout wrap justify-center>
                                        <v-flex lg12>
                                            <v-img src="../../assets/images/logo.png" width="75%" style="margin-top:65%;margin-left:13%;"></v-img>
                                        </v-flex>
                                        
                                    </v-layout>
                                    
                                </v-card>
                            </v-flex>
                            <v-flex lg8>
                                <v-layout wrap justify-center>
                    <v-flex lg8>
                        
                                <v-text-field
                                    label="NAME"
                                    outlined
                                    dense 
                                    style="margin-top: 20%"
                                    v-model="name"
                                    :rules="nameRules"
                                    required
                                ></v-text-field>
                                   
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg8>
                        
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
                    <v-flex lg8>
                        
                                <v-text-field
                                    label="PHONE"
                                    outlined
                                    dense 
                                    style="margin-top: 3%"
                                    v-model="phoneNumber"
                                ></v-text-field>
                                   
                    </v-flex>
                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-img>
            </v-flex>
        </v-layout>
    </div>
</template>