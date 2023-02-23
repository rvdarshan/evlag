<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                <v-img src="../../assets/images/16680.jpg" style="height: 100vh">
                    <v-layout wrap justify-center>
                        <v-flex lg3>
                            <v-card elevation="15" color="white" style="margin-top: 54%">
                                <v-layout wrap justify-center>
                                    <v-flex lg8 pa-2>
                                        <v-img src="../../assets/images/logo.png"></v-img>
                                    </v-flex>
                                </v-layout>
                                <v-form refs="file">
                                    <v-layout wrap justify-center>
                                        <v-flex lg10 px-3>
                                            <v-text-field
                                                v-model="email"
                                                label="email"
                                                :rules="[rules.required]"
                                                outlined
                                               >
                                                </v-text-field>
                                        </v-flex>
                                        <v-flex lg10 px-3>
                                            <v-text-field
                                            v-model="password"
                                            prepend-inner-icon="mdi-lock"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :rules="[rules.required, rules.min]"
                                            :type="show1 ? 'text' : 'password'"
                                            name="input-10-1"
                                            label="Password"
                                            @click:append="show1 = !show1"
                                            outlined
                                            
                                            ></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout wrap justify-center text-center>
                                        <v-flex lg12 py-4>
                                            <v-btn
                                                        class="ma-2"
                                                        outlined
                                                        color="black"
                                                        @click="test()"
                                                        >
                                                        Submit
                                                        </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-form>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-img>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
import axios from 'axios'
import store from '../../store'

export default {
    data()
  {
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
 methods:
  {
    
    test(){

    //   if(this.$refs.file.validate())
    //   {
        this.apploading=true,
        axios({
          method:'post',
          url:this.baseURL+'/superAdmin/login',
          data:{
            email: this.email,
            password: this.password,
          },
        }).then((response)=>{
          if(response.data.status)
          {
              
            this.apploading=false,
            localStorage.setItem("ID",response.data.data._id);
            localStorage.setItem("Token",response.data.token);
            store.commit('email',response.data.data.email);
            store.commit("phoneNumber",response.data.data.phoneNumber);
            store.commit("name",response.data.data.name);
            
            
                this.$router.push('/dashboard');
            
            
          }
          else{
            alert("response data msg");
          }
        })
        .catch((error)=>{
        //   this.apploading=false;
        //   this.ServerError=true;
        //   this.Pagenotfound=true;
          console.log(error);
        })
      
    //   }
    }

  }
  
}
</script>