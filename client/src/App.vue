<template>
  <v-app>
    <v-card class="mb-16">
      <v-app-bar app hide-on-scroll color="transparent" flat tile>
        <v-toolbar-title>
          <span class="font-weight-bold text-h4 grey--text text--darken-3"
            >Web
          </span>
          <span class="font-weight-light text-h4">Admin</span>
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
        </v-btn-toggle>
      </v-app-bar>
    </v-card>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="mt-16" dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">

        <v-card-text class="white--text pt-0">
          This Website was created 
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
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