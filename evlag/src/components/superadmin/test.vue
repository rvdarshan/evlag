<template>
  <div>
    <vue-element-loading
      :active="appLoading"
      :is-full-screen="true"
      background-color="#FFFFFF"
      color="#68D389"
      spinne

<template>
  <div>
    <vue-element-loading
      :active="appLoading"
      :is-full-screen="true"
      background-color="#FFFFFF"
      color="#68D389"
      spinner="bar-fade-scale"
    />
    <v-snackbar v-model="showSnackBar" color="#68D389" right :timeout="timeout">
      <v-layout wrap justify-center>
        <v-flex text-left align-self-center>{{ msg }}</v-flex>
        <v-flex text-right>
          <v-btn small :ripple="false" text @click="showSnackBar = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-snackbar>
    <v-layout wrap justify-center>
      <v-flex xs10 text-center>
        <span class="itemHeading"> Gallery </span>
      </v-flex>
      <v-flex xs2>
        <v-btn color="green" @click="dialog2 = true">
          <span style="font-family: poppinsBold"> ADD IMAGES</span>

          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-center>
      <v-flex xs6 v-for="(item, i) in images" :key="i">
        <v-layout wrap>
          <v-flex pa-8 xs12 align-self-center>
            <v-img :src="mediaURL + item.image"> </v-img>
          </v-flex>
          <v-flex xs12 align-self-center>
            <center>
              <v-btn
                color="green"
                @click="(deletedialog = true), (curid = item._id)"
              >
                <span style="font-family: poppinsBold"> REMOVE </span>
              </v-btn>
            </center>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog2" max-width="800px">
      <v-card class="pa-14">
        <v-layout wrap justify-center>
          <v-flex xs12>
            <ImageComp
              @stepper="winStepper"
              :singleImage="image"
              :pageId="about._id"
              :heading="'Add  Image'"
              :componentType="'image'"
            />
          </v-flex>
          <v-flex md12 pt-4>
            <v-layout justify-end>
              <v-flex md3>
                <v-btn
                  block
                  tile
                  color="#68D389"
                  light
                  :ripple="false"
                  depressed
                  @click="uploadImage()"
                  class="itemValue"
                >
                  <span style="color: #ffffff">Save Changes </span>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>

   
  </div>
</template>

