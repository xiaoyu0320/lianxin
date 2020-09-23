<!--
 -->
<template>
  <div class="details layout-child">
    <van-nav-bar title="积分详情" left-arrow @click-left="back" />
    <section class="content layout-scorll">
      <div class="award">
        <van-image round width=".84rem" height=".84rem" :src="awardimg" />
        <div class="award-type">联购奖励</div>
        <div class="award-coin">
          <label>+{{ award.toFixed(2) }}</label>
          积分
        </div>
      </div>
      <div class="item dp-flex">
        <div class="item-title">当前状态</div>
        <div class="item-body">待结算</div>
      </div>
      <div class="item dp-flex">
        <div class="item-title">订单号</div>
        <div class="item-body">54641321313151654613123212</div>
      </div>
      <div class="item dp-flex">
        <div class="item-title" style="width:50%;">商品名称</div>
        <div class="item-body">这个是商品的名称，标题太长就换行 显示，不隐藏标题</div>
      </div>
      <div class="item dp-flex">
        <div class="item-title">团购价</div>
        <div class="item-body">8.00元</div>
      </div>
      <div class="item dp-flex">
        <div class="item-title">下单时间</div>
        <div class="item-body">2019-06-18 16:09:44</div>
      </div>
      <div class="item dp-flex">
        <div class="item-title">结算时间</div>
        <div class="item-body"></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      awardimg: require('@img/my/award.png'),
      award: 0
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  },
  created() {
    this.$store.dispatch('setBottomType', 0)
  }
}
</script>
<style lang="scss" scoped>
.content {
  background-color: #ffffff;
  .award {
    margin: 0.3rem;
    padding: 0.3rem;
    background-color: #f2f2f2;
    border-radius: 0.2rem;
    text-align: center;
    .award-type {
      color: #2c2e33;
      font-size: 0.28rem;
      padding: 0.1rem 0 0.2rem;
    }
    .award-coin {
      color: #2c2e33;
      font-size: 0.3rem;
      label {
        font-size: 0.4rem;
      }
    }
  }
  .item {
    position: relative;
    padding: 0.3rem;
    justify-content: space-between;
    font-size: 0.28rem;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-top: 1px solid #e8e8e8;
      transform: scaleY(0.5);
    }
    .item-title {
      color: #2b2e32;
    }
    .item-body {
      text-align: justify;
      text-justify: inter-ideograph;
    }
  }
}
</style>
