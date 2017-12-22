<template>
  <div>
    <dl v-for='item in menu' :key="item.id">
      <dt>
        <a href="#">{{ item.title }}</a>
      </dt>
      <dd>
      <!-- <a href="#">手机数码</a>
      <a href="#">摄影摄像</a>
      <a href="#">存储设备</a> -->

       <!-- 自己调用自己    递归！！！！  -->
       <app-menu v-if='item.subcates && item.subcates.length!=0' :menu='item.subcates'></app-menu>


      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  //定义组件的默认名称，这样在组件里面可以调用自己，不然无法找到自己
  name:'app-menu',
  //接收到的menu是一个数组[{title,subcates},{title,subcates}] 
  //数组的每个对象可能会含有subcates属性，值又是同样的数组
  //需要递归的调用自己进行深层遍历，把所有的subcates都遍历出来
  props: ["menu"],
  
  methods: {}
};
</script>

<style scoped lang='less'>

</style>