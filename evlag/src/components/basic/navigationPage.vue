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
                    <span style="color: white; text-align: center">SEARCH</span>
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