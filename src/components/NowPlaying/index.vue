<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="isLoading"></Loading>
    <ul v-else>
      <li class="pullDown">{{pullDownMsg}}</li>
      <li v-for="movie in movieList" :key="movie.id" @tap="handleToDdetail(movie.id)">
        <div class="pic_show">
          <img :src="movie.img | setWH('128.180')" alt />
        </div>
        <div class="info_list">
          <h2>
            {{movie.nm}}
            <img v-if="movie.version" :src="method1(movie.version)" />
          </h2>
          <p v-if="movie.sc">
            观众评
            <span class="grade">{{movie.sc}}</span>
            分
          </p>
          <p v-else>暂无评分</p>
          <p>主演：{{movie.star}}</p>
          <p>{{movie.showInfo}}</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "NowPlaying",
  data() {
    return {
      movieList: [],
      pullDownMsg: "",
      isLoading: true,
      prevCityId: -1
    };
  },
  components: {},
  // mounted() {
  activated() {
    var cityId = this.$store.state.city.id;
    if (this.prevCityId === cityId) {
      return;
    }
    this.isLoading = true;
    this.axios
      .get(
        // "/ajax/movieOnInfoList?token=&optimus_uuid=4817E030ECED11EAB831ED42969CF132C672DC335C684AA7A0D2E18ACC949FC1&optimus_risk_level=71&optimus_code=10"
        `/ajax/movieOnInfoList?token=&optimus_uuid=4817E030ECED11EAB831ED42969CF132C672DC335C684AA7A0D2E18ACC949FC1&optimus_risk_level=71&optimus_code=10&ci=${cityId}`
      )
      .then(res => {
        this.movieList = res.data.movieList;
        this.isLoading = false;

        this.prevCityId = cityId;

        this.$nextTick(() => {
          var scroll = new BScroll(this.$refs.movie_body, {
            tap: "tap",
            probeType: 1
          });
          scroll.on("scroll", pos => {
            console.log("scroll");
            if (pos.y > 30) {
              this.pullDownMsg = "正在更新中";
            }
          });
          scroll.on("touchEnd", pos => {
            if (pos.y > 30) {
              this.axios
                .get(
                  "/ajax/moreComingList?token=&movieIds=1219866%2C1203109%2C1358352%2C1243792%2C1218159%2C78341%2C342068%2C345810%2C1250729%2C1280654&optimus_uuid=4817E030ECED11EAB831ED42969CF132C672DC335C684AA7A0D2E18ACC949FC1&optimus_risk_level=71&optimus_code=10"
                  // "/ajax/movieOnInfoList?token=&ci=30"
                )
                .then(res => {
                  this.pullDownMsg = "更新成功";
                  setTimeout(() => {
                    this.movieList = res.data.coming;
                    this.pullDownMsg = "";
                  }, 1000);
                });
            }
          });
        });
      });
  },
  methods: {
    method1(version) {
      if (version == "v2d imax") {
        return require("@/assets/2d-imax.png");
      } else if (version == "v3d imax") {
        return require("@/assets/3d-imax.png");
      } else if (version == "v3d") {
        return require("@/assets/3d.png");
      } else {
        return "";
      }
    },
    handleToDdetail(movieId) {
      this.$router.push(`/movie/detail/1/${movieId}`);
    },
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.pullDownMsg = "正在更新中";
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 30) {
        this.axios
          .get(
            "/ajax/moreComingList?token=&movieIds=1219866%2C1203109%2C1358352%2C1243792%2C1218159%2C78341%2C342068%2C345810%2C1250729%2C1280654&optimus_uuid=4817E030ECED11EAB831ED42969CF132C672DC335C684AA7A0D2E18ACC949FC1&optimus_risk_level=71&optimus_code=10"
            // "/ajax/movieOnInfoList?token=&ci=30"
          )
          .then(res => {
            this.pullDownMsg = "更新成功";
            setTimeout(() => {
              this.movieList = res.data.coming;
              this.pullDownMsg = "";
            }, 1000);
          });
      }
    }
  }
};
</script>
<style scoped>
.movie_body {
  flex: 1;
  overflow: auto;
}

.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
  border: 1px solid pink;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 182px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list h2 img {
  display: inline-block;
  width: 34px;
  height: 14px;
  margin-left: 4px;
}
.movie_body .info_list p {
  font-size: 13px;
  line-height: 22px;
  color: #666;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.btn_mall,
.btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.btn_pre {
  background-color: #3c9fe6;
}
.movie_body .pullDown {
  margin: 0;
  padding: 0;
  border: none;
}
</style>