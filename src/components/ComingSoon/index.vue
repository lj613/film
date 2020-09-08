<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="isLoading"></Loading>
    <ul v-else>
      <li class="pullDown">{{pullDownMsg}}</li>
      <li v-for="item in comingList" :key="item.id" @tap="handleToDdetail(item.id)">
        <div class="pic_show">
          <img :src="item.img | setWH('128.180')" alt />
        </div>
        <div class="info_list">
          <h2>
            {{item.nm}}
            <img v-if="item.version" :src="method1(item.version)" />
          </h2>

          <p>
            <span class="person">{{item.wish}}</span>
            人想看
          </p>
          <p v-if="item.star">主演：{{item.star}}</p>
          <p>{{item.rt}}上映</p>
        </div>
        <div class="btn_pre">预售</div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "ComingSoon",
  data() {
    return {
      comingList: [],
      pullDownMsg: "",
      isLoading: true,
      prevCityId: -1
    };
  },
  // 由于使用了keepalive 用mounted 不会再触发里面的函数 换位activated
  // mounted() {
  activated() {
    var cityId = this.$store.state.city.id;
    if (this.prevCityId === cityId) {
      return;
    }
    this.isLoading = true;

    this.axios
      .get(`/ajax/comingList?ci=${cityId}&token=&limit=10`)
      .then(res => {
        this.comingList = res.data.coming;
        this.isLoading = false;
        this.prevCityId = cityId;
        this.$nextTick(() => {
          var scroll = new BScroll(this.$refs.movie_body, {
            tap: "tap",
            probeType: 1
          });
          scroll.on("scroll", pos => {
            if (pos.y > 30) {
              this.pullDownMsg = "正在更新中";
            }
          });
          scroll.on("touchEnd", pos => {
            if (pos.y > 30) {
              this.axios
                .get(
                  `/ajax/moreComingList?ci=${cityId}&token=&limit=10&movieIds=1332663%2C1352833%2C1247810%2C1298732%2C1359418%2C1277751%2C1222268%2C1338984%2C1218142%2C1334342&optimus_uuid=2AA8C440F18111EA87A075D56B46414FCBC083B67F8444BCBC69AB36401DFEEA&optimus_risk_level=71&optimus_code=10`
                  // "/ajax/movieOnInfoList?token=&ci=30"
                )
                .then(res => {
                  this.pullDownMsg = "更新成功";
                  setTimeout(() => {
                    this.comingList = res.data.coming;
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
      this.$router.push(`/movie/detail/2/${movieId}`);
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
  width: 150px;
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