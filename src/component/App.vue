<template>
  <main>
 
    <!-- 头部组件 -->
    <header-comp></header-comp>

     <!-- 中间部分 -->
     <goods-home></goods-home>


    <!-- 脚部组件 -->
    <footer-comp></footer-comp>
 

  </main>
</template>

<script>

//导入该组件的子组件  头部与底部
import HeaderComp from "./frame/Header.vue";
import FooterComp from "./frame/Footer.vue";

import GoodsHome from "./goods/GoodsHome.vue";

import $ from "jquery";   //引入jQuery !!!!!!!!!!!

export default {
   components:{
      headerComp:HeaderComp,
      footerComp:FooterComp,
      goodsHome:GoodsHome
   },
    // 模版挂载到视图后执行, 这时候可以操作页面上的DOM了     jquery 操作
   mounted(){

       $("#menu2 li a").wrapInner( '<span class="out"></span>' );
       $("#menu2 li a").each(function() {
           $( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
       });

       $("#menu2 li a").hover(function() {
           $(".out",	this).stop().animate({'top':	'48px'},	300); // move down - hide
           $(".over",	this).stop().animate({'top':	'0px'},		300); // move down - show

       }, function() {
           $(".out",	this).stop().animate({'top':	'0px'},		300); // move up - show
           $(".over",	this).stop().animate({'top':	'-48px'},	300); // move up - hide
       });



   }



};
</script>

<style scoped lang='less'>

</style>