<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-card-title class="text-h4">Google Web Server (GWS)</v-card-title>
          <v-card-subtitle class="pt-2">
            last updated: 7/14/2021</v-card-subtitle
          >

          <v-card-text>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="2"
              src="https://lh3.googleusercontent.com/JpmKTr2pO2EhGCB3RfTx5n0SR1iFotA7ICWThtln5ztygsGMLQNxtV8YH0aIF1odPb_uHPAmWM_lqqF0fk1C_ZjnQ45_-IZAfVSuY8oUmGtFq41CC6LehFvcNV9Tg9HpbnSxXhBZRg=w2400"
            />
            
            <p>
                a web server software owned by Google. Google uses it as its primary web infrastructure, 
              which means that they use it as the central ecosystem for web hosting. It’s the fourth most popular server 
              powering around 13% of the active websites on the internet. 

              It’s a custom Linux based web servers. The engineers at Google have said that they built this server from 
              the ground up and did not base it’s making on any other servers such as the open source Apache server.
            </p>

            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Features</v-list-item-title>
                  <v-list-item-subtitle>
                    App Engine
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    App Engine
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    App Engine
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'MyBlog',

    data() {
      return {
        paragraph: ` `
      }
    },
  })
</script>

<style scoped>
</style>