<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                <v-img src="../../assets/images/download.png" fixed height="50vh">
                    <v-layout wrap justify-center>
                        <v-flex lg12>
                            <router-link :to="'/login'" style="text-decoration:none">
                            <v-btn
                                color="black"
                                elevation="18"
                                style="margin-left:93.5%;margin-top:1%"
                            ><p style="color:white;text-align:center;margin-top:15%;font-size:15px">LOGIN</p></v-btn>
                            </router-link>
                        </v-flex>
                        <v-flex lg12>
                            <v-img class="my-element" src="../../assets/images/logo-no-background.png" width="15%" style="margin-left:42.8%; margin-top:8.5%"></v-img>
                        </v-flex>
                        
                    </v-layout>
                </v-img>
            </v-flex>
        </v-layout>
        
        <v-layout wrap justify-center style="">
            <v-flex lg12>
                <v-img src="../../assets/images/map.jpg" fixed height="25vh">
                <router-link :to="'/navigation'" style="text-decoration:none">
                <v-btn
                    color="black"
                    elevation="18"
                    style="margin-left:46%;margin-top:5%"
                ><p style="color:white;text-align:center;margin-top:15%;">NAVIGATION</p></v-btn>
                </router-link>
                </v-img>
            </v-flex>
           
            
        </v-layout>

        <v-layout wrap justify-center>
            <v-flex lg5>
                <v-layout wrap justify-center>
                    <v-flex lg12>
                        <p style="text-align:center;font-size:28px;margin-top:14%"><b>CAMPUS AND LOCATION</b></p>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg10>
                        <p style="margin-top:4%;text-align:center">The College is situated at Koovappally near Kanjirappally alongside the Kottayam-Erumeli-Sabarimala state highway. The Campus sprawling over 63 acres of scenic landscape at the foothills of the Western Ghats, has been laid out to create a unique learning environment. Lawns and wide vistas of luxuriant luscious green provide an enchanting ambience.</p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex lg7>
                <v-img src="../../assets/images/slide02.jpg" fixed height="50vh"></v-img>
            </v-flex>
        </v-layout>

        <v-layout wrap justify-center>
            <v-flex lg12>

            </v-flex>
        </v-layout>
    </div>
</template>