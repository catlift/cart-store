import Vue from 'vue'
import App from './App.vue'

// 使用 axios 
import api from "@/axios/axios.js"
Vue.prototype.axios = api

// 使用 ElementUI
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
