<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex style="background-color:#545454" lg12 scroll>
                <v-img src="" height="100vh">
                    
                    <v-card elevation="10" width="60%" height="77%" style="margin-left:20%; margin-top:5%">
                        <v-layout wrap justify-center>
                            <v-flex lg4>
                                <v-card elevation="0" height="77vh" color="#424242">
                                    <v-layout wrap justify-center>
                                        <v-flex lg12>
                                            <v-img src="../../assets/images/logo.png" width="75%" style="margin-top:15%;margin-left:13%;"></v-img>
                                        </v-flex>
                                        <v-flex lg12>
                                            <p class="text-h6" style="margin-left:35%;margin-top:35%; color:white">PROFILE</p>
                                        </v-flex>
                                    </v-layout>
                                </v-card>
                            </v-flex>
                            <v-flex lg8>
                                <v-layout wrap justify-center>
                                    <v-flex lg6>
                                        <p style="text-align:center">NAME</p>
                                    </v-flex>
                                    <v-flex lg6>
                                        <p style="text-align:center">{{userData.name}}</p>
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap justify-center>
                                    <v-flex lg6>
                                        <p style="text-align:center">ROLE</p>
                                    </v-flex>
                                    <v-flex lg6>
                                        <p style="text-align:center">{{userData.role}}</p>
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap justify-center>
                                    <v-flex lg6>
                                        <p style="text-align:center">EMAIL</p>
                                    </v-flex>
                                    <v-flex lg6>
                                        <p style="text-align:center">{{userData.email}}</p>
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap justify-center>
                                    <v-flex lg6>
                                        <p style="text-align:center">PHONE NUMBER</p>
                                    </v-flex>
                                    <v-flex lg6>
                                        <p style="text-align:center">{{userData.phoneNumber}}</p>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <!-- <v-layout wrap justify-center>
                        <v-flex lg6>
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="nju" style="margin-left:41.5%">NAME</p>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="head">{{userData.name}}</p>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex lg6>
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="nju" style="margin-left:45%">PHONE</p>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="head" style="margin-left: 38%">{{userData.phoneNumber}}</p>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap justify-center>
                        <v-flex lg12 >
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="njh" style="margin-left:47%">EMAIL</p>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="head" style="margin-left:35%">{{userData.email}}</p>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout> -->
                    <!-- <v-layout wrap justify-center>
                        <v-flex lg12 style="margin-top:2%">
                              <v-row
                                align="center"
                                justify="space-around"
                            >
                                <v-btn
                                tile
                                color="success"
                                 @click="pushto(userData)"
                                >
                                <v-icon left>
                                    mdi-pencil
                                </v-icon>
                                UPDATE PASSWORD
                                </v-btn>
                            </v-row>
                        </v-flex>
                    </v-layout> -->
                </v-img>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            userData:[],
        }
    },
    mounted()
    {
        this.getData();
    },
    methods:{
        getData()
        {
            axios({
                method:'get',
                url: this.baseURL+'/superAdmin/viewprofile',
                headers:{
                    token:localStorage.getItem("Token")
                },
                data:{
                    id:localStorage.getItem("ID")
                }
            }).then((response)=>{
                if(response.data.status)
                {
                    this.userData=response.data.data;
                }
                else{
                    alert("Something is Wrong")
                }
            }).catch((error)=>{
                console.log(error)
            })
        },
          pushto(item){
            this.$router.push("/updatepassword?id=" + item._id);
        }
    }
}
</script>


