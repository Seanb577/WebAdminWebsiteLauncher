<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-2 mx-auto" width="900" outlined tile>
          <v-container>
            <v-row>
              <v-col>
                <v-card class="pa-2" outlined tile>
                  <v-card-title class="text-h4">What does Google Web Server (GWS) offer.</v-card-title>
                  <v-card-subtitle class="pt-2"
                    >By: Sheldon Wilton | last updated:
                    7/14/2021</v-card-subtitle
                  >
                  <v-divider class="pt-2" />
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-img
                          lazy-src="https://picsum.photos/id/11/10/6"
                          aspect-ratio="2"
                          src="https://lh3.googleusercontent.com/JpmKTr2pO2EhGCB3RfTx5n0SR1iFotA7ICWThtln5ztygsGMLQNxtV8YH0aIF1odPb_uHPAmWM_lqqF0fk1C_ZjnQ45_-IZAfVSuY8oUmGtFq41CC6LehFvcNV9Tg9HpbnSxXhBZRg=w2400"
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
                            a web server software owned by Google. Google uses
                            it as its primary web infrastructure, which means
                            that they use it as the central ecosystem for web
                            hosting. It’s the fourth most popular server
                            powering around 13% of the active websites on the
                            internet. It’s a custom Linux based web servers. The
                            engineers at Google have said that they built this
                            server from the ground up and did not base it’s
                            making on any other servers such as the open source
                            Apache server.
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-card class="pa-0" flat>
                          <v-card-title class="text-h5">Features</v-card-title>
                          <v-card-text class="text-subtitle-1 text--primary pb-10">
														Google's Web servers are hosted on one of the two cloud 
														computing engine: Compute Engine and App Engine.
                            Google Compute Engine (GCE) is an Infrastructure as
                            a Service (IaaS) offering that allows clients to run
                            workloads on Google's physical hardware. Google
                            Compute Engine provides a scalable number of virtual
                            machines (VMs) to serve as large compute clusters
                            for that purpose. Google App Engine (often referred
                            to as GAE or simply App Engine) is a cloud computing
                            platform as a service for developing and hosting web
                            applications in Google-managed data centers.
                            Applications are sandboxed and run across multiple
                            servers.
                          </v-card-text>
                          <v-data-table
                            :headers="headers"
                            :items="features"
                            hide-default-footer
														class="mytable"
                          >
														<template #item="{  item, index, headers}">
															<tr>
																<template v-for="(header) in headers">	
																	<td :key="item[header.value]">
																		{{ !!item[header.value] ? index+1 + '. ' : '' }} {{item[header.value] }}
																	</td>
																</template>
															</tr>
														</template>
                          </v-data-table>
                        </v-card>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-card flat>
                          <v-card-title class="text-h5">Operating System Support</v-card-title>
                          <v-card-subtitle class="text-subtitle-1 text--primary pt-7"> 
                            <v-icon>mdi-chevron-right</v-icon> Windows and Linux
                          </v-card-subtitle>
                        </v-card>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-card flat>
                          <v-card-title class="text-h5">Programming Language Support</v-card-title>
                          <v-list>
                            <v-list-item  v-for="(programmingLanguage, index) in programmingLanguages" :key="index" dense>
                              <v-list-item-icon>
                                <v-icon class="pt-5">mdi-chevron-right</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content 
                              class="text-subtitle-1 text--primary"
                              :key="index">
                                {{programmingLanguage }}
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
      headers: [
        {
          text: "App Engine",
          value: "feat_app_engine",
          sortable: false,
          align: "left",
        },
        {
          text: "Compute Engine",
          value: "feat_compute_engine",
          sortable: false,
          align: "left",
        },
      ],

      features: [
        {
          feat_compute_engine: "Virtual Machine Manager",
          feat_app_engine: "Popular Language Support",
        },
        {
          feat_compute_engine: "Confidential Virtual Machines",
          feat_app_engine: "Fully Managed Environment",
        },
        {
          feat_compute_engine: "Predefined Virtual Machine Types",
          feat_app_engine: "Powerful APplication Diagnostics",
        },
        {
          feat_compute_engine: "Preemptible Virtual Machine Types",
          feat_app_engine: "Application Versioning",
        },
        {
          feat_compute_engine: "Custom Virtual Machine Types",
          feat_app_engine: "Application Security",
        },
        {
          feat_compute_engine: "Instance Groups",
        },

        {
          feat_compute_engine: "Persistent Disks",
        },

        {
          feat_compute_engine: "Encrypted Local SSD",
        },
        {
          feat_compute_engine: "GPU Accelerators",
        },
        {
          feat_compute_engine: "Live Migration for Virtual Machines",
        },
        {
          feat_compute_engine: "OS patch Management",
        },
      ],

      programmingLanguages: [
        'PHP',
        'MySQL',
        'Python',
        'Java',
        'Ruby',
        'Nodejs',
        'JavaScript',
        'Asp.net'
      ]
    };
  },
});
</script>

<style scoped >
	>>>.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), 
	>>>.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row),
	>>>.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th
	{
		border-bottom: 0;
	}
</style>