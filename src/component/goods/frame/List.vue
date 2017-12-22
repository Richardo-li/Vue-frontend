<template>
  <div>
    <div class="section" v-for='item in goodsgroup' :key="item.level1cateid">

      <!--子类-->
      <div class="main-tit">
        <h2>{{ item.catetitle }}</h2>
        <p>
          <span v-for='sublist in item.level2catelist' :key="sublist.subcateid">
            <a href="/goods/43.html">{{sublist.subcatetitle}}</a>
          </span>
          <a href="/goods/40.html">更多
            <i>+</i>
          </a>
        </p>
      </div>

      <!--/子类-->
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">

            <li v-for="datas in item.datas" :key="datas.artID">
              <a href="/goods/show-91.html">
                <div class="img-box">
                  <img :src="datas.img_url">
                </div>
                <div class="info">
                  <h3>{{datas.artTitle}}</h3>
                  <p class="price">
                    <b>{{datas.sell_price}}</b>元</p>
                  <p>
                    <strong>库存 {{datas.stock_quantity}}</strong>
                    <span>市场价：
                      <s>{{datas.market_price}}</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsgroup: []
    };
  },
  methods: {
    // 获取数据
    getgoodsgroup() {
      this.$http.get(this.$api.goodsContent).then(rsp => {
        console.log(rsp.data.message);
        this.goodsgroup = rsp.data.message;
      });
    }
  },
  created() {
    this.getgoodsgroup();
  }
};
</script>

<style scoped>

</style>