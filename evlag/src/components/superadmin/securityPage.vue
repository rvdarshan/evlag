<template>
    <div>
        <v-layout wrap justify-center>
            <v-flex lg12>
                <v-layout wrap justify-center>
                        <v-flex lg12>
                            <h2 style="font-family:typ;font-size:40px; text-align: center;margin-top:2%"><u>SECURITY MANAGEMENT </u></h2>
                        </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg12 style="margin-top: 10%;">
                        <router-link :to="'/securityregistration'" style="text-decoration:none">
                        <v-row
                            align="center"
                            justify="space-around"
                        >
                        <v-btn
                            text
                            color="primary"
                            > SECURITY REGISTRATION
                         </v-btn>
                        </v-row>
                        </router-link>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg12 style="margin-top: 3%;">
                        <v-row
                            align="center"
                            justify="space-around"
                        >
                        <v-btn
                            text
                            color="primary"
                            > SECURITY ALLOCATION
                         </v-btn>
                        </v-row>
                    </v-flex>
                </v-layout>
                <v-layout wrap justify-center>
                    <v-flex lg12 style="margin-top: 3%;">
                        <router-link :to="'/securitylist'" style="text-decoration:none">
                        <v-row
                            align="center"
                            justify="space-around"
                        >
                        <v-btn
                            text
                            color="primary"
                            > SECURITY LIST
                         </v-btn>
                        </v-row>
                        </router-link>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>