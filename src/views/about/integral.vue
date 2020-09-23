<!--  -->
<template>
  <div class="integral layout-child">
    <van-nav-bar title="我的积分" left-arrow @click-left="back" />
    <section class="integral-info">
      <div class="integral-info--item integralbg dp-flex">
        <div class="item-box dp-flex">
          <div class="balance pl20">
            <div class="item-balance--title">积分余额</div>
            <div class="item-balance--coin">{{ coin.toFixed(2) }}</div>
          </div>
          <div class="item-button" @click="withdraw">提现💖</div>
        </div>
        <div class="item-box dp-flex pl20 pt30">
          <div class="today item-box--day">
            <div class="day-title">今日积分</div>
            <div class="day-coin">{{ today.toFixed(2) }}</div>
          </div>
          <div class="total item-box--day">
            <div class="day-title">累积积分</div>
            <div class="day-coin">{{ total.toFixed(2) }}</div>
          </div>
          <div class="note">*1积分=1元</div>
        </div>
      </div>
      <div class="integral-tabs">
        <van-tabs line-width=".41rem" v-model="active" swipeable color="#2d9bfd">
          <van-tab title="积分明细" :name="0"></van-tab>
          <van-tab title="提现记录" :name="1"></van-tab>
        </van-tabs>
      </div>
    </section>
    <section class="integral-record layout-scorll">
      <div
        @click="godetail"
        v-for="(item, index) in list"
        :key="'record' + index"
        class="integral-record--item dp-flex"
      >
        <div class="item-box--left">
          <div class="left-title">{{ item.title }}</div>
          <div class="left-time">{{ item.time }}</div>
        </div>
        <div class="item-box--right">
          <div class="right-box">
            <div class="right-integral">+{{ item.integral }}积分</div>
            <div class="right-from">{{ item.from }}</div>
          </div>
          <van-icon name="arrow" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0, // 默认提现记录
      coin: 0, // 余额
      today: 0, // 今日积分
      total: 0, // 累积积分
      list: [
        {
          title: '联购奖励',
          time: '2019-01-23',
          integral: 10,
          from: '来至159******123'
        }
      ]
    }
  },
  methods: {
    withdraw() {
      this.$router.push({
        path: '/withdraw'
      })
    },
    godetail() {
      this.$router.push({
        path: '/integralDetails'
      })
    },
    // 返回
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
.integralbg {
  background: url('~@img/my/integralbg.png') no-repeat;
  background-size: 100% 100%;
}
.integral {
  .integral-info {
    margin-bottom: 0.2rem;
    padding: 0.4rem 0.3rem 0.1rem;
    background-color: #ffffff;
    .integral-info--item {
      margin-bottom: 0.3rem;
      padding: 0.3rem;
      flex-direction: column;
      border-radius: 0.2rem;
      overflow: hidden;
      .item-box {
        align-items: flex-end;
        justify-content: space-between;
        .item-box--day {
          .day-title {
            padding-bottom: 0.2rem;
            font-size: 0.26rem;
            color: #fde0de;
          }
          .day-coin {
            color: #ffffff;
            font-size: 0.36rem;
          }
        }
        .note {
          border-radius: 0.16rem;
          background-color: rgba(255, 255, 255, 0.22);
          color: #ffffff;
          padding: 0 0.2rem;
          font-size: 0.2rem;
        }
      }
      .item-balance--title {
        color: #fde0de;
        font-size: 0.3rem;
        padding: 0.1rem 0 0.2rem;
      }
      .item-balance--coin {
        color: #ffffff;
        font-size: 0.46rem;
      }
      .item-button {
        border: 1px solid #ffffff;
        border-radius: 0.29rem;
        color: #ffffff;
        font-size: 0.32rem;
        letter-spacing: 1px;
        padding: 0.05rem 0.35rem;
        transition: all 235ms ease-in-out 0s;
        cursor: pointer;
        transition: all 235ms ease 0s;
        outline: 0;
        &:hover {
          transform: translate3d(0, 2px, 0);
        }
      }
    }
  }
  .integral-tabs {
    margin: 0 1.4rem;
    ::v-deep .van-hairline--top-bottom::after,
    .van-hairline-unset--top-bottom::after {
      border-width: 0 !important;
    }
  }
}
.integral-record {
  padding: 0.1rem 0.3rem;
  background-color: #ffffff;
  .integral-record--item {
    position: relative;
    padding: 0.3rem 0;
    justify-content: space-between;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-top: 1px solid #e8e8e8;
      transform: scaleY(0.5);
    }
    .left-title {
      color: #2a2d31;
      padding-bottom: 0.2rem;
      font-size: 0.3rem;
    }
    .left-time {
      font-size: 0.28rem;
      color: #8d92a1;
    }
    .right-box {
      height: 100%;
      padding-right: 0.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .right-integral {
      font-size: 0.3rem;
      color: #fd682d;
    }
    .right-from {
      color: #565e67;
      font-size: 0.28rem;
    }
    .item-box--right {
      display: flex;
      align-items: center;
      text-align: right;
    }
  }
}
</style>
