<template>
    <div class="magnifier" id="magnifier1">
        <div class="magnifier-container">
            <div class="images-cover"></div>
            <!--当前图片显示容器-->
            <div class="move-view"></div>
            <!--跟随鼠标移动的盒子-->
        </div>
        <div class="magnifier-assembly">
            <div class="magnifier-btn">
                <span class="magnifier-btn-left">&lt;</span>
                <span class="magnifier-btn-right">&gt;</span>
            </div>
            <!--按钮组-->
            <div class="magnifier-line">
                <ul class="clearfix animation03">
                    <li v-for="item in imglist" :key="item.id">
                        <div class="small-img">
                            <img :src="item.original_path" />
                        </div>
                    </li>
                </ul>
            </div>
            <!--缩略图-->
        </div>
        <div class="magnifier-view"></div>
        <!--经过放大的图片显示容器-->
    </div>
</template>

<script>
//导入jQuery放大镜插件，该插件依赖于jQuery变量，所有需要在该插件的源码里import了 一下jquery
import {} from "../../../../../lib/imgzoom/js/magnifier.js";
//导入$,接下来要调用插件的方法
import $ from "jquery";

export default {
  props: ["imglist"],
  //该生命周期函数 只会执行一次，执行的那一次，imglist刚好 是空数组（父组件使用异步的方式获取数据）
  //等imglist有值的时候，该函数不会执行了，那么插件也无法生效
  mounted() {
    //所以也不在这里使用插件
  },
  //监听imglist的变化，每次变化都要重新的初始化放大镜插件！！！
  watch: {
    imglist() {
      // 关于$nextTick的官方文档: https://cn.vuejs.org/v2/api/#vm-nextTick
      this.$nextTick(function() {
        //imgzoon中的方法
        var _magnifier = $().imgzoon({
          magnifier: "#magnifier1", //最外层的大容器
          width: 370, //承载容器宽
          height: 370, //承载容器高
          moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
          zoom: 2 //缩放比例
        });
      });
    }
  }
};
</script>

<style scoped lang='less'>

@import url('../../../../../lib/imgzoom/css/magnifier.css');

</style>