<template>
  <v-app>
    <v-card class="mb-16 ">
      <v-app-bar app hide-on-scroll color="transparent" flat tile>
        <v-toolbar-title>
          <span class="font-weight-bold text-h4 grey--text text--darken-3"
            >The
          </span>
          <span class="font-weight-light text-h4">Interior</span>
        </v-toolbar-title>

        <v-spacer />
        <v-btn-toggle shaped>
          <v-btn shaped large text to="/">Home</v-btn>
          <v-menu
            open-on-hover
            :offset-y="true"
            flat
            rounded="b-xl"
            class="elevation-0 pa-0"
          >
            <template #activator="{ on, attrs }">
              <v-btn v-on="on" v-bind="attrs" shaped large text
                >Web Servers</v-btn
              >
            </template>
            <v-list>
              <v-list-item :to="{ name: 'WpFarmServer' }" exact>
                WP Farm
              </v-list-item>
              <v-list-item :to="{ name: 'GoogleWebServer' }" exact>
                Google Web Server (GWS)
              </v-list-item>
              <v-list-item :to="{ name: 'LiteSpeedServer' }" exact>
                Litespeed Server
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu
            open-on-hover
            :offset-y="true"
            flat
            rounded="b-xl"
            class="elevation-0 pa-0"
          >
            <template #activator="{ on, attrs }">
              <v-btn v-on="on" v-bind="attrs" shaped large text
                >FTP Servers</v-btn
              >
            </template>
            <v-list>
              <v-list-item :to="{ name: 'CerberusPage' }" exact>
                Cerberus
              </v-list-item>
              <v-list-item :to="{ name: 'FilezillaPage' }" exact>
                Filezilla
              </v-list-item>
              <v-list-item :to="{ name: 'JscapePage' }" exact>
                JSCAPE
              </v-list-item>
            </v-list>
          </v-menu>
          
          <v-btn shaped large text :to="{ name: 'Contact' }" exact>
            Contact
          </v-btn>
        </v-btn-toggle>
      </v-app-bar>
    </v-card>
    <v-row>
      <v-col cols="11">
        <v-main>
          <router-view/>
        </v-main>
      </v-col>
      <v-col>
        <bubble-chat
          :messages="messagesList"
          :text-field="'message'"
          :sender-name-field="'username'"
          :avatar-link-field="'iconUrl'"
        />
      </v-col>
    </v-row>
    
    <v-footer class="mt-16 pt-5" dark padless>
    
      <v-card flat tile class="grey darken-4 white--text text-center">

        <v-card-text class="white--text pt-0">
          Established in early 2021, The Interior seeks to bring light to 
          revolutionary development in the technology sector. With transparency
          and enthusiasm for content, we bring the news about current happenings,
          on time and at your fingertips. Join us on this journey; DIVE into technology.
          The interior.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <span class="mr-5">
            <strong> Made with: </strong>{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </span>
          <span>
            <strong> Powered by: </strong>{{ new Date().getFullYear() }} — <strong>Vuejs</strong>
          </span>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: "App",
  
  components: {
  },

  data: () => ({
    chatPosition: 'right',
     messagesList: [
      {
          username: 'John Doe',
          message: 'Welcome! Have a question? We can answer it.',
      }
     ]
  }),

 
};
</script>

<style>
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  background-color: green;
  cursor: pointer;
}
</style>