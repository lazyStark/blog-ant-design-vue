/*
 * @Author: siwenfeng
 * @Date: 2020-06-12 16:20:48
 * @LastEditTime: 2020-06-16 16:36:32
 * @Description: this is ....
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.scss';
import './ant-design-vue'
// import $ from 'jquery'
// import bootstrap from 'bootstrap';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
