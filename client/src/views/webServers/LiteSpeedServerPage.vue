<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-2 mx-auto" width="900" outlined tile>
          <v-container>
            <v-row>
              <v-col>
                <v-card class="pa-2" outlined tile>
                  <v-card-title class="text-h4">Litespeed server</v-card-title>
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
                          src="https://lh3.googleusercontent.com/tllUG3fMQUJV_6ttMGhGeroHPH1mbv2it7Th64AKNHfBs3Ci1Tprqu50cdLlooPPwBhbLGJKSUWKo_Dxk6vlKhU0gwIboFEshxaKGKngmSqIUvirn0fbHozkylLcqig45gts4keCyg=w2400"
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
                            This is another popular server and ties at the
                            number four spot with GWS. This web server was
                            released officially in 2003 and grew tremendous to
                            be recognized as the 16th most popular server in
                            2008. Litespeed uses the same configurations as
                            Apache and runs at an extremely high speed. The
                            software presents a seamless transfer from Apache to
                            a more efficient technology. It was designed to read
                            and operate from Apache’s .htaccess and httpd.conf
                            files so that no reconfiguration will be required
                            when making the switch.Thisserver allows an IT
                            networking services company tohandle thousands of
                            customers at the same time while using minimal
                            memory and CPU. It has zero downtime and completely
                            eliminates the use of 3rd party caching layers. Any
                            company looking for a server that never compromises
                            on security, compatibility, convenience, and
                            performance will enjoy using this server.
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-card flat>
                          <v-card-title class="text-h5">LiteSpeed Features</v-card-title>
                          <v-card-text class="text-subtitle-1 text--primary pb-5">
                            LiteSpeed beefy feature set provides users with high
                            performance, high availability and high scalability
                            options. Its security features defends against a
                            variaty of cyberattacks ultimately protecting the
                            web server before the attacks can penetrate. The
                            software has 17 basic features that include
                            unlimited IP and name-based hosting, scripting
                            languages and server APIs.
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
																			<v-icon>mdi-chevron-right</v-icon> {{ item[header.value] }}
																		</td>
																	</template>
																</tr>
															</template>
														</v-data-table>
														<v-data-table
															:headers="securityFeatureHeaders"
															:items="securityFeatures"
															hide-default-footer
															class="mytable mb-7"
														>
															<template #item="{ item, headers }">
																<tr>
																	<template v-for="header in headers">
																		<td :key="item[header.value]">
																			<v-icon>mdi-chevron-right</v-icon> {{ item[header.value] }}
																		</td>
																	</template>
																</tr>
															</template>
														</v-data-table>
														<v-data-table
															:headers="basicFeatureHeaders"
															:items="basicFeatures"
															hide-default-footer
															class="mytable mb-7"
														>
															<template #item="{ item, headers }">
																<tr>
																	<template v-for="header in headers">
																		<td :key="item[header.value]">
																			<v-icon>mdi-chevron-right</v-icon> {{ item[header.value] }}
																		</td>
																	</template>
																</tr>
															</template>
														</v-data-table>
														<v-data-table
															:headers="performanceFeatureHeaders"
															:items="performanceFeatures"
															hide-default-footer
															class="mytable"
														>
															<template #item="{ item, headers }">
																<tr>
																	<template v-for="header in headers">
																		<td :key="item[header.value]">
																			<v-icon>mdi-chevron-right</v-icon> {{ item[header.value] }}
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
													<v-data-table
													:headers="osSupportHeaders"
													:items="supportedOperatedSystem"
													hide-default-footer
                          class="mytable"
													>
														<template #item="{ item, headers }">
                              <tr>
                                <template v-for="header in headers">
                                  <td :key="item[header.value]">
                                    <v-icon>mdi-chevron-right</v-icon> {{ item[header.value] }}
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
                          <v-card-title class="text-h5">Programming Language Support</v-card-title>
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
            "Event-driven architecture with extremely low resource (CPU and RAM) overhead",
        },
        {
          feature:
            "Handles hundreds of thousands of concurrent connections without load spikes",
        },
        {
          feature:
            "High-performance coding using kqueue (FreeBSD and OS X), epoll (Linux), /dev/poll (Solaris), and poll",
        },
        {
          feature:
            "Worker processes for scalability. Ability to bind certain processes to particular workers",
        },
        {
          feature:
            "WebAdmin GUI with build-in real-time statistics graphical dashboard",
        },
        {
          feature: "Rewrite engine uses Apache mod_rewrite syntax",
        },
        {
          feature: "Support of third-party modules through API (LSIAPI)",
        },
      ],

      securityFeatureHeaders: [
        {
          text: "Security Features",
          value: "feature",
          sortable: false,
          align: "left",
          class: "title",
        },
      ],

      securityFeatures: [
        {
          feature: "SSL Support",
        },
        {
          feature: "Security Controls",
        },
        {
          feature: "Server Alert",
        },
      ],

      performanceFeatureHeaders: [
				{
          text: "Performance Features",
          value: "feature",
          sortable: false,
          align: "left",
          class: "title",
        },
			],

      performanceFeatures: [
        {
          feature: "SSL Support",
        },
        {
          feature: "Security Controls",
        },
        {
          feature: "Server Alert",
        },
      ],

      basicFeatureHeaders: [
        {
          text: "Basic HTTP Server Features",
          value: "feature",
          sortable: false,
          align: "left",
          class: "title",
        },
      ],

      basicFeatures: [
        {
          feature: "Unlimited concurrent connections",
        },
        {
          feature: "Accept-filters and TCP_DEFER_ACCEPT support",
        },
        {
          feature: "Chunked transfer encoding",
        },
        {
          feature: "Keep-alive connections",
        },
        {
          feature: "IPv4 and IPv6",
        },
        {
          feature: "Entity tags",
        },
        {
          feature: "Multi-range requests",
        },
        {
          feature: "Exact/prefix/regex-based matching",
        },
        {
          feature: "Unlimited name-based and IP-based virtual hosting",
        },
        {
          feature: "Custom error pages",
        },
        {
          feature: "Autoindexing",
        },
        {
          feature: "Set Cache‑Control headers",
        },
      ],

			osSupportHeaders: [
				{
          text: "Operating System Support",
          value: "feature",
          sortable: false,
          align: "left",
          class: "text-h5 text--primary",
        },
			],

			supportedOperatedSystem: [
				{ feature: "Linux" },
				{ feature: "FreeBSD" },
				{ feature: "Mac OSX" },
				{ feature: "Solaris" }
			],

      programmingLanguages: [
        "PHP",
        "Python",
        "Java",
        "Ruby",
        "Perl",
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