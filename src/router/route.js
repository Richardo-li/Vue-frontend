import VueRouter from "vue-router";

import GoodsHomeComponent from '../component/goods/GoodsHome.vue';
import GoodsDetailComponent from '../component/goods/detail/GoodsDetail.vue';
import GoodsMoreComponent from '../component/goods/more/GoodsMore.vue';




//对外导出配置好的路由实例
export default new VueRouter({
    routes: [

        // 默认访问商品首页        redirect 为重定向
        { path: '/', redirect: '/goods' },

        // 商品模块
        { name: 'g', path: '/goods', component: GoodsHomeComponent },
        { name: 'gd', path: '/goods/detail/:id', component: GoodsDetailComponent },
        { name: 'gm', path: '/goods/more', component: GoodsMoreComponent }

    ]

})