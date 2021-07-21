<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-2 mx-auto" width="900" outlined tile>
          <v-container>
            <v-row>
              <v-col>
                <v-card class="pa-2" outlined tile>
                  <v-card-title class="text-h4">JSCAPE - Secure FTP server</v-card-title>
                  <v-card-subtitle class="pt-2"
                    >By: John-paul Panton | last updated:
                    7/17/2021</v-card-subtitle
                  >
                  <v-divider class="pt-2" />
                  <v-card-text>
                    <v-row>
                      <v-col class="pa-6 my-10">
                        <v-img
                          lazy-src="https://picsum.photos/id/11/10/6"
                          aspect-ratio="3.4"
                          src="https://lh3.googleusercontent.com/-DxNChkkbbNOHMPC6i9oSjZOwamXyeaAzulGdOf_ZQfGfJsQZDPKzlFo09spgxB5gvG827u1xFAKOazd4GKVsRvBjKaX_4wWAjaZlSMK2SV29lYvlAOVDwexUrn8xoA3vAon7D8XcQ=w2400"
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
                            JSCAPE MFT Server is an advanced secure File
                            Transfer Protocol server. It supports SFTP, FTPS,
                            AS2, OFTP2, and other secured protocols. It has
                            capabilities of event logging, encryption of
                            data-at-rest, additional authentication, access
                            control mechanisms, etc. It has features for DLP and
                            password management. JSCAPE offers managed file
                            transfer software and services. It also provides
                            workflow management for handling many actions before
                            and after filing the transfer itself. It is one of
                            the leading providers of these solutions. Its focus
                            is on ease of automation, security, and reliability.
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-card flat>
                          <v-card-text class="text-subtitle-1 text--primary">
                            <v-data-table
                              :headers="mainFeatureHeaders"
                              :items="mainFeatures"
                              hide-default-footer
                              class="mytable"
                            >
                              <template #item="{ item, headers }">
                                <template v-for="header in headers">
                                  <tr :key="item[header.value]">
                                    <td >
                                      <v-icon>mdi-chevron-right</v-icon>
                                    </td>
                                    <td>
                                      {{ item[header.value] }}
                                    </td>
                                    
                                  </tr>
                                </template>
                              </template>
                            </v-data-table>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-card flat>
                          <v-card-title class="text-h5">Conclusion</v-card-title>
                          <v-list>
                            <v-list-item
                              dense
                            >
                            <v-list-item-content
                              class="text-subtitle-1 text--primary"
                            >
                                JSCAPE is one of the popular providers of 
                                the secure File Transfer Protocol server, managed 
                                file transfer, and AS2 Server software. It offers 
                                solutions for securing and managing file transfers 
                                through a lot of users and multiple OS and file 
                                transfer protocols. Various industry verticals such 
                                as healthcare, finance, banking, logistics, government, 
                                etc. use JSCAPE.
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
          text: "Features",
          value: "feature",
          sortable: false,
          align: "left",
          class: "text-h5 text--primary",
        },
      ],

      mainFeatures: [
        {
          feature: "JSCAPE can encrypt the data in motion, hence the files will remain secure even during transmission.",
        },
        {
          feature: "It has features for authentication so that malicious individuals cannot access files.",
        },
        {
          feature: " It provides Data-at-rest encryption and can protect files during storage.",
        },
        {
          feature: " Its access control capabilities will let you grant access to files only to authorized people.",
        },
      ],
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