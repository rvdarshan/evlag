<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                 <v-img src="../../assets/images/map1.jpg"  fixed height="100vh">
                    <v-card elevation="10" width="45%" height="50%" color="grey" style="opacity:.8;margin-top:10%;margin-left:28%">
                        <v-layout wrap justify-center>
                            <v-flex lg5 style="margin-top:18%">
                                <v-select
                                :items="items"
                                label="SELECT"
                                outlined
                                dense
                               
                                ></v-select>
                            </v-flex>
                        </v-layout>
                        <v-flex lg12 style="margin-top:2%">
                            <v-btn
                                color="black"
                                elevation="18"
                                style="margin-left:43%;margin-top:%"
                                @click="locatorButtonPressed"
                            ><p style="color:white;text-align:center;margin-top:15%;">SEARCH</p></v-btn>
                        </v-flex>
                    </v-card>
                 </v-img>
            </v-flex>
        </v-layout>
    </div>
</template>

  <script>
  export default {
    methods:{
        locatorButtonPressed(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(position => {
                    console.log(position.cords.latitude);
                    console.log(position.coords.longitude);
                },
                error=>{
                    console.log(error.message)
                }
                );
            }
            else{
                console.log("Your browser does not support geolocation API")
            }
        }
    }
  }
  </script>