<template>
  <div class="search_body">
    <div class="search_input">
      <i class="search_input_wraper">
             <i  class="iconfont icon-search"></i>
        <input type="text" v-model="message" placeholder="搜电影" />
      </i>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li v-for="item in moviesList" :key="item.id" @click="handleToDdetail(item.id)">
          <div class="img">
            <img :src="item.img | setWH('128.180')" alt />
          </div>
          <div class="info">
            <p>
              <span>{{item.nm}}</span>
              <span>{{item.sc}}</span>
            </p>
            <p>{{item.enm}}</p>
            <p>{{item.cat}}</p>
            <p>{{item.rt}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      message: "",
      moviesList: []
    };
  },
  watch: {
    message(val) {
      var that = this;
      var cityId = this.$store.state.city.id;
      this.cancelRequest();
      this.axios
        // .get(`/ajax/search?kw=${val}&cityId=428&stype=-1`, {
        .get(`/ajax/search?kw=${val}&cityId=${cityId}&stype=-1`, {
          cancelToken: new this.axios.CancelToken(function(c) {
            that.source = c;
          })
        })
        .then(res => {
          var movies = res.data.movies;
          console.log(res.data);
          if (movies) {
            this.moviesList = res.data.movies.list;
          }
        })
        .catch(err => {
          if (this.axios.isCancel(err)) {
            console.log("Rquest canceled", err.message); //请求如果被取消，这里是返回取消的message
          } else {
            console.log(err);
          }
        });
    }
  },
  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
    },
     handleToDdetail(movieId) {
      this.$router.push(`/movie/detail/1/${movieId}`)
    },

  }
};
</script>
<style scoped>
.search_body {
  flex: 1;
  overflow: auto;
}
.search_body .search_input {
  padding: 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.search_body .search_input_wraper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
}
.search_body .search_input_wraper i {
  font-size: 16px;
  padding: 4px 0;
}
.search_body .search_input_wraper input {
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
.search_body .search_result h3 {
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
  border-bottom: 1px solid #e6e6e6;
}
.search_body .search_result li {
  border-bottom: 1px dashed #c9c9c9;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
}
.search_body .search_result .img {
  width: 60px;
  float: left;
}
.search_body .search_result .img img {
  width: 100%;
}
.search_body .search_result .info {
  float: left;
  margin-left: 15px;
  flex: 1;
}
.search_body .search_result .info p {
  height: 22px;
  display: flex;
  line-height: 22px;
  font-size: 12px;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1) {
  font-size: 18px;
  flex: 1;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2) {
  font-size: 16px;
  color: #fc7103;
}
</style>