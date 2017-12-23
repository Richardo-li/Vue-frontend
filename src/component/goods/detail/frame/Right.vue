<template>
  <div class="sidebar-box">
    <h4>推荐商品</h4>
    <ul class="side-img-list">

      <li v-for='item in hotgoodslist' :key='item.id'>
        <div class="img-box">
          <!-- <a href="/goods/show-98.html"> -->
          <router-link :to='{name:"gd",params:{id:item.id}}'>
            <img :src="item.img_url">
          <!-- </a> -->
          </router-link>
        </div>
        <div class="txt-box">
          <!-- <a href="/goods/show-98.html">{{item.title}}</a> -->
          <router-link :to='{name:"gd",params:{id:item.id}}'>{{item.title}}</router-link>
          <span>{{ item.add_time | date}}</span>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  //获取父组件传来的数据
  props: ["hotgoodslist"]
};
</script>

<style scoped>

</style>