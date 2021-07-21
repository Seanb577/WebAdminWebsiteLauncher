<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-2 mx-auto" width="900" outlined tile>
          <v-container>
            <v-row>
              <v-col>
                <v-card class="pa-2" outlined tile>
                  <v-card-title class="text-h4 font-weight-bold">FileZilla FTP Server, is it the right fit for you?</v-card-title>
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
                          src="https://lh3.googleusercontent.com/Y0aZzgV3r-W5aQgTf1S5tuKqTq9JaZnW-GkZITEpxuFojA5tq_ikBExZnVXYDvf4BKNwUL42zX8vEt0UcggIau9dxMG5znVOaeDubfGCDGzzGV9MpSIWt8XqAhSbf0Dmv4Mnyo1DAA=w2400"
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
                            FileZilla FTP Solution supports FTP, FTPS, and SFTP. 
                            This open-source tool is available for free. In addition 
                            to these protocols, FileZilla Pro edition provides 
                            support to WebDAV, Amazon S3, Backblaze B2, Dropbox, 
                            Microsoft OneDrive, Google Drive, Microsoft Azure Blob, 
                            File Storage, and Google Cloud Storage. It supports 
                            cross-platform. (Windows, Linux, Mac OS, BSD, etc.)
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-card flat>
                          <v-card-text
                            class="text-subtitle-1 text--primary pb-5"
                          >
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
                                FileZilla is a free FTP Server. It is a fast and 
                                reliable cross-platform client that supports FTP, FTPS, 
                                and SFTP. It has an intuitive graphical user interface 
                                and hence becomes easy to use. It supports multiple languages.
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
                <v-card class="elevation-0">
                  <v-card-title class="justify-center elevation-0">  
                    <v-rating
                      v-model="rating"
                      background-color="purple lighten-3"
                      color="purple"
                      large
                    />
                  </v-card-title>
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
      rating: 5,
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
          feature:
            "FileZilla is a free and open-source FTP and FTPS Server.",
        },
        {
          feature:
            "It provides IPv6 support.",
        },
        {
          feature:
            "It provides functionalities to resume and transfer large files, i.e. files larger than 4GB.",
        },
        {
          feature:
            "It has features of a powerful Site Manager and Transfer Queue.",
        },
        {
          feature:
            "It offers many more features like remote file search, remote file editing, configurable transfer speed limits, etc.",
        }
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