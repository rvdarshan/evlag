<template>
    <div>
        <ServerError v-if="ServerError"/>
    <Pagenotfound v-if="Pagenotfound"/>
    <v-img src="../../assets/images/3348673.jpg" style="height: 100vh">
        <v-layout wrap justify-center>
            <v-flex lg12 >
                <v-card elevation="4" height="60px">
                    <p style="font-size:40px;color: black;margin-left: 2%;" align="center">PROFILE</p>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout wrap justify-center>
            <v-flex lg12 style="margin-top:12%">
                <v-layout wrap justify-center>
                    <v-flex lg3>
                        <p class="head" ><b>NAME: </b></p>
                        
                    </v-flex>
                    <v-flex lg3>
                        <p class="tok" >ACHAL</p>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg3>
                        <p class="head" ><b>E-MAIL: </b></p>
                        
                    </v-flex>
                    <v-flex lg3>
                       <p class="tok" >domanachal@gmail.com</p>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg3>
                        <p class="head" ><b>PHONE</b></p>
                        
                    </v-flex>
                    <v-flex lg3>
                        <p class="tok" >7896542589</p>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-img>
    </div>
</template>