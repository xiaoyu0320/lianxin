<template>
  <div class="banklist layout-child">
    <van-nav-bar title="我的银行卡" left-arrow @click-left="back" />
    <section class="list layout-scorll">
      <div class="warning dp-flex">
        <van-icon size="13" color="#2d9bfd" name="warning" />
        <div class="warning-val">为了确保是你本人操作，请先<span class="warning-val--box">实名认证</span></div>
      </div>
      <div class="item dp-flex">
        <van-image round width=".59rem" height=".59rem" :src="require('@img/my/bankcard.png')" />
        <div class="item-body dp-flex">
          <div>工商银行</div>
          <div>****** ***** **** 3240</div>
        </div>
      </div>
      <div class="footer dp-flex">
        <div class="button dp-flex">
          <van-icon name="plus" />
          <div class="button-text">添加银行卡</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
.list {
  background-color: #ffffff;
  .warning {
    margin: 0 0.3rem;
    border-radius: 0.1rem;
    padding: 0.3rem;
    background-color: #ecf6ff;
    align-items: center;
    font-weight: bold;
    .warning-val {
      padding-left: 0.2rem;
      color: #2b2e32;
      font-size: 0.24rem;
    }
    .warning-val--box {
      color: #2d9bfd;
    }
  }
  .item {
    position: relative;
    padding: 0.3rem;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-top: 1px solid #e8e8e8;
      transform: scaleY(0.5);
    }
    .item-body {
      padding-left: 0.3rem;
      justify-content: space-between;
      flex-direction: column;
    }
  }
  .footer {
    justify-content: center;
    margin: 0.5rem 0;
    .button {
      width: 5.4rem;
      height: 0.79rem;
      border-radius: 0.4rem;
      border: 1px solid #666666;
      justify-content: center;
      align-items: center;
      color: #3d424e;
      font-size: 0.3rem;
      .button-text {
        padding-left: 0.1rem;
      }
    }
  }
}
</style>
