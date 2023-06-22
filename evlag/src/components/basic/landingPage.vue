<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex xs12>
                <v-img src="../../assets/images/gwendal-cottin-j85t8FTaCcE-unsplash.jpg">

                    <v-layout wrap justify-center>
                        <v-flex xs12 pt-10 text-center>
                            <v-img class="my-element" src="../../assets/images/logo-no-background.png" width="20%"></v-img>
                        </v-flex>
                    </v-layout>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    <v-layout wrap justify-center>
                        <v-flex xs12 text-center>
                            <router-link :to="'/login'" style="text-decoration:none">
                          <v-btn
                              color="orange"
                              elevation="18"
                              width="16%"
                            
                          ><p style="color:black;text-align:center;margin-top: 8%;" >LOGIN</p></v-btn>
                          </router-link>
                        </v-flex>
                    </v-layout>

                    <br/>
                    <v-layout wrap justify-center>
                        <v-flex xs12 text-center>
                            <router-link :to="'/nav'" style="text-decoration:none">
                          <v-btn
                              color="orange"
                              elevation="18"
                              width="16%"
                            
                          ><p style="color:black;text-align:center;margin-top: 8%;" >NAVIGATION</p></v-btn>
                          </router-link>
                        </v-flex>
                    </v-layout>

                </v-img>
            </v-flex>
        </v-layout>
    </div>
</template>