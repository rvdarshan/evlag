<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                <v-layout wrap justify-center>
                        <v-flex lg12>
                            <h2 style="font-family:typ;font-size:40px; text-align: center;margin-top:2%"><u>SECURITY REGISTRATION</u></h2>
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
                <v-layout wrap justify-center>
                    <v-flex lg5>
                        <v-text-field
                                            v-model="password"
                                            prepend-inner-icon="mdi-lock"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :rules="[rules.required, rules.min]"
                                            :type="show1 ? 'text' : 'password'"
                                            name="input-10-1"
                                            label="PASSWORD"
                                            @click:append="show1 = !show1"
                                            outlined
                                            dense
                                            style="margin-top: 3%"  
                                            @keyup.enter="test()"
                                            ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg5 style="margin-left:27%; margin-top:5%">
                        <v-btn
                            class="ma-2"
                            
                            color="success"
      
                         >CREATE ACCOUNT</v-btn>
                    </v-flex>
                </v-layout>
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
    )
}
</script>