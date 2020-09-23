<!-- home -->
<template>
  <div class="layout-child">
    <section class="about about-bg">
      <div class="about-info">
        <van-icon @click="gourl('/message')" name="chat-o" size="25" color="#ffffff" />
      </div>
      <div class="about-user dp-flex">
        <van-image round width="1.12rem" height="1.12rem" :src="defaultImg" />
        <div class="about-user-box dp-flex">
          <div class="user-nickname">
            {{ userinfo.nickname }}
            <span v-if="userinfo.is_agency" class="tag">代理商</span>
          </div>
          <div class="user-share">邀请码：{{ userinfo.share }}</div>
        </div>
      </div>
      <div class="about-integral dp-flex">
        <div class="integral-box">
          <div class="integral-coin">{{ integral.award }}</div>
          <span class="integral-title">奖励积分</span>
        </div>
        <div></div>
        <div class="integral-box">
          <div class="integral-coin">{{ integral.recommend }}</div>
          <span class="integral-title">推荐积分</span>
        </div>
      </div>
      <div class="about-order dp-flex">
        <div class="about-order-head dp-flex">
          <div class="order-title">我的订单</div>
          <div class="order-all">全部订单 <van-icon name="arrow" color="#a4acb5" /></div>
        </div>
        <div class="order-status dp-flex">
          <div class="order-status-box">
            <van-image width=".59rem" height=".59rem" :src="require('@img/my/payment.png')" />
            <div class="status-box--title">待付款</div>
          </div>
          <div class="order-status-box">
            <van-image width=".59rem" height=".59rem" :src="require('@img/my/shipments.png')" />
            <div class="status-box--title">待发货</div>
          </div>
          <div class="order-status-box">
            <van-image width=".59rem" height=".59rem" :src="require('@img/my/put.png')" />
            <div class="status-box--title">待收货</div>
          </div>
          <div class="order-status-box">
            <van-image width=".59rem" height=".59rem" :src="require('@img/my/finish.png')" />
            <div class="status-box--title">已完成</div>
          </div>
          <div class="order-status-box">
            <van-image width=".59rem" height=".59rem" :src="require('@img/my/after.png')" />
            <div class="status-box--title">售后</div>
          </div>
        </div>
      </div>
      <div class="about-list">
        <div class="item" @click="gourl('/groupbooking')">
          <van-image fit="fill" width=".44rem" height=".44rem" :src="require('@img/my/joint.png')" alt />
          <div class="title">我的拼团</div>
          <van-icon name="arrow" />
        </div>
        <div class="item" @click="gourl('/integral')">
          <van-image fit="fill" width=".44rem" height=".44rem" :src="require('@img/my/integral.png')" alt />
          <div class="title">我的积分</div>
          <van-icon name="arrow" />
        </div>
        <div class="item" @click="gourl('/withdraw')">
          <van-image fit="fill" width=".44rem" height=".44rem" :src="require('@img/my/withdraw.png')" alt />
          <div class="title">提现</div>
          <van-icon name="arrow" />
        </div>
        <div class="item" @click="gourl('/myshare')">
          <van-image fit="fill" width=".44rem" height=".44rem" :src="require('@img/my/peddle.png')" alt />
          <div class="title">我推广的用户</div>
          <van-icon name="arrow" />
        </div>
        <div class="item" @click="go('/my/community')">
          <van-image fit="fill" width=".44rem" height=".44rem" :src="require('@img/my/share.png')" alt />
          <div class="title">邀请好友</div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="about-list">
        <div class="item" @click="go('/my/community')">
          <van-image fit="fill" width=".44rem" height=".44rem" :src="require('@img/my/personage.png')" alt />
          <div class="title">个人信息</div>
          <van-icon name="arrow" />
        </div>
        <div class="item" @click="gourl('/address')">
          <van-image fit="fill" width=".44rem" height=".44rem" :src="require('@img/my/shippingaddress.png')" alt />
          <div class="title">收货地址</div>
          <van-icon name="arrow" />
        </div>
        <div class="item" @click="go('/my/community')">
          <van-image fit="fill" width=".44rem" height=".44rem" :src="require('@img/my/service.png')" alt />
          <div class="title">联系客服</div>
          <van-icon name="arrow" />
        </div>
        <div class="item" @click="go('/my/community')">
          <van-image fit="fill" width=".44rem" height=".44rem" :src="require('@img/my/download.png')" alt />
          <div class="title">下载APP</div>
          <van-icon name="arrow" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      defaultImg: require('@img/my/default.png'),
      integral: {
        award: 2046,
        recommend: 2046
      }
    }
  },
  computed: {
    ...mapGetters(['userName', 'userinfo'])
  },
  mounted() {
    this.$store.dispatch('setBottomType', 1)
  },
  methods: {
    gourl(url) {
      this.$router.push({
        path: url
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.about-bg {
  background: url('~@img/my/background.png') no-repeat 0 0;
  background-size: 100%;
}
.about {
  padding: 0 0.3rem;
  .about-info {
    padding: 0.2rem 0;
    text-align: right;
  }
  .about-user-box {
    padding-left: 0.3rem;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    color: #ffffff;
    .user-nickname {
      font-size: 0.32rem;
      .tag {
        background-image: linear-gradient(90deg, #ff7937 0%, #ff8835 26%, #ff9732 53%, #ff762b 100%),
          linear-gradient(#37c234, #37c234);
        background-blend-mode: normal, normal;
        border-radius: 3px;
        color: #ffffff;
        font-size: 0.2rem;
        padding: 0.04rem 0.15rem;
        margin-left: 0.2rem;
      }
    }
    .user-share {
      font-size: 0.22rem;
    }
  }
  .about-integral {
    text-align: center;
    padding: 0.1rem 1rem 0.2rem;
    justify-content: space-around;
    color: #ffffff;
    .integral-coin {
      font-size: 0.32rem;
      padding-bottom: 0.1rem;
    }
    .integral-title {
      font-size: 0.22rem;
      color: #ddeeff;
    }
  }
  .about-order {
    margin-bottom: 0.3rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
    padding: 0.2rem;
    flex-direction: column;
    .about-order-head {
      align-items: baseline;
      justify-content: space-between;
      .order-title {
        color: #2b2e32;
        font-size: 0.28rem;
      }
      .order-all {
        opacity: 0.7;
        color: #565e67;
        font-size: 0.24rem;
        display: flex;
        align-items: center;
      }
    }
    .order-status {
      padding: 0.2rem 0;
      text-align: center;
      justify-content: space-around;
      .order-status-box {
        ::v-deep .van-image {
          margin: 0.1rem 0;
        }
        .status-box--title {
          color: #2b2e32;
          font-size: 0.24rem;
        }
      }
    }
  }
  .about-list {
    padding: 0 0.3rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
    margin-bottom: 0.3rem;
    .item {
      padding: 0.3rem 0;
      display: flex;
      align-items: center;
      .title {
        margin-left: 0.25rem;
        flex: 1;
        color: #333333;
        font-size: 0.32rem;
        font-weight: bold;
      }
    }
  }
}
</style>
