<template>
  <div class="result result-bg layout-child">
    <van-nav-bar class="un-bg--color" left-arrow @click-left="back" />
    <div class="layout-scorll">
      <div class="result-main">
        <div class="status">
          <img :src="require('@img/order/tradingclosed.png')" alt="状态" /> {{ returnStatus(0) }}
        </div>
        <div class="coin">
          <span class="unit">￥</span>
          <span class="price">0.00</span>
        </div>
        <div class="btn dp-flex">
          <div class="btn-box">完成</div>
          <div class="btn-box">继续购物</div>
        </div>
      </div>
      <div class="result-order">
        <span class="result-order--title">订单号：</span>
        <span class="result-order--number">{{ number }}</span>
      </div>
      <div class="result-advertising">
        活动
      </div>
      <div class="result-img">
        <van-image width="6.94rem" height="2.19rem" fit="contain" :src="require('@img/order/banner.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      number: '20200207222820462046'
    }
  },
  methods: {
    returnStatus(status) {
      switch (Number(status)) {
        case 0:
          return '支付成功'
        case 1:
          return '支付失败'
        case 2:
          return '支付关闭'
      }
    },
    back() {
      this.$router.go(-1)
    }
  },
  created() {
    this.$store.dispatch('setBottomType', 0)
  }
}
</script>
<style lang="scss" scoped>
.result-bg {
  background: url('~@img/order/paybg.png') no-repeat;
  background-size: contain;
}
.result-main {
  padding: 0.4rem;
  height: 3.63rem;
  text-align: center;
  .status {
    color: #ffffff;
    font-size: 0.4rem;
    img {
      width: 0.34rem;
      height: 0.34rem;
    }
  }
  .coin {
    padding: 0.4rem 0;
    color: #ffffff;
    .unit {
      font-size: 0.37rem;
    }
    .price {
      font-size: 0.42rem;
    }
  }
  .btn {
    justify-content: center;
    .btn-box {
      width: 1.92rem;
      height: 0.57rem;
      line-height: 0.57rem;
      border-radius: 999px;
      border: 1px solid #ffffff;
      color: #ffffff;
      font-size: 0.28rem;
      margin: 0 0.3rem;
    }
  }
}
.result-order {
  margin: 0.2rem auto;
  width: 6.94rem;
  height: 1.23rem;
  line-height: 1.23rem;
  background-color: #ffffff;
  border-radius: 0.2rem;
  padding: 0 0.3rem;
  color: #2b2e32;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  font-size: 0.28rem;
  margin-bottom: 0.4rem;
  .result-order--title {
    font-family: PingFangSC-Medium;
  }
  .result-order--number {
    font-family: DIN-Medium;
    padding-left: 0.2rem;
  }
}
.result-advertising {
  font-family: PingFangSC-Bold;
  font-size: 0.3rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #2b2e32;
  width: 4.5rem;
  text-align: center;
  font-weight: bold;
  background: url('~@img/order/activitybg.png') no-repeat;
  background-size: 100%;
  background-position-y: center;
  margin: 0.3rem auto;
}
.result-img {
  padding: 0.3rem;
}
</style>
