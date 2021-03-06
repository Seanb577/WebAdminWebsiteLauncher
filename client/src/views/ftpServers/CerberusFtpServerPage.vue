<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-2 mx-auto" width="900" outlined tile>
          <v-container>
            <v-row>
              <v-col>
                <v-card class="pa-2" outlined tile>
                  <v-card-title class="text-h4 font-weight-bold">What can Cerberus FTP Server offer you?</v-card-title>
                  <v-card-subtitle class="pt-2"
                    >By: John-paul Panton | last updated:
                    7/17/2021</v-card-subtitle
                  >
                  <v-divider class="pt-2" />
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-img
                          lazy-src="https://picsum.photos/id/11/10/6"
                          aspect-ratio="2"
                          src="https://lh3.googleusercontent.com/TmhAtOfqMgOinB9SN-wKgbVCaxMBT2JGVa2aGKEnnnoAROkEIKRz9NcqejPRzZGXPZmazRbRFFJD4AYE4sHZTsSFVIuCyHIMl7mqpkTq8mIVTQHlc2ws1d9L4MI3-ljk0hGWILQauA=w2400"
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
                            Cerberus FTP Server 11 is a secure and reliable file 
                            transfer solution that supports Windows Server 2019, 
                            2016, 2012, 10, 8, and 7. It is a HIPAA compliant and 
                            FIPS 140-2 validated solution. It has advanced reporting 
                            and comprehensive auditing capabilities. All major file 
                            transfer protocols are supported by this tool. Cerberus 
                            provides ultimate security, complete server control, 
                            transparent reporting, and streamlined & flexible integration 
                            & access tools. It offers web-based secure file access and 
                            trusted compliance tools.
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
                              <v-list-item-content>
                                <v-list-item-content
                                  class="text-subtitle-1 text--primary"
                                >
                                  Cerberus is a powerful solution with Web 
                                  File Transfer Client and advanced Ad-hoc file 
                                  sharing. It offers strong regulatory controls. 
                                  It offers the solution with three editions. 
                                  Cerberus also has other solutions such as file 
                                  server security, managed file transfer, multi-protocol
                                  file transfer, etc.
                                </v-list-item-content>
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
      rating: 4,
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
          feature: "Cerberus provides the features of basic secure file transfer, 50 to unlimited connections, and web administration."
        },
        {
          feature: "With premium plans, it offers the features of file retention policies, event automation, email notification, ad-hoc file sharing, and detailed activity reporting.",
        },
        {
          feature: "It offers the features of two-factor authentication, secure SSL encryption, IP auto-banning, and active directory & LDAP.",
        },


        {
          feature: "Small installation size",
        },
        {
          feature: "Low CPU and memory usage",
        },
        {
          feature: "Easy to use interface",
        },
        {
          feature: "Access and administration of web services",
        },
        {
          feature: "NT nativve service support",
        },
        {
          feature: "Taskbar icon control and status indicator",
        },
        {
          feature: "Hidden Server mode (Hides server Window)",
        },
        {
          feature: "Transfer and connection statistics",
        },
        {
          feature: "Connections limit and timeout controls",
        },
        {
          feature: "Taskbar icon control and status indicator",
        },
        {
          feature: "User and Group Support with per User Virtual Directories",
        },
        {
          feature: "UTF-8 - Display filenames in foreign languages with their native charset",
        },
        {
          feature: "Force Secure Client-Server Connections",
        },
        {
          feature: "Fine-Grained Directory Access Restrictions",
        },
        {
          feature: "IP Manager to automatically block malicios connection attempts",
        },
        {
          feature: "FIPS 140-2 Validated Cryptography",
        },
        {
          feature: "Secure SSL / TLS Encryption",
        },
        {
          feature: "RFC1579-Firewall -Friendly FTP",
        },
        {
          feature: "Adherence to RFC959 and RFC1123",
        },
        {
          feature: "Thread priority control",
        },
        {
          feature: "Transfer and connection statistics",
        },
        {
          feature: "Limit and timeout controls",
        },
        {
          feature: "Easy-to-use manager to control user access to files and file operations",
        },
        {
          feature: "Control over most aspects of server configuration",
        },
        {
          feature: "Resume failed transfers!",
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

>>> .theme--light.v-data-table
  > .v-data-table__wrapper
  > table{
    border-spacing: 0 .9rem;
  }

</style>