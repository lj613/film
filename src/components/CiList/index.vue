<template>
  <div class="cinema_body" ref="cinema_body">
    <Loading v-if="isLoading"></Loading>
    <ul v-else>
      <li>
        <div>
          <span>汶川团团影城</span>
          <span class="q">
            <span class="price">22.9</span>
            元起
          </span>
        </div>
        <div class="address">
          <span>汶川县博物馆对面青少年宫一楼</span>
          <span>469.5km</span>
        </div>
        <div class="card">
          <div class="allowRefund">退</div>
          <div class="endorse">改签</div>
          <div class="vipTag">折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>汶川团团影城</span>
          <span class="q">
            <span class="price">22.9</span>
            元起
          </span>
        </div>
        <div class="address">
          <span>汶川县博物馆对面青少年宫一楼</span>
          <span>469.5km</span>
        </div>
        <div class="card">
          <div class="allowRefund">退</div>
          <div class="endorse">改签</div>
          <div class="vipTag">折扣卡</div>
        </div>
      </li>
       <li>
        <div>
          <span>汶川团团影城</span>
          <span class="q">
            <span class="price">22.9</span>
            元起
          </span>
        </div>
        <div class="address">
          <span>汶川县博物馆对面青少年宫一楼</span>
          <span>469.5km</span>
        </div>
        <div class="card">
          <div class="allowRefund">退</div>
          <div class="endorse">改签</div>
          <div class="vipTag">折扣卡</div>
        </div>
      </li>
       <li>
        <div>
          <span>汶川团团影城</span>
          <span class="q">
            <span class="price">22.9</span>
            元起
          </span>
        </div>
        <div class="address">
          <span>汶川县博物馆对面青少年宫一楼</span>
          <span>469.5km</span>
        </div>
        <div class="card">
          <div class="allowRefund">退</div>
          <div class="endorse">改签</div>
          <div class="vipTag">折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>汶川团团影城</span>
          <span class="q">
            <span class="price">22.9</span>
            元起
          </span>
        </div>
        <div class="address">
          <span>汶川县博物馆对面青少年宫一楼</span>
          <span>469.5km</span>
        </div>
        <div class="card">
          <div class="allowRefund">退</div>
          <div class="endorse">改签</div>
          <div class="vipTag">折扣卡</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "CiList",
  data() {
    return {
      cinemaList: [],
      isLoading: true
    };
  },
  mounted() {
    //   https://m.maoyan.com/ajax/filterCinemas?ci=57
    //   http://m.maoyan.com/showtime/wrap.json?cinemaid=11533&movieid=
    // this.axios.get("/ajax/moreCinemas?cityId=428").then(res => {
    // this.axios.get("/ajax/cinemaDetail?cinemaId=890").then(res => {
    this.axios.get("/ajax/filterCinemas?ci=428").then(res => {
      this.isLoading = false;
      // console.log(res.data);
      this.$nextTick(() => {
        var scroll = new BScroll(this.$refs.cinema_body, {
          tap: "tap",
          probeType: 1
        });
      });
    });
  }
};
</script>
<style scoped>
.cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>