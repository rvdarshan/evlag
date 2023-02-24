<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex style="background-color:#545454" lg12 scroll>
                 <v-img src="" height="100vh">
                    
                 </v-img>
                
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
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
    }
}
</script>