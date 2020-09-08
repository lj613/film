<template>
  <div id="main">
    <Header title="电影"></Header>
    <div id="content">
      <div class="movie_menu">
        <router-link to="/movie/city" tag="div" class="city_name" activeClass="tabactive">
          <span>{{$store.state.city.nm}}</span>
           <span class="iconfont icon-dropdown"></span>
        </router-link>
        <div class="hot_switch">
          <router-link
            to="/movie/nowPlaying"
            tag="div"
            class="hot_item"
            activeClass="tabactive"
          >正在热映</router-link>
          <router-link
            to="/movie/comingSoon"
            tag="div"
            class="hot_item"
            activeClass="tabactive"
          >待映</router-link>
        </div>
        <router-link to="/movie/search" tag="div" class="search_entry" activeClass="tabactive">
        <span class="iconfont icon-search"></span>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <TabBar></TabBar>
    <router-view name="detail"></router-view>
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar
  },
  mounted() {

  }
};
</script>
<style scoped>
.movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
}
.movie_menu .city_name {
  margin-left: 20px;
  line-height: 45px;
}
.movie_menu .city_name.tabactive {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
.movie_menu .hot_switch {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.tabactive {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}

.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.tabactive {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
.movie_menu .search_entry .iconfont {
  font-size: 24px;
  color: red;
}

.movie_menu .search_entry .iconfont.icon-search{
  font-weight: 700;
}

</style>