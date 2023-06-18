<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex xs12 text-center>image</v-flex>
            <v-flex xs6>
                 <ImageComp
              @stepper="winStepper"
              :singleImage="image"
              :pageId="about._id"
              :heading="'Add  Image'"
              :componentType="'image'"
            />
            </v-flex>
            <v-flex xs6>
<v-btn   @click="uploadImage()">SUBMIT</v-btn>
            </v-flex>
        </v-layout>
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

  methods: {
   
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
       
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/upload/image",
          data: formData,
           headers: {
            token: localStorage.getItem("Token"),
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