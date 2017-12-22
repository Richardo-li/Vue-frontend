<template>

  <div id="header" class="header">
    <div class="head-top">
      <div class="section">
        <div class="left-box">
          <span>vue2.0单页应用</span>
          <a target="_blank" href="#"></a>
          <a target="_blank" href="#"></a>
        </div>
        <div id="menu" class="right-box">
          <a href="/login.html">登录</a>
          <a href="/register.html">注册</a>
          <strong>|</strong>

        </div>
      </div>
    </div>
    <div class="head-nav">
      <div class="section">

        <!--代码开始-->
        <div id="navigation">
          <ul>
            <!-- <li>
              <a href="#">96看吧</a>
            </li>
            <li>
              <a href="#">焦点图</a>
            </li>
            <li id="active">
              <a href="#">导航菜单</a>
            </li>
            <li>
              <a href="#">网页特效</a>
            </li>
            <li>
              <a href="#">广告代码</a>
            </li> -->
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">学员问题</a>
            </li>
            <li>
              <a href="#">重难点专区</a>
            </li>
            <li>
              <a href="#">前端常用功能</a>
            </li>
            <li>
              <a href="#">资源下载</a>
            </li>
            <li  id="active">
              <a href="#">购物商城</a>
            </li>
          </ul>
        </div>
        <!--代码结束-->

        <!-- <div id="menu2" class="nav-box menuhd">
          <ul>
            <li class="index">
              <a href="/index.html">
                首页
              </a>
            </li>
            <li class="news">
              <a href="/news.html">
                学员问题汇总
              </a>
            </li>
            <li class="photo">
              <a href="/photo.html">
                重难点专区
              </a>
            </li>
           
            <li class="video">
              <a href="/video.html">
                前端常用功能
              </a>
            </li>
            <li class="down">
              <a href="/down.html">
                资源下载
              </a>
            </li>
            <li>
              <a target="_blank" href="/admin/index.aspx">
                问题提交
              </a>
            </li>
          </ul>
        </div> -->
        <div class="search-box">
          <div class="input-box">
            <input id="keywords" name="keywords" type="text" onkeydown="if(event.keyCode==13){SiteSearch('/search.html', '#keywords');return false};" placeholder="输入关健字" x-webkit-speech="">
          </div>
          <a href="javascript:;" onclick="SiteSearch('/search.html', '#keywords');">
            <i class="iconfont icon-search"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>