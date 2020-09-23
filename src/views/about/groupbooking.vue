<template>
  <div class="groupbooking layout-child">
    <van-nav-bar title="我的拼团" left-arrow @click-left="back" />
    <van-tabs line-width=".41rem" v-model="active" swipeable color="#2d9bfd">
      <van-tab title="进行中" :name="0"></van-tab>
      <van-tab title="已成团" :name="1"></van-tab>
      <van-tab title="拼团失败" :name="2"></van-tab>
    </van-tabs>
    <section class="list layout-scorll">
      <div class="item">
        <div v-show="active === 2" class="item-status">退款中</div>
        <div class="item-info dp-flex">
          <div class="item-img">
            <van-image width="2.16rem" height="2.16rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="item-details">
            <div class="item-details--title">天猫精灵方糖R哆啦A梦原声 智能音箱儿童闹钟蓝胖子叮</div>
            <div class="item-details--spec">官方标配 ;哆啦A梦蓝</div>
            <div class="item-details--price dp-flex">
              <div class="label">拼团价</div>
              <div class="price">￥<span class="unit">101.00</span>x1</div>
              <div class="num">共1件</div>
            </div>
          </div>
        </div>
        <div class="item-total dp-flex">
          合计：
          <div class="coin">￥101.00</div>
          (含运费￥6.00)
        </div>
        <div v-show="active === 0" class="item-foot dp-flex">
          <div class="item-foot--timer">距拼团结束</div>
          <div class="item-foot--bottom">邀请好友</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
      list: [],
      page: 1
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
.list {
  padding: 0 0.3rem;
  .item {
    padding: 0.3rem;
    margin: 0.3rem 0;
    background-color: #ffffff;
    border-radius: 0.2rem;
    .item-status {
      padding-bottom: 0.2rem;
      text-align: right;
      color: #fd682d;
      font-size: 0.26rem;
    }
    .item-img {
      width: 2.16rem;
      height: 2.16rem;
      border-radius: 0.1rem;
      overflow: hidden;
      flex-shrink: 0;
    }
    .item-details {
      padding-left: 0.3rem;
      .item-details--title {
        @include textoverflow(2);
        font-weight: bold;
        color: #2b2e32;
        font-size: 0.3rem;
      }
      .item-details--spec {
        padding: 0.1rem 0;
        color: #565e67;
        font-size: 0.22rem;
      }
      .item-details--price {
        padding-top: 0.1rem;
        align-items: center;
        .label {
          background: url('~@img/my/groupprice.png') no-repeat 0 0;
          background-blend-mode: normal, normal;
          background-size: 100% 100%;
          color: #ffffff;
          font-size: 0.18rem;
          padding: 0 0.2rem;
        }
        .price {
          font-size: 0.22rem;
          padding-left: 0.1rem;
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
    .item-total {
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
    .item-foot {
      align-items: center;
      justify-content: space-between;
      .item-foot--timer {
        color: #a4acb5;
        font-size: 0.24rem;
      }
      .item-foot--bottom {
        width: 1.56rem;
        height: 0.63rem;
        line-height: 0.63rem;
        border: 1px solid #2d9bfd;
        border-radius: 0.32rem;
        text-align: center;
        color: #2d9bfd;
        font-size: 0.28rem;
      }
    }
  }
}
</style>
