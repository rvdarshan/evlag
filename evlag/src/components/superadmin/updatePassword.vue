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
                                            <v-img src="../../assets/images/logo.png" width="75%" style="margin-top:65%;margin-left:13%;"></v-img>
                                        </v-flex>
                                        
                                    </v-layout>
                                    
                                </v-card>
                            </v-flex>
                            <v-flex lg8>
                                <v-layout wrap justify-center>
                                    <v-flex lg8>
                                        
                                                <v-text-field
                                                    label="EMAIL"
                                                    outlined
                                                    dense 
                                                    style="margin-top: 65%"
                                                    v-model="email"
                                                    :rules="emailRules"
                                                    required
                                                ></v-text-field>
                                                
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap justify-center>
                                    <v-flex lg8>
                                        <v-text-field
                                                            v-model="password"
                                                            prepend-inner-icon="mdi-lock"
                                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                            :rules="[rules.required, rules.min]"
                                                            :type="show1 ? 'text' : 'password'"
                                                            name="input-10-1"
                                                            label="NEW PASSWORD"
                                                            @click:append="show1 = !show1"
                                                            outlined
                                                            dense
                                                            style="margin-top: 3%"  
                                                        
                                                            ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout wrap justify-center>
                                    <v-flex lg5 >
                                        <v-btn
                                            class="ma-2"
                                            align="center"
                                            color="success"
                                            @click="change()"
                                        >CHANGE PASSWORD</v-btn>
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
<script>
import axios from 'axios';
export default {
    data(){
        return{
        email: '',
      password: '',
      show1: 'false',
      show2: 'true',
      show3: 'false',
      show4: 'false',
      ServerError:false,
      Pagenotfound:false,
      apploading:false,
      rules:{
        required: value => !!value || 'Required',
        min: v => v.length >= 3 || 'Min 5 characters',
      },
        }
    },
    methods:{
        change()
        {
            // if(this.$refs.file.validate())
            // {
            axios({
                method:'post',
                url:this.baseURL+'/superAdmin/changepassword',
                headers:{
                    token: localStorage.getItem('Token')                   
                },
                data:{
                    email:this.email,
                    password:this.password
                }
            }).then((response)=>{
                if(response.data.status)
                { 
                    console.log("Created")
                    this.$router.push('/dashboard')
                }
            }).catch((error)=>{
                console.log(error);
            })
            
        },
    }
}
</script>