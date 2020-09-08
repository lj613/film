<template>
  <div class="detailContainer slide-enter-active">
    <Header title="影片详情">
      <i @touchstart="handleToBack" class="iconfont icon-back"></i>
    </Header>
    <Loading v-if="isLoading"></Loading>
    <div v-else id="content" class="contentDetail">
      <div class="detail_list">
        <div class="detail_list_bg" :style="{'background-image':'url('+detailMovie.img.replace(/w\.h/,'148.208')+')'}"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="detailMovie.img | setWH('148.208')" alt />
          </div>
          <div class="detail_list_info">
            <h2>{{detailMovie.nm}}</h2>
            <p>{{detailMovie.enm}}</p>
            <p>{{detailMovie.sc}}</p>
            <p>{{detailMovie.cat}}</p>
            <p>{{detailMovie.src}}/{{detailMovie.dur}}分钟</p>
            <p>{{detailMovie.pubDesc}}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{detailMovie.dra}}</p>
      </div>
      <div class="detail_player">
        <swiper :options="swiperOptions" ref="mySwiper">
          <swiper-slide v-for="(item,index) in detailMovie.photos" :key="index" class="photos">
            <img :src="item | setWH('140.127')" alt />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  name: "Detail",
  data() {
    return {
      detailMovie: {},
      isLoading: true,
      swiperOptions: {
        slidesPerView: 4,
        freeMode: true
      }
    };
  },
  components: {
    Header
  },
  props: ["movieId"],
  methods: {
    handleToBack() {
      this.$router.back();
    }
  },
  mounted() {
    this.axios
      .get(
        `/ajax/detailmovie?movieId=${this.movieId}&optimus_uuid=4817E030ECED11EAB831ED42969CF132C672DC335C684AA7A0D2E18ACC949FC1&optimus_risk_level=71&optimus_code=10`
      )
      .then(res => {
        this.detailMovie = res.data.detailMovie;
        this.isLoading = false;
      });
  }
};
</script>
<style scoped>
.detailContainer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
}
.detailContainer.slide-enter-active {
  animation: 0.3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
#content.contentDetail {
  display: block;
  margin-bottom: 0;
}
#content .detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.detail_list .detail_list_bg {
  width: 100%;
  height: 100%;
  background:  0 40%;
  filter:blur(20px);
  left: 0;
  top: 0;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
}
.detail_list .detail_list_filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #40454d;
  opacity: .55;
  z-index: -1;
  left: 0;
  top: 0;
}
.detail_list .detail_list_content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.detail_list .detail_list_img {
  width: 108px;
  height: 150px;
  margin: 20px;
}
.detail_list .detail_list_img img {
  width: 100%;
  height: 100%;
}
.detail_list .detail_list_info {
  margin-top: 20px;
}
.detail_list .detail_list_info h2 {
  font-size: 20px;
  color: white;
  font-weight: normal;
  line-height: 40px;
}
.detail_list .detail_list_info p {
  color: white;
  line-height: 20px;
  font-size: 14px;
}
#content .detail_intro {
  padding: 10px;
}
.swiper-slide {
  width: 70px;
  text-align: center;
  font-size: 14px;
}
.swiper-slide.photos img {
  width: 70px;
}
</style>