import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LiteSpeedServerPage from '../views/webServers/LiteSpeedServerPage.vue'
import GoogleWebServerPage from '../views/webServers/GoogleWebServerPage.vue'
import WpFarmServerPage from '../views/webServers/WpFarmServerPage.vue'
import CerberusPage from '../views/ftpServers/CerberusFtpServerPage.vue'
import FilezillaPage from '../views/ftpServers/FilezillaFtpServerPage.vue'
import JscapePage from '../views/ftpServers/JscapeFtpServerPage.vue'
import ContactPage from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/webServers/GoogleWebServer',
    name: 'GoogleWebServer',
    component: GoogleWebServerPage
  },
  {
    path: '/webServers/LiteSpeedServer',
    name: 'LiteSpeedServer',
    component: LiteSpeedServerPage
  },
  {
    path: '/webServers/WpFarmServer',
    name: 'WpFarmServer',
    component: WpFarmServerPage
  },
  {
    path: '/ftpServers/Cerbus',
    name: 'CerberusPage',
    component: CerberusPage
  },
  {
    path: '/webServers/Filezilla',
    name: 'FilezillaPage',
    component: FilezillaPage
  },
  {
    path: '/webServers/JSCAPE',
    name: 'JscapePage',
    component: JscapePage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
