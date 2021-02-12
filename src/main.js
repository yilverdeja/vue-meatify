import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMeta from 'vue-meta'
import VueGtag from 'vue-gtag';

import { library } from '@fortawesome/fontawesome-svg-core'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope, faCommentDots} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

import { firestorePlugin } from "vuefire"

library.add(faEnvelope, faCommentDots, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(firestorePlugin)
Vue.use(VueMeta)
Vue.use(VueGtag, {
  config: {id: "G-PMTJB2K6WE"}
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
