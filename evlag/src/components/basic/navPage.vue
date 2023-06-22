<template>
  <div>
    <v-layout wrap justify-center>
      <v-flex xs12 text-center>
        <v-img src="../../assets/images/tom-podmore-3CksK6QSk2I-unsplash.jpg">
          <v-layout wrap justify-center>
            <v-flex xs12 pt-10 text-center>
              <v-img
                class="my-element"
                src="../../assets/images/logo-no-background.png"
                width="20%"
              ></v-img>
            </v-flex>
          </v-layout>

          <v-layout wrap justify-center>
            <v-flex xs12 text-center>
              <p style="font-size: x-large">N A V I G A T I O N</p>
            </v-flex>
          </v-layout>
            <br/>

          <v-layout wrap justify-center>
            <v-flex pl-2 pb-2 pr-2 pt-2 xs4 text-center>
              <v-card elevation="0" color="white">
                <v-layout wrap justify-center>
                  <v-flex xs12 pt-6 text-center>
                    <span><b>RESOURSE BLOCK</b></span>
                  </v-flex>
                  <v-flex xs12>
                    <span>The Main Building consists of Principal office, Manager
                    Office, Administration Office and First year classes.</span>
                  </v-flex>
                  <v-flex xs12 pt-5 pb-8 text-center>

                      <v-btn color="orange" elevation="18" width="20%"
                        ><p
                          style="
                            color: black;
                            text-align: center;
                            
                          "
                        >
                        <a href="https://www.google.com/maps/search/?api=1&query=9.528715,76.822482" style="text-decoration: none;"><p style="color:black;margin-top: 35%;
                            padding-left: 2%;
                            padding-right: 5%;">NAVIGATE</p></a>
                          
                        </p></v-btn
                      >
                    
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>

            <v-flex pl-2 pb-2 pr-2 pt-2 xs4 text-center>
              <v-card elevation="0" color="white">
                <v-layout wrap justify-center>
                  <v-flex xs12 pt-6 text-center>
                    <span><b>CENTRAL COMPLEX</b></span>
                  </v-flex>
                  <v-flex xs12 pl-2 pr-2>
                   The Building Consist of department of Food Tech and department of Mechanical, the Placement Cell and Alphonsa Hall
                  </v-flex>
                  <v-flex xs12 pt-5 pb-8 text-center>
                    
                        <v-btn color="orange" elevation="18" width="20%"
                        ><p
                          style="
                            color: black;
                            text-align: center;
                            
                          "
                        >
                        <a href="https://www.google.com/maps/search/?api=1&query=9.527768,76.821780" style="text-decoration: none;"><p style="color:black;margin-top: 35%;
                            padding-left: 2%;
                            padding-right: 5%;">NAVIGATE</p></a>
                          
                        </p></v-btn
                      >
                   
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>

            <v-flex pl-2 pb-2 pr-2 pt-2 xs4 text-center>
              <v-card elevation="0" color="white">
                <v-layout wrap justify-center>
                  <v-flex xs12 pt-6 text-center>
                    <span><b>LIBRARY BLOCK</b></span>
                  </v-flex>
                  <v-flex xs12 pl-2 pr-2>
                  <span> The Building Consist of the college library, CCF and the IELTS institute.</span>
                  </v-flex>
                  <v-flex xs12 pt-5 pb-8 text-center>
                    
                     
                        <v-btn color="orange" elevation="18" width="20%"
                        ><p
                          style="
                            color: black;
                            text-align: center;
                            
                          "
                        >
                        <a href="https://www.google.com/maps/search/?api=1&query=9.527804,76.821990" style="text-decoration: none;"><p style="color:black;margin-top: 35%;
                            padding-left: 2%;
                            padding-right: 5%;">NAVIGATE</p></a>
                          
                        </p></v-btn>
                          
                        
                      
                   
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>

          <br/>
          <br/>
          <v-layout wrap justify-center>
            <v-flex pl-2 pb-2 pr-2 pt-2 xs4 text-center>
              <v-card elevation="0" color="white">
                <v-layout wrap justify-center>
                  <v-flex xs12 pt-6 text-center>
                    <span><b>TBI</b></span>
                  </v-flex>
                  <v-flex xs12 pl-2 pr-2>
                    <span>It is the center of various companies like Leopard Tech Labs and the idea lab.</span>
                  </v-flex>
                  <v-flex xs12 pt-5 pb-8 text-center>
                    <router-link :to="'/https://www.google.com/maps/search/?api=1&query=9.528590,76.822980'" style="text-decoration: none">
                      <v-btn color="orange" elevation="18" width="20%"
                        ><p
                          style="
                            color: black;
                            text-align: center;
                            margin-top: 12%;
                            padding-left: 5%;
                            padding-right: 5%;
                          "
                        >
                          NAVIGATE
                        </p></v-btn
                      >
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>

            <v-flex pl-2 pb-2 pr-2 pt-2 xs4 text-center>
              <v-card elevation="0" color="white">
                <v-layout wrap justify-center>
                  <v-flex xs12 pt-6 text-center>
                    <span><b>FOOD COURT</b></span>
                  </v-flex>
                  <v-flex xs12 pl-2 pr-2>
                   <span>A bustling hub of diverse culinary delights, where aromas mingle and taste buds are tantalized by a wide array of global cuisines.</span>
                  </v-flex>
                  <v-flex xs12 pt-5 pb-8 text-center>
                    <router-link :to="'/https://www.google.com/maps/search/?api=1&query=9.527768,76.821780'" style="text-decoration: none">
                      <v-btn color="orange" elevation="18" width="20%"
                        ><p
                          style="
                            color: black;
                            text-align: center;
                            margin-top: 12%;
                            padding-left: 5%;
                            padding-right: 5%;
                          "
                        >
                          NAVIGATE
                        </p></v-btn
                      >
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>

            <v-flex pl-2 pb-2 pr-2 pt-2 xs4 text-center>
              <v-card elevation="0" color="white">
                <v-layout wrap justify-center>
                  <v-flex xs12 pt-6 text-center>
                    <span><b>DIVISIONAL BLOCK C</b></span>
                  </v-flex>
                  <v-flex xs12 pl-2 pr-2>
                   The Building Consist of departments of Chemical and department of Metallurgy and companies of Royal Enfield, Eicher,etc
                  </v-flex>
                  <v-flex xs12 pt-5 pb-8 text-center>
                    <router-link :to="'/https://www.google.com/maps/search/?api=1&query=9.527768,76.821780'" style="text-decoration: none">
                      <v-btn color="orange" elevation="18" width="20%"
                        ><p
                          style="
                            color: black;
                            text-align: center;
                            margin-top: 12%;
                            padding-left: 5%;
                            padding-right: 5%;
                          "
                        >
                          NAVIGATE
                        </p></v-btn
                      >
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-img>

        <!-- <a href="https://www.google.com/maps/search/?api=1&query=9.5282493,76.8213412" style="text-decoration: none;"> FOODCOURT</a> -->
      </v-flex>
    </v-layout>
  </div>
</template>