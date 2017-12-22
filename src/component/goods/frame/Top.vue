<template>
  <!-- 商品顶部 -->
  <div class="section">
    <div class="wrapper">
      <div class="wrap-box">

        <!--类别菜单================================================================================-->
        <div class="left-220" style="margin:0;">
          <div class="banner-nav">
            <ul>
              <!--此处声明下面可重复循环-->

              <li v-for="item in topData.catelist" :key='item.id'>
                <h3>
                  <i class="iconfont icon-arrow-right"></i>
                  <span>{{item.title}}</span>
                  <p>
                    
                    <span v-for='subitem in item.subcates' :key='subitem.index'>
                      {{ subitem.title }}
                    </span>

                  </p>
                </h3>
                <div class="item-box">
                  <!--如有三级分类，此处可循环-->
                 
                  <!-- 用menu自定义属性保存数据，组件中使用props:['menu']获取该数据 -->
                 <Menu-conponent :menu='item.subcates'></Menu-conponent>

                  <!-- <dl>
                    <dt>
                      <a href="/goods/40.html">手机数码</a>
                    </dt>
                    <dd>
                      <a href="/goods/43.html">手机通讯</a>
                      <a href="/goods/44.html">摄影摄像</a>
                      <a href="/goods/45.html">存储设备</a>
                    </dd>
                  </dl> -->

                </div>
              </li>

            </ul>
          </div>
        </div>
        <!--/类别菜单-->

        <!--幻灯片================================================================================-->
        <div class="left-705">
          <div class="banner-img">
            <el-carousel id='mycarousel' :interval="4000" type="card" height="310px">
              <el-carousel-item v-for="item in topData.sliderlist" :key="item.id">
                <img id='myimg' :src="item.img_url" :alt="item.title">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!--/幻灯片-->

        <!--推荐商品================================================================================-->
        <div class="left-220">
          <ul class="side-img-list">

            <li v-for='(item,i) in topData.toplist' :key='item.id'>
              <div class="img-box">
                <label>{{i+1}}</label>
                <img :src="item.img_url">
              </div>
              <div class="txt-box">
                <a href="/goods/show-98.html">{{item.title}}</a>
                 <span>{{ item.add_time | date }}</span>
              </div>
            </li>




          </ul>
        </div>
        <!--/推荐商品-->
      </div>
    </div>
  </div>
</template>

<script>

//  菜单组件
 import MenuConponent from "./Menu.vue";


export default {
  components:{
    MenuConponent
  },
  data() {
    return {
      topData: {
        catelist: "",
        sliderlist: "",
        toplist: ""
      }
    };
  },
  methods: {
    getGoodsTopData() {
      this.$http.get(this.$api.goodsTop).then(rsp => {
        // console.log(rsp);
        this.topData = rsp.data.message;
        console.log(this.topData);
      });
    }
  },
  created() {
    console.log(this.$api.goodsTop);

    this.getGoodsTopData();
  }
};
</script>

<style scoped>
#mycarousel {
  margin-left: 20px;
}

.banner-img img {
  width: 100%;
  height: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>