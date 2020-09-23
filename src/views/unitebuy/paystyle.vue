<!--  -->
<template>
  <div class="pay layout-child">
    <van-nav-bar title="支付方式" left-arrow @click-left="onClickLeft" />
    <div class="pay-box">
      <div class="pay-left">
        <van-image width=".4rem" :src="require('@img/unitebuy/gold.png')"></van-image>
        应付金额
      </div>
      <div class="pay-right">
        ￥101.00
      </div>
    </div>
    <div class="pay-style">
      <van-radio-group v-model="radio">
        <van-cell-group :border="false">
          <van-cell v-for="(item, i) in list" :key="i" clickable :border="false">
            <template #title>
              <div class="left">
                <van-image width=".56rem" height=".56rem" :src="item.url"></van-image>
                <div class="info">
                  <div class="title">{{ item.title }}</div>
                  <div class="s-title">{{ item.s_title }}</div>
                </div>
              </div>
            </template>
            <template #right-icon>
              <van-radio :name="item.radio" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="pay-foot ">
      <van-button round>立即支付</van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      radio: 1,
      list: [
        {
          url: require('@img/unitebuy/wx.png'),
          title: '微信支付',
          s_title: '微信安全支付',
          radio: 1
        },
        {
          url: require('@img/unitebuy/zfb.png'),
          title: '支付宝',
          s_title: '支付宝安全支付',
          radio: 2
        },
        {
          url: require('@img/unitebuy/ysf.png'),
          title: '云闪付',
          s_title: '云闪付安全支付',
          radio: 3
        },
        {
          url: require('@img/unitebuy/jf.png'),
          title: '积分抵扣',
          s_title: '可用积分：100000',
          radio: 4
        }
      ]
    }
  },
  computed: {},
  watch: {},
  // 方法集合
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  },
  created() {},
  mounted() {
    this.$store.dispatch('setBottomType', 0)
  }
}
</script>
<style lang="scss" scoped>
.pay {
  height: 100vh;
  background: #f2f2f2;
  .pay-box {
    background: #fff;
    padding: 0.5rem 0.3rem;
    margin: 0.3rem;
    border-radius: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pay-left {
      display: flex;
      align-items: center;
      font-size: 0.32rem;
      color: #2b2e32;
      ::v-deep .van-image {
        margin-right: 0.2rem;
      }
    }
    .pay-right {
      color: #ff672b;
      font-size: 0.32rem;
      font-family: DIN-Bold;
      font-weight: bold;
    }
  }
  .pay-style {
    background: #fff;
    padding: 0.2rem 0;
    margin: 0.3rem;
    border-radius: 0.2rem;
    .left {
      display: flex;
      align-items: center;
      .info {
        margin-left: 0.2rem;
        .title {
          font-size: 0.3rem;
          color: #2b2e32;
        }
        .s-title {
          color: #a4acb5;
          font-size: 0.24rem;
        }
      }
    }
  }
}
.pay-foot {
  padding: 0.3rem;
  background: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  ::v-deep .van-button {
    width: 100%;
    background-color: #fd682d;
    border-color: #fd682d;
    color: #fff;
  }
}
</style>
