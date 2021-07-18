<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-2 mx-auto" width="900" outlined tile>
          <v-container>
            <v-row>
              <v-col>
                <v-card class="pa-2" outlined tile>
                  <v-card-title class="text-h4">WP Farm server</v-card-title>
                  <v-card-subtitle class="pt-2"
                    >By: John-paul Panton | last updated:
                    7/16/2021</v-card-subtitle
                  >
                  <v-divider class="pt-2" />
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-img
                          lazy-src="https://picsum.photos/id/11/10/6"
                          aspect-ratio="2"
                          src=""
                        />
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-card class="pa-0" flat>
                          <v-card-title class="text-h5">
                            Overview
                          </v-card-title>
                          <v-card-text class="text-subtitle-1 text--primary">
                            WP Farm is by far the newest and most advanced web
                            server on the market. WordPress powers more than a third 
                            of the websites on the internet. There’s a good reason for that. 
                            It’s a powerful, user-friendly, easily customized platform that 
                            gets regular updates. WP Farm offers Managed WordPress Hosting 
                            which  is different from traditional hosting in a few important ways. 
                            The main difference is that you have a dedicated team of specialists 
                            ready to assist you not only with your hosting, but with the design, 
                            performance and security of your WordPress site as well. It’s a 
                            wonderful all-in-one solution for the website owner who wants to 
                            focus on their work and not the operation of their site.
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-card flat>
                          <v-card-title class="text-h5"
                            >WP Farm Features</v-card-title
                          >
                          <v-card-text
                            class="text-subtitle-1 text--primary pb-5"
                          >
                            WP Farm offers a range of
                            pre-installed templates through elementor, 24/7
                            support, and AMP installation for any wordpress
                            website. These web hosting services include cyber
                            security, site speed, and website repair in one.
                            <v-data-table
                              :headers="mainFeatureHeaders"
                              :items="mainFeatures"
                              hide-default-footer
                              class="mytable my-7"
                            >
                              <template #item="{ item, headers }">
                                <tr>
                                  <template v-for="header in headers">
                                    <td :key="item[header.value]">
                                      <v-icon>mdi-chevron-right</v-icon>
                                      {{ item[header.value] }}
                                    </td>
                                  </template>
                                </tr>
                              </template>
                            </v-data-table>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-card flat>
                          <v-card-title class="text-h5"
                            >Programming Language Support</v-card-title
                          >
                          <v-list>
                            <v-list-item
                              v-for="(
                                programmingLanguage, index
                              ) in programmingLanguages"
                              :key="index"
                              dense
                            >
                              <v-list-item-icon>
                                <v-icon class="pt-5">mdi-chevron-right</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-content
                                  class="text-subtitle-1 text--primary"
                                  :key="index"
                                >
                                  {{ programmingLanguage }}
                                </v-list-item-content>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      mainFeatureHeaders: [
        {
          text: "Main Features",
          value: "feature",
          sortable: false,
          align: "left",
          class: "title",
        },
      ],

      mainFeatures: [
        {
          feature:
            "Fastest Page Loads",
        },
        {
          feature:
            "Drag and Drop Starter Themes",
        },
        {
          feature:
            "Daily Backups",
        },
        {
          feature:
            "Developer Friendly",
        },
        {
          feature:
            "Friendly 24/7 Support",
        }
      ],

      programmingLanguages: ["Word Press"],
    };
  },
});
</script>

<style scoped >
>>> .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:not(.v-data-table__mobile-row),
>>> .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:not(.v-data-table__mobile-row),
>>> .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border-bottom: 0;
}
</style>