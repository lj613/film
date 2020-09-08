<template>
  <div class="city_body">
    <div class="city_list" ref="city_list">
      <Loading v-if="isLoading"></Loading>
      <div v-else>
        <div class="city_hot">
          <h2>热门城市</h2>
          <ul class="clearfix">
            <li>北京</li>
            <li>上海</li>
            <li>广州</li>
            <li>深圳</li>
            <li>西安</li>
            <li>天津</li>
          </ul>
        </div>
        <div class="city_sort" ref="city_sort">
          <div v-for="item in cities" :key="item.index">
            <h2>{{item.index}}</h2>
            <ul v-for="city in item.list" :key="city.id" @click="handleToCity(city.nm,city.id)">
              <li>{{city.nm}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li
          v-for="(item,index) in cities"
          :key="item.index"
          @touchstart="handleToIndex(index)"
        >{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "City",
  data() {
    return {
      cities: [],
      isLoading: true
    };
  },
  mounted() {
    var cities = window.localStorage.getItem("cities");
    if (cities) {
      this.cities = this.formatCityList(JSON.parse(cities));
      this.isLoading = false;
    } else {
      this.axios
        .get(
          "https://show.maoyan.com/maoyansh/myshow/ajax/config/maoyan-show-m-web.frontEnd.config.cities?sellChannel=13&cityId=1&lng=0&lat=0"
        )
        .then(res => {
          console.log(res.data);
          this.isLoading = false;
          this.cities = this.formatCityList(JSON.parse(res.data.data));
          //本地存储存储的类型是字符串类型
          window.localStorage.setItem("cities", res.data.data);
        });
    }
  },
  methods: {
    formatCityList(cities) {
      var letterArr = [];
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i));
      }
      var newList = [];
      for (var j = 0; j < letterArr.length; j++) {
        var arr = cities.filter(
          item => item.py.substring(0, 1) === letterArr[j].toLowerCase()
        );
        if (arr.length > 0) {
          newList.push({
            index: letterArr[j],
            list: arr
          });
        }
      }
      return newList;
    },
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName('h2');
      this.$refs.city_sort.parentNode.parentNode.scrollTop = h2[index].offsetTop;
    },
    handleToCity(nm, id) {
      this.$store.commit("city/CITY_INFO", { nm, id });
      window.localStorage.setItem("nowNm", nm);
      window.localStorage.setItem("nowId", id);
      this.$router.push("/movie/nowPlaying");
    }
  }
};
</script>
<style scoped>
.city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #e6e6e6;
}
</style>