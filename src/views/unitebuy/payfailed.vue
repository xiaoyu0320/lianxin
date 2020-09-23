<!--  -->
<template>
  <div class="failed">
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <div class="status">
      <div class="title">支付失败</div>
      <div class="s-title">请在<strong>5分钟</strong>内完成付款</div>
      <div class="opeate">
        <van-button class="white" round>拼团详情</van-button>
        <van-button class="origin" round>重新付款</van-button>
      </div>
    </div>
    <div class="card-box">
      <div class="name-phone">张三 15362685965</div>
      <div class="card">
        <div class="left"></div>
        <div class="right">
          福建省厦门市思明区软件园二期望海路43号4层前后台
        </div>
      </div>
    </div>
    <div class="card-box flex">
      <div class="left"><van-image :src="require('@img/unitebuy/gold.png')"></van-image>实付金额</div>
      <div class="right">￥101.00</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  // 方法集合
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  },
  created() {
    this.$store.dispatch('setBottomType', 0)
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.failed {
  height: 100vh;
  background: #f2f2f2;
  .status {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem 0;
    .title {
      font-size: 0.4rem;
    }
    .s-title {
      font-size: 0.24rem;
      margin: 0.3rem 0 0.5rem;
      strong {
        color: #ffb320;
        font-weight: normal;
      }
    }
    .opeate {
      ::v-deep .van-button {
        width: 1.92rem;
        height: 0.57rem;
      }
      .origin {
        background: #fd682d;
        border-color: #fd682d;
        color: #fff;
        margin-left: 0.5rem;
      }
    }
  }
  .card-box {
    margin: 0.3rem;
    padding: 0.3rem;
    background: #fff;
    border-radius: 0.2rem;
    .name-phone {
      font-size: 0.3rem;
      color: #2b2e32;
      font-weight: bold;
      padding-left: 0.69rem;
    }
    .card {
      display: flex;
      margin-top: 0.2rem;
      .left {
        width: 0.39rem;
        height: 0.39rem;
        border-radius: 50%;
        background: #37c234;
        margin-right: 0.3rem;
      }
      .right {
        color: #2b2e32;
        font-size: 0.26rem;
        font-family: PingFangSC-Medium;
      }
    }
  }
}
</style>
