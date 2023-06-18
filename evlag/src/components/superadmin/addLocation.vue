<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                <v-img src="../../assets/images/map2.jpg" height="100vh" >
                    <v-card elevation="10" height="60vh" width="100vh" color="rgba(101, 101, 101, 0.85)" style="margin-top:12%;margin-left:18%">
                        <span style="margin-top:3%;margin-left:31%;font-size:22px"><b>ADD NEW LOCATION DETAILS</b></span>
                        <v-layout wrap justify-center>
                            <v-flex lg4>
                                <v-text-field
                                    label="LATITUDE"
                                    outlined
                                    dense 
                                    filled
                                    style="margin-top: 10%; margin-right:5%"
                                    v-model="latitude"
                                ></v-text-field>
                            </v-flex>
                            <v-flex lg4>
                                <v-text-field
                                    label="LONGITUDE"
                                    outlined
                                    dense 
                                    filled
                                    style="margin-top: 10%;margin-left:5%"
                                    v-model="longitude"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap justify-center>
                            <v-flex lg8>
                                <v-text-field
                                    label="LOCATION NAME"
                                    outlined
                                    filled
                                    dense
                                    style="margin-top: 2%;"
                                    v-model="locationname"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap justify-center>
                            <v-flex lg8>
                                <v-textarea
                                    outlined
                                    filled
                                    label="LOCATION DESCRIPTION"
                                    dense
                                    v-model="locationdescription"
                                ></v-textarea>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap justify-center>
                            <v-flex lg8 style="margin-left:39%">
                                <v-btn
                                    class="ma-2"
                                    
                                    color="success"
                                    
                                    @click="create();"
                                >CREATE LOCATION</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-img>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            latitude:'',
            longitude:'',
            locationname:'',
            locationdescription:'',
        }
    },
    methods:{
        create(){
            axios({
                method:'post',
                url:'/superAdminn/addLocation',
                headers:{
                    token: localStorage.getItem('Token')
                },
                data:{
                    Location:this.locationname,
                    Description:this.locationdescription,
                    lat:this.latitude,
                    long:this.longitude,
                }
            }).then((response)=>{
                if(response.data.status)
                {
                    console.log("Location Added")
                    this.$router.push('./dashboard')
                }
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
}
</script>