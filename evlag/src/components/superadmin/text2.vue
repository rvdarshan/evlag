<template>
    <v-layout wrap>
      <vue-element-loading
        :active="appLoading"
        :is-full-screen="true"
        background-color="#FFFFFF"
        color="#35D6ED"
        spinner="bar-fade-scale"
      />
  
      <v-flex xs12 v-if="list.length > 0">
        <span
          style="
            font-family: opensanssemibold;
            font-size: 25px;
            color: black;
            letter-spacing: 1px;
          "
          >User List (New Users/ Distributors)</span
        >
        <v-flex xs2>
          <v-progress-linear
            align-center
            height="4"
            color="#35D6ED"
            value="100"
            width="20%"
          ></v-progress-linear>
        </v-flex>
        <v-flex
          xs12
          pt-2
          pl-2
          style="
            font-family: opensansregular;
            font-size: 14px;
            color: black;
            letter-spacing: 1px;
          "
          ><span>Search users by following criterias</span>
        </v-flex>
  
        <v-flex xs12>
          <v-layout wrap>
            <v-flex xs12 sm6 md3 pa-2>
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    :value="computedDateFormattedMomentjs"
                    clearable
                    dense
                    outlined
                    label="From Date"
                    readonly
                    v-model="filters.from"
                    v-bind="attrs"
                    v-on="on"
                    @click:clear="from = null"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="filters.from"
                  @change="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12 sm6 md3 pa-2>
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    :value="computedDateFormattedMomentjs"
                    clearable
                    label="To Date"
                    readonly
                    dense
                    outlined
                    v-model="filters.to"
                    v-bind="attrs"
                    v-on="on"
                    @click:clear="from = null"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="filters.to"
                  @change="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12 sm6 md3 pa-2>
              <v-autocomplete
                outlined
                dense
                color="#8d8d8d"
                v-model="filters.plan"
                :items="array"
                item-text="name"
                item-value="_id"
                item-color="#FF1313"
                hide-details
                clearable
                class="text-left"
                label="Plan"
              >
              </v-autocomplete>
            </v-flex>
  
            <v-flex xs12 sm6 md3 pa-2>
              <v-autocomplete
                outlined
                dense
                color="#8d8d8d"
                v-model="filters.userType"
                :items="array1"
                item-text="text"
                item-value="_id"
                item-color="#FF1313"
                hide-details
                clearable
                class="text-left"
                label="User Type"
              >
              </v-autocomplete>
            </v-flex>
  
            <v-flex xs12 sm6 md3 pa-2>
              <v-autocomplete
                outlined
                dense
                color="#8d8d8d"
                v-model="keyword"
                :items="stc"
                item-text="name"
                item-value="_id"
                item-color="#FF1313"
                hide-details
                clearable
                class="text-left"
                label="STC"
              >
              </v-autocomplete>
            </v-flex>
            <v-flex xs12 sm6 md3 pa-2>
              <v-autocomplete
                outlined
                dense
                color="#8d8d8d"
                v-model="keyword"
                :items="rtc"
                item-text="name"
                item-value="_id"
                item-color="#FF1313"
                hide-details
                clearable
                class="text-left"
                label="RTC"
              >
              </v-autocomplete>
            </v-flex>
            <v-flex xs12 sm6 md3 pa-2>
              <v-autocomplete
                outlined
                dense
                color="#8d8d8d"
                v-model="keyword"
                :items="ntc"
                item-text="name"
                item-value="_id"
                item-color="#FF1313"
                hide-details
                clearable
                class="text-left"
                label="NTC"
              >
              </v-autocomplete>
            </v-flex>
            <!-- <v-flex xs12 sm6 md3 pa-5>
              <v-checkbox v-model="distributor" label="Distributor"></v-checkbox>
            </v-flex> -->
          </v-layout>
        </v-flex>
  
        <v-flex xs12 pt-1>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    class="opensansregular"
                    style="color: black; font-size: 15px"
                  >
                    Name
                  </th>
                  <th
                    class="opensansregular"
                    style="color: black; font-size: 15px"
                  >
                    E-mail
                  </th>
  
                  <th
                    class="opensansregular"
                    style="color: black; font-size: 15px"
                  >
                    Phone
                  </th>
                  <th
                    class="opensansregular"
                    style="color: black; font-size: 15px"
                  >
                    Validity
                  </th>
                  <th
                    class="opensansregular"
                    style="color: black; font-size: 15px"
                  >
                    Promo Code
                  </th>
                  <th
                    class="opensansregular"
                    style="color: black; font-size: 15px"
                  >
                    Subscription Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, i) in list"
                  :key="i"
                  @click="$router.push('/DetailedViewPage2?id=' + item._id)"
                  style="cursor: pointer"
                >
                  <td>
                    <span class="fontd">{{ item.name }} </span>
                  </td>
                  <td>
                    <span class="fontd">{{ item.email }}</span>
                  </td>
                  <td>
                    <span class="fontd">{{ item.phone }}</span>
                  </td>
                  <td>
                    <span
                      v-if="item.subscriptionDaysRemaining == '0'"
                      class="fontexpired"
                      >Plan Expired</span
                    >
                    <span v-else>{{ item.subscriptionDaysRemaining }}</span>
                  </td>
                  <td>
                    <span
                      class="fontd"
                      v-if="item.subscriptionDetails.promoCodeId"
                    >
                      <v-icon color="green">mdi-check</v-icon></span
                    >
                    <span v-else> <v-icon color="red">mdi-close</v-icon></span>
                  </td>
                  <td>
                    <span class="fontd"
                      >{{ item.subcriptionPlanId.name }} / Rs.{{
                        item.subscriptionDetails.amount
                      }}</span
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider></v-divider>
        </v-flex>
      </v-flex>
      <v-flex xs12 v-else text-center>
        <span
          style="
            font-family: opensanssemibold;
            font-size: 25px;
            color: black;
            letter-spacing: 1px;
            cursor: pointer;
          "
          >No Active Users!</span
        >
      </v-flex>
      <v-layout wrap>
        <v-flex xs12>
          <v-pagination
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            :length="pages"
            :total-visible="7"
            v-model="currentpage"
            color="green"
          ></v-pagination>
        </v-flex>
      </v-layout>
    </v-layout>
  </template>
      
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        list: [],
        page: 1,
        menu1: false,
        distributor: false,
        menu2: false,
        array: [],
        keyword: null,
        stc: [],
        rtc: [],
        ntc: [],
        text: null,
        array1: [
          {
            text: "All",
            value: " ",
          },
          {
            text: "Distributor",
            value: "Distributor",
          },
          {
            text: "New User",
            value: "New User",
          },
        ],
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
    created() {
      this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
          this.getlist();
        }
      );
    },
    computed: {
      filt() {
        return this.$store.state.activeusersfilter;
      },
      computedDateFormattedMomentjs() {
        return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
      },
      computedDateFormattedDatefns() {
        return this.date ? format(parseISO(this.date), "EEEE, MMMM do yyyy") : "";
      },
    },
  
    mounted() {
      this.getStc();
      this.getRtc();
      this.getNtc();
      this.getlist();
      this.getplan();
      if (localStorage.getItem("usertypes") != null)
        this.filters.userType = localStorage.getItem("usertypes");
      else localStorage.removeItem("usertypes");
      if (localStorage.getItem("plans") != null)
        this.filters.plan = localStorage.getItem("plans");
      else localStorage.removeItem("plans");
      if (localStorage.getItem("froms") != null)
        this.filters.from = localStorage.getItem("froms");
      else localStorage.removeItem("froms");
  
      if (localStorage.getItem("tos") != null)
        this.filters.to = localStorage.getItem("tos");
      else localStorage.removeItem("tos");
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
      getlist() {
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/admin/active/users/list",
          data: {
            
            location: this.location,
          },
          headers: {
            token: localStorage.getItem("token"),
          },
        })
          .then((response) => {
            this.list = response.data.data;
            this.pages = Math.ceil(response.data.totalLength / this.limit);
            this.appLoading = false;
          })
          .catch((err) => {
            this.ServerError = true;
            console.log(err);
          });
      },
      getStc() {
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/stc/user/list",
          data: {
            keyword: this.keyword,
          },
          headers: {
            token: localStorage.getItem("token"),
          },
        })
          .then((response) => {
            this.stc = response.data.data;
          })
          .catch((err) => {
            this.ServerError = true;
            console.log(err);
          });
      },
      getRtc() {
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/rtc/user/list",
          data: {
            keyword: this.keyword,
          },
          headers: {
            token: localStorage.getItem("token"),
          },
        })
          .then((response) => {
            this.rtc = response.data.data;
          })
          .catch((err) => {
            this.ServerError = true;
            console.log(err);
          });
      },
  
      getNtc() {
        this.appLoading = true;
        axios({
          method: "GET",
          url: "/view/all/locations",
          data: {
            keyword: this.keyword,
          },
          headers: {
            token: localStorage.getItem("token"),
          },
        })
          .then((response) => {
            this.ntc = response.data.data;
          })
          .catch((err) => {
            this.ServerError = true;
            console.log(err);
          });
      },
    },
  };
  </script>
    