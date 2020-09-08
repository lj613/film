<template>
  <div id="main">
    <Header title="影院"></Header>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <span class="iconfont icon-dropdown"></span>
        </div>
        <div class="brand_switch">
          品牌
          <span class="iconfont icon-dropdown"></span>
        </div>
        <div class="feature_switch">
          特色
          <span class="iconfont icon-dropdown"></span>
        </div>
      </div>
      <CiList></CiList>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import CiList from "@/components/CiList";
export default {
  name: "Cinema",
  components: {
    Header,
    TabBar,
    CiList
  }
};
</script>
<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>