<template>
  <div id="footer">
    <ul>
      <router-link to="/movie" tag="li" activeClass="tabactive">
        <span class="iconfont icon-movie"></span>电影</router-link>
      <router-link to="/cinema" tag="li" activeClass="tabactive">
       <span class="iconfont icon-cinema"></span>影院</router-link>
      <router-link to="/mine" tag="li" activeClass="tabactive">
       <span class="iconfont icon-my"></span>我的</router-link>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px solid #ebe8e3;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
  display: flex;
  flex-direction: column;
}
.tabactive {
  color: #f03d37;
}

#footer ul .iconfont{
  font-size: 20px;
}
#footer ul .iconfont.icon-my{
font-weight: 700;
}

#footer ul p {
  font-size: 12px;
  line-height: 18px;
}

</style>