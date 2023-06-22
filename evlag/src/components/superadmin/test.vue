<template>
  <div>
    <v-layout pl-lg-14 pl-xs-2 wrap fill-height>
      <v-snackbar v-model="snackbar" color="blue" right :timeout="timeout">
        <v-layout wrap>
          <v-flex text-left class="align-self-center">{{ msg }}</v-flex>
          <v-flex text-right>
            <v-btn small :ripple="false" text @click="snackbar = false">
              <v-icon style="color: white">mdi-close</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-snackbar>
      <v-flex xs12 lg8>
        <v-layout wrap>
          <v-flex
            pt-8
            pl-8
            pl-xs-3
            data-aos="slide-up"
            data-aos-ease="ease"
            data-aos-duration="1500"
            data-aos-delay="300"
            xs12
            class="d-flex align-end mb-6 bg-surface-variant"
          >
            <span
              style="
                font-family: homefontsub2;
                color: #37aee5;
                text-align: justify;
              "
              :style="
                $vuetify.breakpoint.name == 'xs'
                  ? {
                      'font-size': '30px',
                    }
                  : $vuetify.breakpoint.name == 'sm'
                  ? {
                      'font-size': '20px',
                    }
                  : $vuetify.breakpoint.name == 'md'
                  ? {
                      'font-size': '25px',
                    }
                  : {
                      'font-size': '40px',
                    }
              "
              >Contact Us
            </span>
          </v-flex>
          <v-flex
            xs12
            pl-8
            pb-4
            data-aos="slide-up"
            data-aos-ease="ease"
            data-aos-duration="1500"
            data-aos-delay="300"
            class="mainfont"
            style="font-size: 20px; font-weight: bold"
          >
            <span> {{ list.heading }} </span>
            <br />
            <br />
            <span v-html="list.msg" style="font-size: 17px; font-weight: bold">
             
            </span>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs4 pt-6 text-right class="hidden-sm-and-down">
        <v-avatar tile size="110px">
          <v-img contain src="../assets/Images/cupattern1.png"></v-img>
        </v-avatar>
      </v-flex>
    </v-layout>
    <v-layout fill-height class="grad" wrap>
      <v-snackbar v-model="snackbar" color="blue" right :timeout="timeout">
        <v-layout wrap>
          <v-flex text-left class="align-self-center">{{ msg }}</v-flex>
          <v-flex text-right>
            <v-btn small :ripple="false" text @click="snackbar = false">
              <v-icon style="color: white">mdi-close</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-snackbar>
      <vue-element-loading
        indeterminate
        :active="appLoading"
        :is-full-screen="true"
        background-color="#FFFFFF"
        color="#87ceeb"
        spinner="bar-fade-scale"
      />
      <v-flex xs12 text-left pt-4>
        <v-layout wrap>
          <v-flex
            data-aos="zoom-in-up"
            data-aos-ease="ease"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            <v-img
              :height="
                $vuetify.breakpoint.name == 'xs'
                  ? '160px'
                  : $vuetify.breakpoint.name == 'sm'
                  ? '300px'
                  : $vuetify.breakpoint.name == 'md'
                  ? '1000px'
                  : $vuetify.breakpoint.name == 'lg'
                  ? '300px'
                  : '300px'
              "
              :width="
                $vuetify.breakpoint.name == 'xs'
                  ? '960px'
                  : $vuetify.breakpoint.name == 'sm'
                  ? '1000px'
                  : $vuetify.breakpoint.name == 'md'
                  ? '1000px'
                  : $vuetify.breakpoint.name == 'lg'
                  ? '1800px'
                  : '2800px'
              "
              :src="mediaURLnew + list.image"
            >
            </v-img>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout justify-end wrap fill-height>
      <v-flex xs12 pt-10 text-center>
        <span
          style="font-family: homefontsub2; color: #37aee5; text-align: justify"
          :style="
            $vuetify.breakpoint.name == 'xs'
              ? {
                  'font-size': '30px',
                }
              : $vuetify.breakpoint.name == 'sm'
              ? {
                  'font-size': '20px',
                }
              : $vuetify.breakpoint.name == 'md'
              ? {
                  'font-size': '25px',
                }
              : {
                  'font-size': '30px',
                }
          "
          >Find us here!</span
        >
      </v-flex>
      <v-flex xs2 pb-3 class="hidden-sm-and-down" text-left align-self-end>
        <v-avatar tile size="110px">
          <v-img contain src="../assets/Images/cupattern1.png"></v-img>
        </v-avatar>
      </v-flex>
      <v-flex
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-delay="500"
        xs12
        pa-3
        pa="-lg-0"
        lg8
        text-center
      >
        <div id="map"></div>
      </v-flex>
      <v-flex xs2 text-right class="hidden-sm-and-down">
        <span>
          <v-avatar tile size="110px">
            <v-img
              contain
              src="../assets/Images/cupattern2png.png"
            ></v-img> </v-avatar
        ></span>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-center>
      <v-flex text-center lg9 pa-3 pa-lg-14>
        <strong>
          <span class="mainfont"
            >{{ list.additionalContent }}</span
          ></strong
        >
      </v-flex>
    </v-layout>

    <v-layout wrap justify-center>
      <v-flex
        xs12
        lg10
        style="box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.07)!important;"
      >
        <v-layout wrap justify-center>
          <v-flex
            xs12
            data-aos="slide-up"
            data-aos-ease="ease"
            data-aos-duration="1500"
            data-aos-delay="500"
            lg7
            pl-2
            text-right
            class="mainfont"
            style="font-weight: bold"
          >
            <v-card
              color="white"
              class="card-shadow pl-6 pb-4 pr-14"
              elevation="0"
            >
              <v-layout wrap>
                <v-flex xs12 pt-10 pl-3 text-left>
                  <span
                    >Tell us a bit about yourself, and we’ll get in touch as
                    soon as we can</span
                  >
                </v-flex>
                <v-flex xs6 pl-4 pr-4 pt-10 text-left>
                  <span>Name</span>
                  <v-text-field
                    color="blue"
                    placeholder="Enter Name"
                    regular
                    v-model="contact.name"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs6 pt-10 text-left>
                  <span>Location</span>

                  <v-text-field
                    color="blue"
                    placeholder="Location"
                    regular
                    type="text"
                    v-model="contact.location"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs6 pl-4 pr-4 pt-10 text-left>
                  <span>Phone Number</span>
                  <v-text-field
                    color="blue"
                    placeholder="Enter Phone "
                    regular
                    type="number"
                    :rules="phnoRules"
                    v-model="contact.phoneNo"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs6 pt-10 text-left>
                  <span>E-mail</span>
                  <v-text-field
                    color="blue"
                    :rules="emailRules"
                    placeholder="Enter Email"
                    regular
                    v-model="contact.email"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 pa-3 text-left>
                  <span>Message</span>
                  <v-textarea
                    auto-grow
                    regular
                    placeholder="Message"
                    color="blue"
                    rows="2"
                    v-model="contact.msg"
                    row-height="30"
                  ></v-textarea>
                </v-flex>
                <v-flex xs12 text-right pb-3>
                  <v-btn
                    dark
                    color="blue"
                    height="30px"
                    width="140px"
                    light
                    class="zoom-card"
                    :ripple="false"
                    depressed
                    @click="validateInput()"
                  >
                    <span style="font-color: white"> SUBMIT</span>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex
            xs12
            data-aos="slide-up"
            data-aos-ease="ease"
            data-aos-duration="1500"
            data-aos-delay="500"
            lg5
            style="background-color: #007cb6"
          >
            <v-layout wrap justify-end fill-height>
              <v-flex xs7 align-self-center>
                <v-layout class="mainfont" style="color: white" wrap>
                  <v-flex xs12 py-1>
                    <span style="
                font-family: mainfont;
                color: white;
                font-size: 20px;
               
              ">Contact Information</span>
                  </v-flex>
                  <v-flex xs12 py-1>
                    <v-layout wrap>
                      <v-flex xs2 pt-13>
                        <v-avatar size="30px" tile>
                          <v-img
                            contain
                            src="../assets/Images/cuicon1.png"
                          ></v-img>
                        </v-avatar>
                      </v-flex>
                      <v-flex xs10 pt-13 pl-4>
                        <span>{{ list.phoneNo }}</span>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12 py-1>
                    <v-layout wrap>
                      <v-flex xs2 pt-13>
                        <v-avatar size="30px" tile>
                          <v-img
                            contain
                            src="../assets/Images/cuicon5.png"
                          ></v-img>
                        </v-avatar>
                      </v-flex>
                      <v-flex xs10 pt-13 pl-4>
                        <span>{{ list.email }}</span>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12 py-2>
                    <v-layout>
                      <v-flex xs2 pt-13>
                        <v-avatar size="30px" tile>
                          <v-img
                            contain
                            src="../assets/Images/cuicon6.png"
                          ></v-img>
                        </v-avatar>
                      </v-flex>
                      <v-flex xs10 pt-13 pl-4>
                        <span>{{ list.address }}</span>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs3 align-self-center>
                <v-img contain src="../assets/Images/cupattern3.png"></v-img>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout wrap>
      <v-flex xs12 class="hidden-sm-and-down" text-right>
        <v-avatar tile size="110px">
          <v-img
            contain
            src="../assets/Images/cupattern1.png"
          ></v-img> </v-avatar
      ></v-flex>
    </v-layout>
  </div>
