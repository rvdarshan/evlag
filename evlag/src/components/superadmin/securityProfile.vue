<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                <v-layout wrap justify-center>
                        <v-flex lg12>
                            <h2 style="font-family:typ;font-size:40px; text-align: center;margin-top:2%"><u>SECURITY PROFILE</u></h2>
                        </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                        <v-flex lg6>
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="nju" style="margin-left:41.5%">NAME</p>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="head">ACHAL DOMINIC</p>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex lg6>
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="nju" style="margin-left:45%">PHONE</p>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="head" style="margin-left: 38%">7896254736</p>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap justify-center>
                        <v-flex lg12 >
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="njh" style="margin-left:47%">EMAIL</p>
                                </v-flex>
                            </v-layout>
                            <v-layout wrap justify-center>
                                <v-flex lg12>
                                    <p class="head" style="margin-left:35%">achaldomman999@gmail.com</p>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap justify-center style="margin-top: 10%">
                        <v-flex lg6>
                            <v-row
                                align="center"
                                justify="space-around"
                            >
                                <v-btn
                                tile
                                color="success"
                                >
                                <v-icon left>
                                    mdi-pencil
                                </v-icon>
                                UPDATE
                                </v-btn>
                            </v-row>
                        </v-flex>
                        <v-flex lg6>
                            <v-row
                                align="center"
                                justify="space-around"
                            >
                                <v-btn
                                tile
                                color="error"
                                >
                                <v-icon left>
                                   mdi-delete
                                </v-icon>
                                DELETE
                                </v-btn>
                            </v-row>
                        </v-flex>
                    </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>