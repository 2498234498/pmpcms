import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Page from './components/common/Pageination'
import './assets/reset.css'//引入css
import iView from 'iview' // 导入组件库  
import 'iview/dist/styles/iview.css' // 导入样式 
Vue.use(iView)
Vue.component('Page',Page)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
