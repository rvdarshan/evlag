<template>
  <div>
    <v-layout wrap justify-center>
      <v-snackbar v-model="snackbar" color="yellow" right :timeout="3000">
        <v-layout wrap>
          <v-flex
            text-left
            class="align-self-center"
            style="font-family: homefontsub2; color: black"
            >{{ msg }}</v-flex
          >
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
        color="#FEE60D"
        spinner="bar-fade-scale"
      />
      <v-flex xs12 style="background-color:#545454">
        <v-form v-model="addcat" ref="addcat" @submit.prevent>
          <v-layout  justify-center wrap>
            <v-flex xs12 style="background-color: #545454" scroll lg10>
        

              <v-layout wrap justify-center>
          <v-flex  lg12 pt-10 pb-10>
              <v-img src="" height="100%">
              <v-card elevation="10"  width="100%" height="100%" >
                      <v-layout wrap justify-center>
                          <v-flex lg4 >
                              <v-card elevation="0" height="100%" color="#424242">
                                  <v-layout wrap justify-center>
                                      <v-flex lg12>
                                          <v-img src="../../assets/images/logo.png" width="75%" style="margin-top:65%;margin-left:13%;"></v-img>
                                      </v-flex>
                                      
                                  </v-layout>
                                  
                              </v-card>
                          </v-flex>
                          <v-flex lg8>
                              

                            <v-card elevation="10">
                  <v-flex xs12 lg8 pt-14 >
                    <v-layout
                      pb-14
                      pt-14
                      wrap
                      class="jabg1 fontsub"
                      justify-center
                    >
                    
                      <v-flex
                        text-center
                        xs8
                        style="
                          font-family: homefontsub2;
                          color: black;

                          font-size: 24px;
                          font-weight: bolder;
                        "
                        >ADD SECURITY
                      </v-flex>
                      <v-flex xs10 lg5 pr-6 align-self-center pt-10>
                        <v-text-field
                          label="NAME"
                          outlined
                          dense
                          style="margin-top: 10%"
                          v-model="name"
                          :rules="nameRules"
                          required
                        ></v-text-field
                      ></v-flex>
                      <v-flex xs10 lg5 pl-6 align-self-center pt-12>
                        <v-text-field
                          label="EMAIL"
                          outlined
                          dense
                          style="margin-top: 2%"
                          v-model="email"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                      </v-flex>

                      <v-flex text-left pt-10 xs10>
                        <v-text-field
                          label="PHONE"
                          outlined
                          dense
                          style="margin-top: 2%"
                          v-model="phoneNumber"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs10 text-left pt-10>
                        <span
                          style="
                            font-family: homefontsub2;
                            color: black;

                            font-size: 16px;
                          "
                        >
                          IMAGE</span
                        >
                        <!-- <v-file-input
                    class="pt-3"
                    text-center
                    outlined
                    label="Upload File"
                  ></v-file-input>
                </v-flex> -->
                        <v-card outlined>
                          <!-----------------------docs edit------------------------->
                          <v-flex xs12 pa-4 text-center>
                            <v-icon color="#408BFF" @click="$refs.files.click()"
                              >mdi-plus</v-icon
                            >
                            <!-- </v-flex>
                <v-flex xs12 pb-5> -->
                            UPLOAD IMAGE &nbsp;
                            <input
                              v-show="false"
                              id="file1"
                              ref="files"
                              type="file"
                              multiple
                              @change="browseCover"
                            />
                          </v-flex>
                          <!-- <v-flex xs12>
                  <v-layout wrap>
                    <v-flex
                      xs3
                      pa-1
                      text-left
                      v-for="(item, i) in documentFile2"
                      :key="i"
                    >
                      <v-chip
                        dark
                        color="yellow"
                        style="margin-right: 6px;margin-b"
                      >
                        {{ item }}hiiii
                      </v-chip>
                    </v-flex>
                  </v-layout>
                </v-flex> -->
                          <v-flex xs12 v-if="documentFile1">
                            <v-layout wrap v-if="documentFile1.length > 0">
                              <v-flex
                                xs3
                                py-3
                                text-left
                                v-for="(item, i) in documentFile1"
                                :key="i"
                              >
                                <!-- <v-chips> -->
                                <v-chip
                                  @click="documentFile1"
                                  dark
                                  color="green"
                                  style="margin-right: 6px;margin-b"
                                >
                                  {{ item.name }}
                                </v-chip>
                                <!-- </v-chips> -->
                              </v-flex>
                            </v-layout>
                          </v-flex>
                          <!--------------------------------------------------------->
                        </v-card></v-flex
                      >
                      <v-flex text-left pt-10 xs10>
                       
                        <v-text-field
                          v-model="password"
                          prepend-inner-icon="mdi-lock"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="PASSWORD"
                          @click:append="show1 = !show1"
                          outlined
                          dense
                          style="margin-top: 5%"
                        ></v-text-field>
                      </v-flex>

                      <v-flex text-left pt-10 xs10>
                       
                        
                        <v-text-field
                          v-model="confirmpassword"
                          prepend-inner-icon="mdi-lock"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="CONFIRM PASSWORD"
                          @click:append="show1 = !show1"
                          outlined
                          dense
                          style="margin-top: 1%"
                        ></v-text-field>
                      </v-flex>
                      <v-flex lg5 style="margin-top: 0%">
                        <v-btn
                          class="ma-2"
                          align="center"
                          color="success"
                          @click="create()"
                          >CREATE ACCOUNT</v-btn
                        >
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-card>

                            
                          </v-flex>
                      </v-layout>
                      

              </v-card>
              </v-img>
          </v-flex>
      </v-layout>


           


            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import axios from "axios";
