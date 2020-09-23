<!--  -->
<template>
  <div class="steps-box">
    <div class="steps">
      <div class="van-steps van-steps--horizontal">
        <div class="van-steps__items">
          <div class="van-hairline van-step van-step--horizontal van-step--finish">
            <div class="van-step__circle-container">
              <van-image width=".3rem" :src="require('@img/unitebuy/cylg.png')"></van-image>
            </div>
            <div class="van-step__line"></div>
            <div class="van-step__title">参与联购</div>
          </div>
          <div class="van-hairline van-step van-step--horizontal van-step--process">
            <div class="van-step__title van-step__title--active">等待成团</div>
            <div class="van-step__circle-container">
              <van-image width=".39rem" :src="require('@img/unitebuy/ddkj.png')"></van-image>
            </div>
            <div class="van-step__line"></div>
          </div>
          <div class="van-hairline van-step van-step--horizontal">
            <div class="van-step__title">抽奖</div>
            <div class="van-step__circle-container">
              <van-image width=".37rem" :src="require('@img/unitebuy/cj.png')"></van-image>
            </div>
            <div class="van-step__line"></div>
          </div>
          <div class="van-hairline van-step van-step--horizontal">
            <div class="van-step__title">抽中发货</div>
            <div class="van-step__circle-container">
              <van-image width=".39rem" :src="require('@img/unitebuy/czfh.png')"></van-image>
            </div>
          </div>
        </div>
        <div class="step-items">
          <van-image width="1.33rem" :src="require('@img/unitebuy/cjz.png')" style="padding-bottom:.1rem"></van-image>
          抽奖中...
        </div>
      </div>
    </div>
    <div class="sign">未抽中资金原路退回，并获得交易额的2%的奖励</div>
    <div class="join">
      <div class="title">本场参与</div>
      <div class="list">
        <div class="item" v-for="(item, i) in list" :key="i" :class="{ active: item.is_true == 0 }">
          <div class="left">
            <van-image width=".69rem" height=".69rem" round :src="require('@img/index/zs.png')"></van-image>
            <div class="info">
              <div class="name">{{ item.name }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
          </div>
          <div class="right">{{ item.id }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [
        {
          name: '十二月是你的谎言',
          time: '2020-08-12 07:49:16',
          id: '20200812123456979',
          is_true: 0
        },
        {
          name: '十二月是你的谎言',
          time: '2020-08-12 07:49:16',
          id: '20200812123456979'
        },
        {
          name: '十二月是你的谎言',
          time: '2020-08-12 07:49:16',
          id: '20200812123456979'
        },
        {
          name: '十二月是你的谎言',
          time: '2020-08-12 07:49:16',
          id: '20200812123456979'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  // 方法集合
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.steps {
  background: #fff;
  padding: 0.3rem;
  margin: 0.3rem;
  border-radius: 0.2rem;
  .van-steps--horizontal {
    padding: 0.2rem 0.2rem 0;
    position: relative;
    .van-steps__items {
      display: flex;
      padding-top: 0.44rem;
      margin: 0 0 0.2rem;
      .van-step__title {
        font-size: 0.24rem;
        display: inline-block;
      }
      .van-step__circle-container {
        position: absolute;
        top: -0.3rem;
        left: -8px;
        z-index: 1;
        padding: 0 8px;
        background-color: #fff;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      .van-step__line {
        top: -0.3rem;
        left: 0;
        width: 100%;
        height: 2px;
        position: absolute;
        background-color: #37c234;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;
      }
    }
    .van-step {
      position: relative;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      color: #969799;
      font-size: 0.28rem;
    }
  }
  .van-step--horizontal:nth-of-type(1),
  .van-step--horizontal:nth-of-type(2) {
    .van-step__title {
      position: absolute;
      left: -0.3rem;
    }
  }
  .van-step--horizontal:last-child {
    .van-step__title {
      right: 0.4rem;
      position: relative;
    }
    position: absolute;
    right: -0.5rem;
    width: auto;
  }
  .step-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #2b2e32;
    font-size: 0.24rem;
    font-weight: bold;
    padding-top: 0.3rem;
  }
}
.sign {
  color: #91a091;
  font-size: 0.22rem;
  padding: 0.1rem 0.3rem 0.2rem 0.6rem;
  position: relative;
  &::before {
    display: block;
    content: '';
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
    background-color: #fd682d;
    position: absolute;
    left: 0.35rem;
    top: 50%;
    margin-top: -0.05rem;
  }
}
.join {
  background: #fff;

  margin: 0.3rem;
  border-radius: 0.2rem;
  .title {
    color: #2b2e32;
    font-size: 0.3rem;
    padding: 0.15rem 0 0.2rem;
    text-align: center;
    font-family: PingFangSC-Bold;
    position: relative;
    margin-bottom: 0.1rem;
    &::after {
      display: block;
      content: '';
      width: 0.54rem;
      background-color: #37c234;
      border-radius: 0.04rem;
      position: absolute;
      height: 0.07rem;
      bottom: 0;
      left: 50%;
      margin-left: -0.27rem;
    }
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.15rem 0.3rem;
    .left {
      display: flex;
      .info {
        margin-left: 0.1rem;
        .name {
          font-size: 0.28rem;
          margin-bottom: 0.1rem;
          color: #2b2e32;
        }
        .time {
          font-size: 0.26rem;
          color: #565e67;
        }
      }
    }
    .right {
      font-size: 0.28rem;
      color: #2b2e32;
    }
  }
  .active {
    background: #fff6f2;
    .name {
      color: #fd682d !important;
    }
    .time {
      color: #fe9065 !important;
    }
    .right {
      color: #fd682d;
    }
  }
}
</style>
