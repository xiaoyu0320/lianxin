<template>
  <div class="order layout-child">
    <van-nav-bar title="我的订单" left-arrow @click-left="back" />
    <van-tabs line-width=".41rem" v-model="active" swipeable color="#2d9bfd">
      <van-tab title="全部" :name="0"></van-tab>
      <van-tab title="待付款" :name="1"></van-tab>
      <van-tab title="待发货" :name="2"></van-tab>
      <van-tab title="已发货" :name="3"></van-tab>
      <van-tab title="已完成" :name="4"></van-tab>
    </van-tabs>
    <section class="order-list layout-scorll">
      <div class="order-list--details">
        <div class="details-head dp-flex">
          <div class="details-head--num dp-flex">
            <label>订单号：</label>
            <p>2020081021025332</p>
          </div>
          <div class="details-head--status">
            待付款
          </div>
        </div>
        <div class="details-main dp-flex">
          <div class="details-main--image">
            <van-image width="2.16rem" height="2.16rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="details-main--content">
            <div class="details-main--title">
              天猫精灵方糖R哆啦A梦原声 智能音箱儿童闹钟蓝胖子叮
            </div>
            <div class="details-main--spec">
              官方标配 ;哆啦A梦蓝
            </div>
            <div class="details-main--price dp-flex">
              <div class="price">￥<span class="unit">101.00</span>x1</div>
              <div class="num">共1件</div>
            </div>
          </div>
        </div>
        <div class="details-total dp-flex">
          合计：
          <div class="coin">￥101.00</div>
          (含运费￥6.00)
        </div>
        <div class="details-foot dp-flex">
          <div class="dp-flex">
            支付剩余时间：<van-count-down @finish="finish(1)" :time="1800000" format="mm 分 ss 秒" />
          </div>
          <div class="details-btn dp-flex">
            <div class="details-btn--default default" @click="unorder()">取消订单</div>
            <div class="details-btn--buy default" @click="buy()">去支付</div>
          </div>
        </div>
      </div>
    </section>
    <order-close v-if="dialogclose" @close="close"></order-close>
    <order-buy v-if="dialogbuy" @close="close"></order-buy>
    <overlay :show="show"></overlay>
  </div>
</template>
<script>
export default {
  components: {
    orderClose: () => import('@c/order/orderClose'),
    orderBuy: () => import('@c/order/orderBuy'),
    overlay: () => import('@c/common/overlay')
  },
  data() {
    return {
      active: 0,
      dialogclose: false,
      dialogbuy: false,
      show: false
    }
  },
  methods: {
    // 去支付
    buy() {
      this.dialogbuy = true
    },
    // 取消订单
    unorder() {
      this.dialogclose = true
    },
    // 关闭所有弹窗
    close(status) {
      this.dialogbuy = status
      this.dialogclose = status
    },
    back() {
      this.$router.back()
    },
    // 倒计时结束执行此函数
    finish(status) {
      this.$toast('倒计时结束')
    }
  },
  created() {
    this.$store.dispatch('setBottomType', 0)
  }
}
</script>
<style lang="scss" scoped>
.order-list {
  padding: 0 0.3rem;
  .order-list--details {
    margin-top: 0.3rem;
    padding: 0.3rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
    .details-head {
      padding-bottom: 0.3rem;
      justify-content: space-between;
      .details-head--num {
        font-size: 0.28rem;
        color: #2b2e32;
        align-items: center;
      }
      .details-head--status {
        font-size: 0.26rem;
        color: #fd682d;
      }
    }
    .details-main {
      .details-main--image {
        min-width: 2.16rem;
        min-height: 2.16rem;
        max-width: 2.16rem;
        max-height: 2.16rem;
        border-radius: 0.2rem;
        overflow: hidden;
      }
      .details-main--content {
        padding-left: 0.2rem;
        .details-main--title {
          @include textoverflow(2);
          font-weight: bold;
          color: #2b2e32;
          font-size: 0.3rem;
          letter-spacing: 0.5px;
        }
        .details-main--spec {
          color: #565e67;
          font-size: 0.22rem;
          padding: 0.2rem 0;
        }
      }
      .details-main--price {
        padding-top: 0.1rem;
        align-items: center;
        .price {
          font-size: 0.22rem;
          color: #ff672b;
          .unit {
            font-weight: bold;
            font-size: 0.28rem;
            padding-right: 0.1rem;
          }
        }
        .num {
          flex: 1;
          text-align: right;
          color: #a4acb5;
          font-size: 0.22rem;
        }
      }
    }
    .details-total {
      color: #a4acb5;
      font-size: 0.26rem;
      justify-content: flex-end;
      align-items: center;
      padding: 0.2rem 0;
      .coin {
        color: #ff672b;
        font-size: 0.34rem;
        font-weight: bold;
        padding-right: 0.2rem;
      }
    }
    .details-foot {
      padding-top: 0.2rem;
      align-items: center;
      justify-content: space-between;
      .default {
        width: 1.4rem;
        height: 0.63rem;
        line-height: 0.63rem;
        text-align: center;
        border-radius: 0.32rem;
      }
      .details-btn--default {
        border: 1px solid #a4acb5;
        color: #2b2e32;
        font-size: 0.28rem;
      }
      .details-btn--buy {
        margin-left: 0.2rem;
        background-color: #fd682d;
        font-size: 0.28rem;
        color: #ffffff;
      }
    }
  }
}
</style>