// var marker;
export default {
  data() {
    return {
      name: "",
      docsdata: new FormData(),

      nameRules: [(v) => !!v || "Name is required"],
      email: "",
      phoneNumber: "",
      confirmpassword: "",
      multiLine: true,
      snackbar: false,
      text: `Passwords does not Match!`,
      securityId: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      show1: "false",
      show2: "true",
      show3: "false",
      show4: "false",
      Pagenotfound: false,
      rules: {
        required: (value) => !!value || "Required",
        min: (v) => v.length >= 3 || "Min 5 characters",
      },
      about: {
        title: null,
        rightText: null,
        leftText: null,
        video: null,
        pageName: null,
        storyOfReserveTitle: null,
        storyOfReserveText: null,
      },
      id: null,
      valid: false,
      imageArray: [],
      rightImage: null,
      topImage: null,
      leftImage: null,
      image: null,
      showPreview: false,
      deletedialog: false,

      imagePreview: "",
      dialog2: false,
      images: [],
      ServerError: false,
      showSnackBar: false,
      timeout: 5000,
      msg: null,
      curid: [],

      list: {},

      appLoading: false,
      latt: null,
      checkbox: null,
      lonn: null,

      roleRules: [(v) => !!v || "Role is required"],
      phnoRules: [
        (v) => !!v || "phone is required",
        (v) => (v && v.length <= 10) || "invalid number",
        (v) => (v && v.length >= 10) || "invalid number",
        (v) => /^\d{10}$/.test(v) || "phone number must be a number",
      ],

      itemArray: [
        { name: "Us Citizen", abbr: "NY" },
        { name: "Permanent Resident", abbr: "NY" },
        { name: "Need Sponsorship", abbr: "NY" },
      ],

      job: {
        firstName: null,
        lastName: null,
        email: null,
        phoneNo: null,
        address: null,
        workPermit: null,
        experience: null,
        coverLetter: null,
      },
      map: "",
      mapData: {},
      //upload docs

      selectedFiles: null,
      selectedFiles2: null,
      selectedFiles3: null,

      contactAddress: null,
      curId: null,
      documentFile1: [],
      documentFile2: [],
      addcat: false,
    };
  },

  methods: {
    //upload document
    browseCover(event) {
      var got = event.target.files;
      if (got.length < 5) {
        for (let i = 0; i < got.length; i++) {
          this.documentFile1.push(got[i]);
        }
        console.log("file isss", this.documentFile1);
      } else {
        this.msg = "Maximum 3 can be uploaded";
        this.snackbar = true;
      }
    },
    docsupload() {
      for (var i = 0; i < this.documentFile1.length; i++) {
        this.docsdata.append("photo", this.documentFile1[i]);
      }
      this.docsdata.append("id", this.documentID);
      this.appLoading = true;
      axios({
        url: "/upload/image",
        method: "post",
        headers: {
          token: localStorage.getItem("Token"),
        },
        data: this.docsdata,
      })
        .then(() => {
          this.appLoading = false;
          this.dialog = false;
          this.documentFile1 = [];
          this.docsdata = new FormData();
          (this.title = null), (this.snackbar = true);
          this.msg = "Job Application Send Successfully";
          this.snackbar = true;
          this.$refs.addcat.resetValidation();
          this.job.firstName = "";
          this.job.lastName = "";
          this.job.email = "";
          this.job.phoneNo = "";
          this.job.address = "";
          this.job.workPermit = "";
          this.job.experience = "";
          this.job.coverLetter = "";
        })
        .catch((err) => {
          this.appLoading = false;
          this.ServerError = true;
          console.log(err);
        });
    },
    //

    addJobform() {
      axios({
        method: "POST",
        headers: {
          siteId: "6436362a65dc48eef99acd34",
        },
        url: "/user/apply/job",
        data: {
          jobId: this.$route.query.id,
          firstName: this.job.firstName,
          lastName: this.job.lastName,
          email: this.job.email,
          phoneNo: this.job.phoneNo,
          address: this.job.address,
          workPermit: this.job.workPermit,
          experience: this.job.experience,
          coverLetter: this.job.coverLetter,
        },
      })
        .then((response) => {
          if (response.data.status) {
            this.msg = " message has been sent Successfully ";
            if (this.documentFile1.length > 0) {
              this.documentID = response.data.id;
              console.log("documentID", this.documentID);
              console.log("documentfile", this.documentFile1);
              if (this.documentID) {
                this.docsupload();
              } else {
                alert("document updated");
              }
            }
            this.contact.phoneNo = null;
            this.contact.email = null;
            this.contact.name = null;
            this.contact.msg = null;
            this.contact.location = null;
            this.snackbar = true;
            this.appLoading = false;
            // location.reload();
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

    create() {
      if (this.password == this.confirmpassword) {
        axios({
          method: "post",
          url: this.baseURL + "/superAdminn/addSecurity",
          headers: {
            token: localStorage.getItem("Token"),
          },
          data: {
            securityName: this.name,
            securityPhoneNumber: this.phoneNumber,
            securityEmail: this.email,
            securityId: this.securityId,
            securityPassword: this.password,
            id: this.$route.query._id,
          },
        })
          .then((response) => {
            if (response.data.status) {
              this.documentID = response.data.data._id;
              alert(this.documentID);
              console.log("documentID", this.documentID);
              alert("hii");
              console.log("documentfile", this.documentFile1);
              if (this.documentID) {
                this.docsupload();
              } else {
                alert("document updated");
              }

              console.log("Created");
              this.$router.push("/dashboard");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.snackbar = true;
      }
    },
    validateInput() {
      if (!this.job.firstName) {
        this.msg = "Please Provide First Name";
        this.snackbar = true;
        return;
      } else if (!this.job.lastName) {
        this.msg = "Please Provide Last Name";
        this.snackbar = true;
        return;
      } else if (!this.job.phoneNo) {
        this.msg = "Please Provide phone number";
        this.snackbar = true;
        return;
      } else if (!this.job.email) {
        this.msg = "Please Provide email";
        this.snackbar = true;
        return;
      } else if (!this.job.address) {
        this.msg = "Please Provide Address";
        this.snackbar = true;
        return;
      } else if (!this.job.workPermit) {
        this.msg = "Please Provide Work Authorisation";
        this.snackbar = true;
        return;
      } else if (!this.documentFile1.length > 0) {
        this.msg = "Please Provide a Resume";
        this.snackbar = true;
        return;
      } else {
        this.addJobform();
      }
    },
  },
};
</script>


<style scoped>
.jabg1 {
  background-image: linear-gradient(to right, white, white);
}
.jabg2 {
  background-image: linear-gradient(to right, #0f212a, #0f212a);
}
</style> 