<template>
   <v-container>
    <v-row justify="center" class="mt-16">
      <v-col md="6">
        <v-row>
          <v-col>   
            <v-hover
              v-slot="{ hover }"
              open-delay="100"
            >    
               <v-card class="elevation-0" :elevation="hover ? 4 : 0"  :to="{ name: 'LiteSpeedServer'}">
                <v-card-title class="pa-0">
                  <v-img
                      lazy-src="https://picsum.photos/id/11/10/6"
                      aspect-ratio="2"
                      src="https://lh3.googleusercontent.com/tllUG3fMQUJV_6ttMGhGeroHPH1mbv2it7Th64AKNHfBs3Ci1Tprqu50cdLlooPPwBhbLGJKSUWKo_Dxk6vlKhU0gwIboFEshxaKGKngmSqIUvirn0fbHozkylLcqig45gts4keCyg=w2400"
                    />
                </v-card-title>
                <v-card-subtitle :class="hover ? 'red--text' : 'white--text'" class="text-h5 font-weight-bold py-7 grey darken-4 white--text">
                  LiteSpeed Web Server for all your web hosting needs.
                  <v-rating
                    v-model="rating"
                    background-color="purple lighten-3"
                    color="purple"
                  />
                </v-card-subtitle>
              </v-card>
            </v-hover> 
          </v-col>
        </v-row>
        <v-row v-for="(posts, index) in articles" :key="index">
          <v-col v-for="(post, index) of posts" :key="index">
            <v-hover
              v-slot="{ hover }"
              open-delay="100"
            >    
              <v-card v-if="post.link" :elevation="hover ? 4 : 0" :to="{ name: post.link}">
                <v-card-title class="pa-0">
                  <v-img
                      lazy-src="https://picsum.photos/id/11/10/6"
                      aspect-ratio="2"
                      :src="post.img"
                    />
                </v-card-title>
                <v-card-subtitle :class="hover ? 'red--text' : 'white--text'" class="text-body-1 font-weight-bold py-7 grey darken-4">
                  {{ post.headline }}
                  <v-rating
                    v-model="post.rating"
                    background-color="purple lighten-3"
                    color="purple"
                  />
                </v-card-subtitle>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>

      <v-col md="4">
        <v-card class="elevation-0 " tile>
          <v-card-title class="white--text mb-4 grey darken-4">
            <v-icon class="white--text mr-2">
              mdi-newspaper-variant-outline
            </v-icon>
            Latest Posts
          </v-card-title>
          <v-card-subtitle class="pa-0">
            <v-list>
              <v-list-item v-for="(post, index) in recentPosts" :key="index" :to="{name: post.link}" style="border-bottom: 1px dashed grey">
                <v-list-item-content class="text-subtitle-1 font-weight-bold">
                  {{ post.headline }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-subtitle>
          
        </v-card>
      </v-col>
    </v-row>
   </v-container>
</template>

<script>
  export default {
    name: 'Home',
    
    data() {
      return {
        rating: 4,
        articles: [
          [
            {
              headline:"LiteSpeed Web Server for all your web hosting needs.",
              img:"https://lh3.googleusercontent.com/tllUG3fMQUJV_6ttMGhGeroHPH1mbv2it7Th64AKNHfBs3Ci1Tprqu50cdLlooPPwBhbLGJKSUWKo_Dxk6vlKhU0gwIboFEshxaKGKngmSqIUvirn0fbHozkylLcqig45gts4keCyg=w2400",
              link: "LiteSpeedServer",
              rating: 4
            },
            {
              headline:"What does Google Web Server (GWS) offer.",
              img:"https://lh3.googleusercontent.com/JpmKTr2pO2EhGCB3RfTx5n0SR1iFotA7ICWThtln5ztygsGMLQNxtV8YH0aIF1odPb_uHPAmWM_lqqF0fk1C_ZjnQ45_-IZAfVSuY8oUmGtFq41CC6LehFvcNV9Tg9HpbnSxXhBZRg=w2400",
              link: "GoogleWebServer",
              rating: 5
            }
          ],
          [
            {
              headline:"Everthing you need to know about WP Farm server.",
              img:"https://lh3.googleusercontent.com/MvdxWdpS9bbXf6xMhzEJiIaLBSZ2Cvra631XqtCK4EldTzUrEmUt8kRVp-Y766GbsVozTm-Fa7pAdIYQnlS2XnENJE8TP0liv91gdXJpFA9e5FNLJJjINyN_wC6-RWRVTis--Xf0Ww=w2400",
              link: "WpFarmServer",
              rating: 4
            },
            {
            }
          ],
        ],

        recentPosts: [
          {
            headline: 'FileZilla FTP Server, is it the right fit for you?',
            img:"https://lh3.googleusercontent.com/Y0aZzgV3r-W5aQgTf1S5tuKqTq9JaZnW-GkZITEpxuFojA5tq_ikBExZnVXYDvf4BKNwUL42zX8vEt0UcggIau9dxMG5znVOaeDubfGCDGzzGV9MpSIWt8XqAhSbf0Dmv4Mnyo1DAA=w2400",
            link: 'FilezillaPage'
          },
          {
            headline: 'What can Cerberus FTP Server offer you?',
            img:"https://lh3.googleusercontent.com/TmhAtOfqMgOinB9SN-wKgbVCaxMBT2JGVa2aGKEnnnoAROkEIKRz9NcqejPRzZGXPZmazRbRFFJD4AYE4sHZTsSFVIuCyHIMl7mqpkTq8mIVTQHlc2ws1d9L4MI3-ljk0hGWILQauA=w2400",
            link: 'CerberusPage'
          },
          {
            headline: 'JSCAPE - Secure FTP server',
            img:"https://lh3.googleusercontent.com/-DxNChkkbbNOHMPC6i9oSjZOwamXyeaAzulGdOf_ZQfGfJsQZDPKzlFo09spgxB5gvG827u1xFAKOazd4GKVsRvBjKaX_4wWAjaZlSMK2SV29lYvlAOVDwexUrn8xoA3vAon7D8XcQ=w2400",
            link: 'JscapePage'
          },
        ]
      }
    },
  }
</script>