</template>
<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBpukNl1L1qGqEwad87A1-MkZj8H_bKDZM&libraries=visualization,drawing"></script>

<script>
import axios from "axios";
var marker;
export default {
  data() {
    return {
      msg: "",
      list: {},
      timeout: 5000,
      snackbar: false,
      appLoading: false,
      latt: null,
      lonn: null,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      roleRules: [(v) => !!v || "Role is required"],
      phnoRules: [
        (v) => !!v || "phone is required",
        (v) => (v && v.length <= 10) || "invalid number",
        (v) => (v && v.length >= 10) || "invalid number",
        (v) => /^\d{10}$/.test(v) || "phone number must be a number",
      ],

      contact: {
        name: null,
        location: null,
        email: null,
        phoneNo: null,
        msg: null,
      },
      map: "",
      mapData: {},
    };
  },
  mounted() {
    this.detailsView();
    // if(this.list.locaion)
    // {
    // this.initMap();
    // }
  },
  methods: {
    add() {
      this.appLoading = true;
      axios({
        method: "POST",
        headers: {
          siteId: "6436362a65dc48eef99acd34",
        },
        url: "/user/add/enquiry",
        data: {
          name: this.contact.name,
          email: this.contact.email,
          phoneNo: this.contact.phoneNo,
          msg: this.contact.msg,
          location: this.contact.location,
        },
      })
        .then((response) => {
          if (response.data.status) {
            this.msg = " message has been sent Successfully ";
            this.contact.phoneNo = null;
            this.contact.email = null;
            this.contact.name = null;
            this.contact.msg = null;
            this.contact.location = null;
            this.snackbar = true;
            this.appLoading = false;
            location.reload();
          } else {
            this.msg = response.data.msg;
            this.snackbar = true;
          }
        })
        .catch((err) => {
          this.appLoading = false;

          console.log(err);
        });
    },
    detailsView() {
      this.appLoading = true;
      axios({
        method: "GET",
        headers: {
          siteId: "6436362a65dc48eef99acd34",
        },
        url: "/user/countactus/view",
      })
        .then((response) => {
     
          this.list = response.data.data;
          this.latt = response.data.data.Coordinates[1];
          this.lonn = response.data.data.Coordinates[0];
          this.appLoading = false;
          this.initMap();
        })
        .catch((err) => {
          this.ServerError = true;
          console.log(err);
        });
    },

    validateInput() {
      if (!this.contact.name) {
        this.msg = "Please Provide name";
        this.snackbar = true;
        return;
      } else if (!this.contact.location) {
        this.msg = "Please Provide location";
        this.snackbar = true;
        return;
      } else if (!this.contact.phoneNo) {
        this.msg = "Please Provide phone number";
        this.snackbar = true;
        return;
      } else if (!this.contact.email) {
        this.msg = "Please Provide email";
        this.snackbar = true;
        return;
      } else if (!this.contact.msg) {
        this.msg = "Please Provide message";
        this.snackbar = true;
        return;
      } else {
        this.add();
      }
    },
    initMap() {
      var vm = this;
      var mapCanvas = document.getElementById("map");
      var mapOptions = {
        center: new google.maps.LatLng(this.latt, this.lonn),
        zoom: 10,

        mapTypeId: google.maps.MapTypeId.TERRAIN,
      };
      vm.map = new google.maps.Map(mapCanvas, mapOptions);
      var lat = this.latt;
      var lon = this.lonn;
      var latlngset = new google.maps.LatLng(lat, lon);

      marker = new google.maps.Marker({
        map: vm.map,
        position: latlngset,
      });
    },
  },
};
</script>
  <style scoped>
