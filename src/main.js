//导入Vue
import Vue from "vue";
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//导入总的css样式
import "./css/style.css";

//引入自己写的Vue插件
import Filters from "./filter/filter.js";


//启动vue路由插件  （只要是vue插件，就要用use启动，不是vue插件就不用！）
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Filters);

//导入根组件
import AppComponent from "./component/App.vue";

import vueRouter from "./router/route.js";


// 导入配置后的axios与api ， 并注入到Vue原型中， 将来在实例通过this.$http调用
import api from "./js/api_config.js";
import axios from "./js/axios_config.js";
Vue.prototype.$http = axios;
Vue.prototype.$api = api;


new Vue({
    el: '#app',
    render: c => c(AppComponent),
    router: vueRouter
})