<script>
import axios from "axios";
import ImageComp from "@/components/CommonComponents/singleImage";
export default {
  components: {
    ImageComp,
  },
  data() {
    return {
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
      appLoading: false,
      dialog2: false,
      images: [],
      ServerError: false,
      showSnackBar: false,
      timeout: 5000,
      msg: null,
      curid: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    deleteItem() {
      axios({
        url: "/gallery/remove/image",
        method: "POST",
        data: {
          id: this.curid,
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.appLoading = false;
          if (response.data.status == true) {
            this.msg = response.data.msg;
            this.showSnackBar = true;
            (this.deletedialog = false), this.getData();
          } else {
            this.msg = response.data.msg;
            this.showSnackBar = true;
          }
        })
        .catch((err) => {
          this.appLoading = false;
          this.ServerError = true;
          console.log(err);
        });
    },
    winStepper(window_data) {
      if (window_data.type == "image") {
        this.image = window_data.selectedFiles;
      }
    },
    validateInput() {
      // if (!this.about.title) {
      //   this.msg = "Please Provide a  Image";
      //   this.showSnackBar = true;
      //   return;
      // }

      //  else if (!this.rightImage && !this.about.rightImage) {
      //   this.msg = "Please Upload Right Image";
      //   this.showSnackBar = true;
      //   return;
      // } else if (!this.leftImage && !this.about.leftImage) {
      //   this.msg = "Please Upload Left Image";
      //   this.showSnackBar = true;
      //   return;
      // }

      // else {
      this.uploadImage();
      // }
    },
    getData() {
      this.appLoading = true;
      axios({
        method: "GET",
        url: "/gallery/list",
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.appLoading = false;
          this.images = response.data.data;
        })
        .catch((err) => {
          this.appLoading = false;
          this.ServerError = true;
          console.log(err);
        });
    },

    showImage(e) {
      this.file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target.result;
      };
      if (this.file.size > 2145728) {
        this.msg = "File Should be less than 2MB";
        this.showsnackbar = true;
        return;
      }
      this.showPreview = true;
      //reader.readAsDataURL(files[0]);
      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file);
        }
      }
    },
    uploadImage() {
      if (this.image) {
        let formData = new FormData();
        formData.append("image", this.image);
        this.dialog2 = false;
        this.getData();
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/gallery/upload/image",
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


r="bar-fade-scale"
    />
    <v-snackbar v-model="showSnackBar" color="#68D389" right :timeout="timeout">
      <v-layout wrap justify-center>
        <v-flex text-left align-self-center>{{ msg }}</v-flex>
        <v-flex text-right>
          <v-btn small :ripple="false" text @click="showSnackBar = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-snackbar>
    <v-layout wrap justify-center>
      <v-flex xs10 text-center>
        <span class="itemHeading"> Gallery </span>
      </v-flex>
      <v-flex xs2>
        <v-btn color="green" @click="dialog2 = true">
          <span style="font-family: poppinsBold"> ADD IMAGES</span>

          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-center>
      <v-flex xs6 v-for="(item, i) in images" :key="i">
        <v-layout wrap>
          <v-flex pa-8 xs12 align-self-center>
            <v-img :src="mediaURL + item.image"> </v-img>
          </v-flex>
          <v-flex xs12 align-self-center>
            <center>
              <v-btn
                color="green"
                @click="(deletedialog = true), (curid = item._id)"
              >
                <span style="font-family: poppinsBold"> REMOVE </span>
              </v-btn>
            </center>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog2" max-width="800px">
      <v-card class="pa-14">
        <v-layout wrap justify-center>
          <v-flex xs12>
            <ImageComp
              @stepper="winStepper"
              :singleImage="image"
              :pageId="about._id"
              :heading="'Add  Image'"
              :componentType="'image'"
            />
          </v-flex>
          <v-flex md12 pt-4>
            <v-layout justify-end>
              <v-flex md3>
                <v-btn
                  block
                  tile
                  color="#68D389"
                  light
                  :ripple="false"
                  depressed
                  @click="uploadImage()"
                  class="itemValue"
                >
                  <span style="color: #ffffff">Save Changes </span>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>

    <v-dialog v-model="deletedialog" max-width="600px">
      <v-card>
        <v-card-title>Are you sure you want to delete?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deletedialog = false"
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" text @click="deleteItem()">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import ImageComp from "@/components/CommonComponents/singleImage";
export default {
  components: {
    ImageComp,
  },
  data() {
    return {
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
      appLoading: false,
      dialog2: false,
      images: [],
      ServerError: false,
      showSnackBar: false,
      timeout: 5000,
      msg: null,
      curid: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    deleteItem() {
      axios({
        url: "/gallery/remove/image",
        method: "POST",
        data: {
          id: this.curid,
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.appLoading = false;
          if (response.data.status == true) {
            this.msg = response.data.msg;
            this.showSnackBar = true;
            (this.deletedialog = false), this.getData();
          } else {
            this.msg = response.data.msg;
            this.showSnackBar = true;
          }
        })
        .catch((err) => {
          this.appLoading = false;
          this.ServerError = true;
          console.log(err);
        });
    },
    winStepper(window_data) {
      if (window_data.type == "image") {
        this.image = window_data.selectedFiles;
      }
    },
    validateInput() {
      // if (!this.about.title) {
      //   this.msg = "Please Provide a  Image";
      //   this.showSnackBar = true;
      //   return;
      // }

      //  else if (!this.rightImage && !this.about.rightImage) {
      //   this.msg = "Please Upload Right Image";
      //   this.showSnackBar = true;
      //   return;
      // } else if (!this.leftImage && !this.about.leftImage) {
      //   this.msg = "Please Upload Left Image";
      //   this.showSnackBar = true;
      //   return;
      // }

      // else {
      this.uploadImage();
      // }
    },
    getData() {
      this.appLoading = true;
      axios({
        method: "GET",
        url: "/gallery/list",
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.appLoading = false;
          this.images = response.data.data;
        })
        .catch((err) => {
          this.appLoading = false;
          this.ServerError = true;
          console.log(err);
        });
    },

    showImage(e) {
      this.file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target.result;
      };
      if (this.file.size > 2145728) {
        this.msg = "File Should be less than 2MB";
        this.showsnackbar = true;
        return;
      }
      this.showPreview = true;
      //reader.readAsDataURL(files[0]);
      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file);
        }
      }
    },
    uploadImage() {
      if (this.image) {
        let formData = new FormData();
        formData.append("image", this.image);
        this.dialog2 = false;
        this.getData();
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/gallery/upload/image",
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