#map {
  height: 400px;
}
.test {
  text-align: justify;
}
.grad {
  background-image: linear-gradient(to right, #fbfbfb, #fbfbfb);
}

body {
  font-family: "Lato", sans-serif;
  background: #353535;
  color: #fff;
}
.jumbotron h1 {
  color: #353535;
}
footer {
  margin-bottom: 0 !important;
  margin-top: 80px;
}
footer p {
  margin: 0;
  padding: 0;
}
span.icon {
  margin: 0 5px;
  color: #d64541;
}
h2 {
  color: #bdc3c7;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mrng-60-top {
  margin-top: 60px;
}
/* Global Button Styles */
a.animated-button:link,
a.animated-button:visited {
  position: relative;
  display: block;
  margin: 30px auto 0;
  padding: 14px 15px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 0.08em;
  border-radius: 0;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
a.animated-button:link:after,
a.animated-button:visited:after {
  content: "";
  position: absolute;
  height: 0%;
  left: 50%;
  top: 50%;
  width: 150%;
  z-index: -1;
  -webkit-transition: all 0.75s ease 0s;
  -moz-transition: all 0.75s ease 0s;
  -o-transition: all 0.75s ease 0s;
  transition: all 0.75s ease 0s;
}
a.animated-button:link:hover,
a.animated-button:visited:hover {
  color: #fff;
  text-shadow: none;
}
a.animated-button:link:hover:after,
a.animated-button:visited:hover:after {
  height: 450%;
}
a.animated-button:link,
a.animated-button:visited {
  position: relative;
  display: block;
  margin: 30px auto 0;
  padding: 14px 15px;
  color: #fff;
  font-size: 14px;
  border-radius: 0;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 0.08em;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

/* Victoria Buttons */

a.animated-button.victoria-three {
  border: 2px solid #d24d57;
}
a.animated-button.victoria-three:after {
  background: #d24d57;
  opacity: 0.5;
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
a.animated-button.victoria-three:hover:after {
  height: 140%;
  opacity: 1;
}
.card-shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, red, 0.2);
}

.blur-radius-box-shadow {
  box-shadow: 5px 5px 20px;
}
</style>




















<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpukNl1L1qGqEwad87A1-MkZj8H_bKDZM&libraries=visualization,drawing"></script>













<v-flex
><v-flex
  data-aos="zoom-in-up"
  data-aos-duration="1500"
  data-aos-delay="500"
  xs12
  pa-3
  pa="-lg-0"
  lg8
  text-center
>
  <div id="map"></div> </v-flex
></v-flex>








<template>
  <div>
      
      <v-layout wrap justify-center>
          <v-flex style="background-color:#545454" lg12>
              <v-img src="" height="100vh">
              <v-card elevation="10" width="60%" height="90%" style="margin-left:20%; margin-top:2%">
                      <v-layout wrap justify-center>
                          <v-flex lg4>
                              <v-card elevation="0" height="90vh" color="#424242">
                                  <v-layout wrap justify-center>
                                      <v-flex lg12>
                                          <v-img src="../../assets/images/logo.png" width="75%" style="margin-top:65%;margin-left:13%;"></v-img>
                                      </v-flex>
                                      
                                  </v-layout>
                                  
                              </v-card>
                          </v-flex>
                          <v-flex lg8>
                              




                          </v-flex>
                      </v-layout>
                      

              </v-card>
              </v-img>
          </v-flex>
      </v-layout>
  </div>
</template>




<template>
  <div>
    <!-- <vue-element-loading
      :active="isLoading"
      is-full-screen
      color="grey"
      spinner="bar-fade-scale"
    />
    <ServerError v-if="ServerError" /> -->
    <v-layout wrap justify-center >
      <v-flex xs12 text-center>
        <v-card>
          <v-card-title>
            SECURITY LIST
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="SEARCH SECURITY NAME"
              single-line
              hide-details
              outlined
              dense
            >
            </v-text-field>            
          </v-card-title>
                <v-data-table :headers="headers" :items="userdata" :search="search" fixed-header>
                    <template v-slot:[`item._id`]="{ item }">
                    <v-btn icon color="red" @click="myDialog = true; myItem = item._id;">
                        <v-icon> mdi-delete </v-icon>
                    </v-btn>
                
                    </template>
                </v-data-table>
                </v-card>
            </v-flex>
            </v-layout>
                <v-snackbar v-model="snackbar" :timeout="timeout" width="300">
                    {{ text }}
                  </v-snackbar>
                <v-dialog v-model="myDialog" max-width="450">
                <v-card>
                  <v-card-title class="text-h5"> Are you sure to delete this account? </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="myDialog = false;">Cancel</v-btn>
                    <v-btn
                      color="red darken-1"
                      text
                      @click="                      
                        removeData();
                      "
                      >Delete</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){ 
        return{
            myItem : null,
            isLoading: false,
            dialog: false,
            timeout:1000,
            snackbar: false,
            text: "",
            myDialog:false,
            search: "",
            ServerError: false,
            userdata:[],
            headers: [
                {
                    text:'SECURITY NAME',
                    align:'start',
                    sortable:false,
                    value:'securityName'

                },
                {
                    text:'SECURITY ID', value:'securityId'
                },
                {
                    text:'EMAIL', value:'securityEmail',
                },
                {
                    text:'PHONE',value:'securityPhoneNumber'
                },
                {
                    text: "Actions", value:'_id', sortable: false, width: "20%" 
                },

            ]
        }
    },
    
    mounted(){
        this.getData();
    },
    methods:{
        getData()
        {
            axios({
                method:'get',
                url:this.baseURL+'/view/allsecurities',
                headers:{
                    token:localStorage.getItem("Token"),
                },
                

            }).then((response)=>{
                if(response.data.status)
                {
                    console.log("responded");
                    this.userdata=response.data.data;
                }
                else{
                    alert("Something went wrong")
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        removeData() {
      this.isLoading = true;
      axios({
        method: "post",
        url: "/security/delete",
        headers: {
          token:localStorage.getItem("Token"),
        },
         data: {
          id: this.myItem
        },
      })
        .then((response) => {
            this.myDialog = false;
          this.isLoading = false;

          if (response.data.status) {
            this.snackbar = true;
            this.text = "Successfully Deleted";
            setTimeout(()=>this.getData(),1000); 
          } else {
            this.isLoading = false;
            this.snackbar = true;
            this.text = response.data.msg;
            console.log(response.data.msg);
          }
        })
        .catch((error) => {
          this.isLoading = false;
          this.ServerError = true;
          console.log(error);
        });
    },
    }
        
        
    }

</script>






<template>
  <div>
    <v-layout wrap fill-height justify-center>
      <v-flex xs6 pt-12 align-self-center justify-center
        ><v-card color="grey">
          <v-layout wrap justify-center>
            <v-flex xs12 pt-10>
              <v-layout wrap justify-center>
                <v-flex xs4>
                  <v-autocomplete
                    outlined
                    dense
                    color="#8d8d8d"
                    v-model="location"
                    :items="array"
                    item-text="Location"
                    item-value="_id"
                    item-color="#FF1313"
                    hide-details
                    clearable
                    class="text-left"
                    label="LOCATION SEARCH"
                  >
                  </v-autocomplete>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-layout wrap justify-center>
                <v-flex pt-5 xs4 pl-14 pb-4>
                  <v-btn color="black" @click="getlist()">
                    <span style="color: white; text-align: center">SEARCH
                    </span>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card></v-flex
      >
    </v-layout>
    <v-layout wrap>
      <v-flex xs12></v-flex>
    </v-layout>
  </div>
</template>
<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCKNCpGECgKTHumtHK0XH-qmi6uiDNlWpM"></script>
  
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      map: "",
      mapData: {},
      page: 1,
      menu1: false,
      distributor: false,
      menu2: false,
      array: [],
      keyword: null,
      location: null,
      latt: null,
      lonn: null,
      text: null,
      currentpage: 1,
      limit: 20,
      msg: null,
      userType: "",
      filters: {
        userType: "",
        plan: "",
        from: "",
        to: "",
      },
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      pages: 0,
      appLoading: false,
    };
  },

  watch: {
    currentpage() {
      this.getlist();
    },

    keyword() {
      this.getlist();
    },
    distributor() {
      this.getlist();
    },
    // from() {
    //   this.getlist();
    // },
    // to() {
    //   this.getlist();
    // },
    // userType(){
    //   this.getlist();
    // }
    filters: {
      handler(val) {
        this.currentpage = 1;
        if (val.userType || val.plan || val.from || val.to)
          this.$store.commit("activeusersfilter", this.filters);
        this.filt;
        this.getlist();
      },
      deep: true,
    },
  },

  mounted() {
    this.getplan();
  },

  methods: {
    getplan() {
      this.appLoading = true;
      axios({
        method: "GET",
        url: "/view/all/locations",

        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.array = response.data.data;
          this.appLoading = false;
        })
        .catch((err) => {
          this.ServerError = true;
          console.log(err);
        });
    },

    initMap() {
      var vm = this;
      var mapCanvas = document.getElementById("map");
      var mapOptions = {
        center: new google.maps.LatLng(this.latt, this.lonn),
        zoom: 10,

        mapTypeId: google.maps.MapTypeId.TERRAIN,
      };
      vm.map = new google.maps.Map(mapCanvas, mapOptions);
      var lat = this.latt;
      var lon = this.lonn;
      var latlngset = new google.maps.LatLng(lat, lon);

      marker = new google.maps.Marker({
        map: vm.map,
        position: latlngset,
      });
    },
    getlist() {
      this.appLoading = true;
      axios({
        method: "post",
        url: "/view/specific/location",
        data: {
          id: this.location,
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.list = response.data.data;
          this.latt = response.data.data.Coordinates[1];
          this.lonn = response.data.data.Coordinates[0];
          alert(this.latt);
          alert(this.lonn);

          this.appLoading = false;
          this.initMap();
        })

        .catch((err) => {
          this.ServerError = true;
          console.log(err);
        });
    },
  },
};
</script>
    


<style scoped>
#map {
  height: 400px;
}
.test {
  text-align: justify;
}
.grad {
  background-image: linear-gradient(to right, #fbfbfb, #fbfbfb);
}

body {
  font-family: "Lato", sans-serif;
  background: #353535;
  color: #fff;
}
.jumbotron h1 {
  color: #353535;
}
footer {
  margin-bottom: 0 !important;
  margin-top: 80px;
}
footer p {
  margin: 0;
  padding: 0;
}
span.icon {
  margin: 0 5px;
  color: #d64541;
}
h2 {
  color: #bdc3c7;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mrng-60-top {
  margin-top: 60px;
}
/* Global Button Styles */
a.animated-button:link,
a.animated-button:visited {
  position: relative;
  display: block;
  margin: 30px auto 0;
  padding: 14px 15px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 0.08em;
  border-radius: 0;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
a.animated-button:link:after,
a.animated-button:visited:after {
  content: "";
  position: absolute;
  height: 0%;
  left: 50%;
  top: 50%;
  width: 150%;
  z-index: -1;
  -webkit-transition: all 0.75s ease 0s;
  -moz-transition: all 0.75s ease 0s;
  -o-transition: all 0.75s ease 0s;
  transition: all 0.75s ease 0s;
}
a.animated-button:link:hover,
a.animated-button:visited:hover {
  color: #fff;
  text-shadow: none;
}
a.animated-button:link:hover:after,
a.animated-button:visited:hover:after {
  height: 450%;
}
a.animated-button:link,
a.animated-button:visited {
  position: relative;
  display: block;
  margin: 30px auto 0;
  padding: 14px 15px;
  color: #fff;
  font-size: 14px;
  border-radius: 0;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 0.08em;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

/* Victoria Buttons */

a.animated-button.victoria-three {
  border: 2px solid #d24d57;
}
a.animated-button.victoria-three:after {
  background: #d24d57;
  opacity: 0.5;
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
a.animated-button.victoria-three:hover:after {
  height: 140%;
  opacity: 1;
}
.card-shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, red, 0.2);
}

.blur-radius-box-shadow {
  box-shadow: 5px 5px 20px;
}
</style>






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