<!--  -->
<template>
  <div class="pintuan " style="overflow-y:auto">
    <van-nav-bar title="联购中" fixed left-arrow @click-left="onClickLeft" />
    <div class="card">
      <div class="left">
        <van-image width="2.14rem" height="2.14rem" :src="require('@img/index/zs.png')"></van-image>
      </div>
      <div class="right">
        <div class="title">天猫精灵方糖R哆啦A梦原声智能音箱儿童闹钟蓝胖子叮...</div>
        <div class="watch"><van-image width=".27rem" :src="require('@img/unitebuy/two.png')"></van-image>2人团</div>
        <div class="price-box">
          <div class="pt-price">拼团价</div>
          <div class="price">
            <div class="marke-price">￥<span>101.00</span></div>
            <div class="prgin-price">￥3399.50</div>
          </div>
        </div>
      </div>
    </div>
    <div class="count-time" v-if="type == 0">
      <div class="people">
        <van-image :src="require('@img/index/zs.png')" width=".89rem" height=".89rem" round></van-image>
        <van-image :src="require('@img/index/zs.png')" width=".89rem" height=".89rem" round></van-image>
      </div>
      <div class="distace">还差<strong>0</strong>人拼团成功</div>
      <van-divider>
        <van-count-down :time="time">
          <template v-slot="timeData">
            剩余
            <span class="block">{{timeData.hours &lt; 10 ? '0' + timeData.hours : timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes &lt; 10 ? '0' + timeData.minutes : timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds &lt; 10 ? '0' + timeData.seconds : timeData.seconds }}</span>
            结束
          </template>
        </van-count-down>
      </van-divider>
    </div>
    <steps v-if="type == 1"></steps>
    <div class="step" v-if="type == 0">
      <span><i>1</i>邀请好友参团</span>
      <span><i>2</i>拼团成功分别发货</span>
      <span><i>3</i>人数不足自动退款</span>
    </div>
    <div class="foot" v-if="type == 0">
      <van-button class="share" round>拼团成功</van-button>
      <van-button class="orange" round @click="link">去开团</van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    steps: () => import('@/components/shops/steps')
  },
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      type: 0
    }
  },
  computed: {},
  watch: {},
  // 方法集合
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    link() {
      this.type = 1
    }
  },
  created() {
    this.$store.dispatch('setBottomType', 0)
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.pintuan {
  background-image: linear-gradient(0deg, #f2f5f9 0%, #f0fff0 100%), linear-gradient(#f2f2f2, #f2f2f2);
  height: 100vh;
  padding-top: 0.9rem;
  .card {
    margin: 0.3rem;
    background: #fff;
    padding: 0.3rem;
    border-radius: 0.2rem;
    display: flex;
    .right {
      margin-left: 0.2rem;
      .title {
        color: #2b2e32;
        font-size: 0.3rem;
        font-weight: bold;
      }
      .watch {
        margin: 0.1rem 0;
        ::v-deep .van-image {
          margin-right: 0.1rem;
        }
      }
      .price-box {
        display: flex;
        .pt-price {
          width: 1rem;
          height: 0.32rem;
          background: url('~@img/unitebuy/pt-price.png') no-repeat;
          color: #fff;
          background-size: contain;
          font-size: 0.2rem;
          padding: 0 0.05rem;
        }
        .marke-price {
          font-weight: bold;
          color: #ff672b;
          font-size: 0.33rem;
          span {
            font-size: 0.38rem;
          }
        }
        .prgin-price {
          font-size: 0.2rem;
          color: #a4acb5;
          text-decoration: line-through;
        }
      }
    }
  }
  .count-time {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0.3rem;
    padding: 0.3rem;
    background: #fff;
    border-radius: 0.2rem;
    .colon {
      display: inline-block;
      margin: 0 4px;
      color: #37c234;
    }
    .block {
      display: inline-block;
      width: 22px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #37c234;
    }
    .distace {
      margin-top: 0.2rem;
      font-size: 0.28rem;
      strong {
        font-size: 0.36rem;
        color: #c1c1c2;
        padding: 0 0.08rem;
      }
    }
  }
  .step {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.3rem;
    padding: 0.3rem 0.2rem;
    background: #fff;
    border-radius: 0.2rem;
    span {
      i {
        border: 1px solid #565f67;
        width: 0.28rem;
        height: 0.28rem;
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        margin-right: 0.05rem;
      }
    }
  }
  .foot {
    width: 100%;
    padding: 0.2rem 0.3rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    ::v-deep .van-button {
      width: 2.97rem;
      color: #fff;
    }
    .share {
      background-color: #2d9bfd;
    }
    .orange {
      background-color: #fd682d;
    }
  }
}
</style>
