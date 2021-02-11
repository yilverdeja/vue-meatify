import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faEye, faArrowLeft, faTrash, faUserEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// social icons help?: https://github.com/FortAwesome/vue-fontawesome/issues/123
// https://github.com/FortAwesome/vue-fontawesome/issues/266
// https://github.com/FortAwesome/vue-fontawesome/issues/215

import App from './App.vue'
import router from './router'

import { firestorePlugin } from "vuefire"

library.add(faPlus, faEye, faArrowLeft, faTrash, faUserEdit, faCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
