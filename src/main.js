import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import './assets/font/iconfont.css'
// import './assets/css/swiper.min.css'
// import './assets/js/swiper.min.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

// import Scroller from '@/components/Scroller'
// Vue.component('Scroller',Scroller);

import Loading from '@/components/Loading'
Vue.component('Loading',Loading);
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
