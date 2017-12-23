<template>
    <div>
        <!-- 导航栏 -->
        <Breadcumd-comp></Breadcumd-comp>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box">

                                <Leftimg-comp :imglist='goodsDetail.imglist'></Leftimg-comp>

                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->

                            <Leftinfo-comp :goodsinfo='goodsDetail.goodsinfo'></Leftinfo-comp>

                            <!--/商品信息-->
                        </div>

                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <!--选项卡-->
                            <el-tabs type="border-card">
                                <!-- 商品介绍 -->
                                <el-tab-pane label="商品介绍">
                                    <div class="tab-content entry" v-html="goodsDetail.goodsinfo.content" style="display:block;">
                                    </div>
                                </el-tab-pane>

                                <!-- 评论 -->
                                <el-tab-pane label="商品评论">
                                    <div class="tab-content" style="display: block;">
                                        <!--网友评论, 获取商品模块下指定id的评论列表,与发布评论-->
                                        <Comment-comp ref='comment' tablename="goods" :artID="id"></Comment-comp>
                                        <!--/网友评论-->
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                            <!--/选项卡-->

                        </div>

                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->
                    <div class="left-220">
                        <div class="bg-wrap nobg">

                            <!-- 将数据传入组件，组件使用props获取该数据 -->
                            <Right-comp :hotgoodslist='goodsDetail.hotgoodslist'></Right-comp>

                        </div>
                    </div>
                    <!--/页面右边-->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import BreadcumdComp from "./frame/Breadcumd.vue";
import LeftimgComp from "./frame/LeftImg.vue";
import LeftinfoComp from "./frame/LeftInfo.vue";
import RightComp from "./frame/Right.vue";

import CommentComp from "../../../common/Comment.vue";

export default {
  // 子组件
  components: {
    BreadcumdComp,
    LeftimgComp,
    LeftinfoComp,
    RightComp,
    CommentComp
  },
  data() {
    return {
      id: this.$route.params.id,
      //得到数据，需要传给子组件
      goodsDetail: {
        goodsinfo: {},
        imglist: [],
        hotgoodslist: []
      }
    };
  },
  methods: {
    //   获取详情数据
    getGoodsDetail() {
      this.$http.get(this.$api.goodsDetail + this.id).then(rsp => {
        this.goodsDetail = rsp.data.message;
        //  console.log(typeof(this.goodsDetail.goodsinfo));
      });
    }
  },
  created() {
    //    console.log(this.id);
    this.getGoodsDetail();
  },
  // 如果是同一个路由规则下批量的url发生变化, 那么不会触发路由页面的更换
  // 但是$route对象会记录新的url参数等信息, 我们可以监听$route对象, 来得知同一个路由规则下的url变化
  watch: {
    $route() {
      //监听到路由变化执行
      //   console.log('66666666666');

      this.id = this.$route.params.id; // 修改为最新的id
      this.getGoodsDetail(); // 重新请求数据更新页面内容
    }
  }
};
</script>

<style scoped>

</style>