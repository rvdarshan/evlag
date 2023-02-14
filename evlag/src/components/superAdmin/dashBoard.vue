<template>
    <div>
        <ServerError v-if="ServerError"/>
    <Pagenotfound v-if="Pagenotfound"/>
    <v-img src="../../assets/images/3365008.jpg" style="height: 100vh">
        <v-layout wrap justify-center>
            <v-flex lg12 >
                <v-card elevation="4" height="60px">
                    <p style="font-size:40px;color: black;margin-left: 2%;" align="center">DashBoard</p>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout wrap justify-center style="margin-top: 5%">
            <v-flex lg12 text-center>
                <p class="nju">HI ADMIN</p>
            </v-flex>
            <v-flex lg6 text-center>
                <p class="asd">The world of Parity welcomes you with great pleasure. The management of the rooms are simplified. </p>
            </v-flex>
        </v-layout>
    </v-img>
    </div>
</template>