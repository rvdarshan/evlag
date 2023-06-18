<template>
  <div>
    <div class="text-center">
      <v-snackbar v-model="snackbar" :multi-line="multiLine">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <v-layout wrap justify-center>
      <v-flex style="background-color: #545454" scroll lg12>
        <v-img src="" height="100vh">
          <v-card
            elevation="10"
            width="60%"
            height="82%"
            style="margin-left: 20%; margin-top: 2%"
          >
            <v-layout wrap justify-center>
              <v-flex lg4>
                <v-card elevation="0" height="82vh" color="#424242">
                  <v-layout wrap justify-center>
                    <v-flex lg12>
                      <v-img
                        src="../../assets/images/logo.png"
                        width="75%"
                        style="margin-top: 65%; margin-left: 13%"
                      ></v-img>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex lg8>
                <v-form ref="file">
                  <v-layout wrap justify-center>
                    <v-flex lg8>
                      <v-text-field
                        label="NAME"
                        outlined
                        dense
                        style="margin-top: 10%"
                        v-model="name"
                        :rules="nameRules"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap justify-center>
                    <v-flex lg8>
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
                  </v-layout>
                  <v-layout wrap justify-center>
                    <v-flex lg8>
                      <v-text-field
                        label="PHONE"
                        outlined
                        dense
                        style="margin-top: 2%"
                        v-model="phoneNumber"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap justify-center>
                    <v-flex lg8>
                      <ImgComp
                        @stepper="winStepper"
                        :singleImage="image"
                        :height="1"
                        :width="1"
                        :heading="'Add  Image'"
                        :componentType="'image'"
                      />
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
                        label="PASSWORD"
                        @click:append="show1 = !show1"
                        outlined
                        dense
                        style="margin-top: 5%"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap justify-center>
                    <v-flex lg8>
                      <v-text-field
                        v-model="confirmpassword"
                        prepend-inner-icon="mdi-lock"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="CONFIRM PASSWORD"
                        @click:append="show1 = !show1"
                        outlined
                        dense
                        style="margin-top: 1%"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap justify-center>
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
                </v-form>
              </v-flex>
            </v-layout>
          </v-card>
        </v-img>
        <!-- 
                 -->
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import ImgComp from "./imagePage";
export default {
  components: {
    ImgComp,
  },
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [(v) => !!v || "Name is required"],
      email: "",
      phoneNumber: "",
      confirmpassword: "",
      image: null,
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
      ServerError: false,
      Pagenotfound: false,
      apploading: false,
      rules: {
        required: (value) => !!value || "Required",
        min: (v) => v.length >= 3 || "Min 5 characters",
      },
    };
  },
  methods: {
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
            id: this.$route.query.id,
          },
        })
          .then((response) => {
            if (response.data.status) {
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
    fun() {
      console.log("thid fun called");
      this.upload();
      console.log(this.image);
    },
    upload() {
      if (this.image) {
        let formData = new FormData();
        formData.append("image", this.image);
        this.dialog2 = false;
        this.getData();
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/upload/image",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            token: localStorage.getItem("token"),
          },
        })
          .then((response) => {
            this.appLoading = false;

            if (response.data.status == true) {
              this.msg = "Added Successfully";
            } else {
              this.msg = "Can't Upload Image.. Please Try Again Later";
              this.showsnackbar = true;
            }
          })
          .catch((err) => {
            this.appLoading = false;
            this.msg = "Can't Upload Image.. Please Try Again Later";
            this.showsnackbar = true;
            console.log(err);
          });
      }
    },
  },
};
</script>