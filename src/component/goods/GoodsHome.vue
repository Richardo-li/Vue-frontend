<template>
  <div>

    <!-- 面包屑组件 -->
    <Breadcumd-comp></Breadcumd-comp>
    <!-- 头部组件 -->
    <Top-comp></Top-comp>
    <!-- 列表组件 -->
    <List-comp></List-comp>

  </div>
</template>

<script>
//引入该组件的子组件
import BreadcumdComp from "./frame/Breadcumd.vue";
import TopComp from "./frame/Top.vue";
import ListComp from "./frame/List.vue";

export default {
  components: {
    BreadcumdComp,  //es6写法
    ListComp,
    TopComp
  }
};
</script>

<style scoped>

</style>