<template>
  <div id="main">
    <Header title="我的">
        <i @touchstart="handleToBack" class="iconfont icon-back"></i>
    </Header>
    <div id="content">
      <Login></Login>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Login from "@/components/Login";
export default {
  name: "Mine",
  components: {
    Header,
    TabBar,
    Login
  },
  methods: {
      handleToBack() {
      this.$router.back();
    }
  },
};
</script>
<style scoped>
</style>