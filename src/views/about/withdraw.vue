<!--  -->
<template>
  <div class="withdraw layout-child">
    <van-nav-bar title="我要提现" left-arrow @click-left="back" />
    <div class="withdraw-amount">
      <label>积分余额：</label>
      <span class="amount-coin">{{ coin.toFixed(2) }}</span>
      <span class="amount-about">(≈12323.5元)</span>
    </div>
    <div class="withdraw-main layout-scorll">
      <div class="withdraw-card">
        <div class="withdraw-card--left">
          <label>提现到：</label>
          <span class="card">
            {{ bankCard }}
          </span>
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="withdraw-select">
        <div class="select-title">选择提现数量</div>
        <div class="select-content">
          <div class="select-content--box">
            <div class="box-left">
              <div class="box-left--coin">100<span class="unit">元</span></div>
              <div class="box-left--note">需100积分</div>
            </div>
            <div class="box-right">提现</div>
          </div>
        </div>
      </div>
      <div class="withdraw-bottom">
        <van-button color="#f8453f" round type="primary" size="large">申请提现</van-button>
      </div>
      <div class="withdraw-msg">
        <div class="msg-info">温馨提示</div>
        <div class="msg-info">1、提现申请将在1-3个工作日完成审核，请耐心等待。</div>
        <div class="msg-info">2、积分无需转换为现金，可直接累计提现。</div>
        <div class="msg-info">3、可在“积分提现记录”中查看提现状态。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      coin: 0,
      bankCard: '您还未绑定银行卡'
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
.withdraw {
  .withdraw-amount {
    background-color: #ffffff;
    padding: 0.3rem;
    margin-bottom: 0.2rem;
    label {
      color: #565e67;
      font-size: 0.3rem;
    }
    .amount-coin {
      color: #f93337;
      font-size: 0.32rem;
      margin: 0 0.2rem;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .amount-about {
      color: #2b2e32;
      font-size: 0.28rem;
      letter-spacing: 1px;
    }
  }
  .withdraw-main {
    padding: 0.2rem 0.3rem;
    background-color: #ffffff;
    .withdraw-card {
      position: relative;
      padding: 0.3rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .withdraw-card--left {
        font-size: 0.3rem;
        label {
          color: #565e67;
        }
        .card {
          color: #2d9bfd;
        }
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #e8e8e8;
        transform: scaleY(0.5);
      }
    }
    .withdraw-select {
      .select-title {
        padding: 0.3rem 0;
        color: #565e67;
        font-size: 0.3rem;
      }
      .select-content {
        padding: 0.2rem;
        .select-content--box {
          width: 3rem;
          height: 1.4rem;
          border-radius: 0.3rem;
          overflow: hidden;
          display: flex;
          .box-left {
            padding: 0.2rem 0 0.2rem 0.4rem;
            width: 2.2rem;
            height: 100%;
            background: radial-gradient(circle at right top, transparent 0.1rem, #f3f3f3 0) top left / 2.2rem 50%
                no-repeat,
              radial-gradient(circle at right bottom, transparent 0.1rem, #f3f3f3 0) bottom left / 2.2rem 50% no-repeat;
            .box-left--coin {
              color: #7c8084;
              font-size: 0.49rem;
              .unit {
                font-size: 0.31rem;
              }
            }
            .box-left--note {
              color: #8c8f92;
              font-size: 0.24rem;
              padding-left: 2px;
            }
          }
          .box-right {
            width: 0.8rem;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.2rem;
            text-align: center;
            color: #b8bbbe;
            font-size: 0.22rem;
            background: radial-gradient(circle at left top, transparent 0.1rem, #f3f3f3 0) top right / 0.8rem 50%
                no-repeat,
              radial-gradient(circle at left bottom, transparent 0.1rem, #f3f3f3 0) bottom right / 0.8rem 50% no-repeat;
          }
        }
      }
    }
    .withdraw-bottom {
      padding: 0.7rem 0.3rem;
    }
    .withdraw-msg {
      color: #565e67;
      font-size: 0.22rem;
      .msg-info {
        padding-bottom: 0.1rem;
      }
    }
  }
}
</style>
