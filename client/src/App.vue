<template>
  <v-app>
    <v-card class="mb-10">
      <v-app-bar 
      app 
      hide-on-scroll
      color="transparent" 
      flat 
      tile>
        <v-toolbar-title>
          <span class="font-weight-bold text-h4 grey--text text--darken-3">Web </span> 
          <span class="font-weight-light text-h4" >Admin</span>
        </v-toolbar-title>

        <v-spacer />
        <v-btn-toggle shaped>
          <v-btn shaped  large text to="/">Home</v-btn>
          <v-menu
          open-on-hover
          :offset-y="true"
          flat
          rounded="b-xl"
          class="elevation-0 pa-0"
          >
            <template
            #activator="{on, attrs}"
            >
              <v-btn 
              v-on="on" 
              v-bind="attrs" 
              shaped 
              large 
              text>Web Servers</v-btn>
            </template>
            <v-list>
              <v-list-item :to="{ name: 'WpFarmServer' }" exact> WP Farm </v-list-item>
              <v-list-item :to="{ name: 'GoogleWebServer' }" exact> Google Web Server (GWS) </v-list-item>
              <v-list-item :to="{ name: 'LiteSpeedServer' }" exact> Litespeed Server </v-list-item>
            </v-list>
          </v-menu>
          <v-menu
          open-on-hover
          :offset-y="true"
          flat
          rounded="b-xl"
          class="elevation-0 pa-0"
          >
            <template
            #activator="{on, attrs}"
            >
              <v-btn 
              v-on="on" 
              v-bind="attrs" 
              shaped 
              large 
              text>FTP Servers</v-btn>
            </template>
            <v-list>
              <v-list-item :to="{ name: 'CerberusPage' }" exact> Cerberus </v-list-item>
              <v-list-item :to="{ name: 'FilezillaPage' }" exact> Filezilla </v-list-item>
              <v-list-item :to="{ name: 'JscapePage' }" exact> JSCAPE </v-list-item>
            </v-list>
          </v-menu>
        </v-btn-toggle>
      </v-app-bar>
    </v-card>
    <v-main>
      <router-view />
    </v-main>
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