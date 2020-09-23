<template>
  <div class="detail detail-bg layout-child">
    <van-nav-bar class="un-bg--color" title="订单详情" left-arrow @click-left="back" />
    <div class="layout-scorll">
      <div class="detail-head">
        <div class="status">待发货</div>
        <div class="status-content">等待商家发货</div>
      </div>
      <div class="detail-address dp-flex">
        <div class="icon">
          <van-icon size=".39rem" :name="require('@img/order/address.png')" />
        </div>
        <div class="address-right">
          <div class="address-right--info dp-flex">
            <div class="name">张三</div>
            <div class="tel">153****5965</div>
          </div>
          <div class="address-box">
            福建省厦门市思明区软件园二期望海路43号4层前台后
          </div>
        </div>
      </div>
      <div class="detail-main">
        <div class="merchandise dp-flex">
          <div class="merchandise-img">
            <van-image width="2.16rem" height="2.16rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="merchandise-details">
            <div class="merchandise-details--title">天猫精灵方糖R哆啦A梦原声 智能音箱儿童闹钟蓝胖子叮</div>
            <div class="merchandise-details--spec">官方标配 ;哆啦A梦蓝</div>
            <div class="merchandise-details--price dp-flex">
              <div class="price">￥<span class="unit">101.00</span>x1</div>
              <div class="num">共1件</div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
// 请求接口
import { Authorization } from '@/api/user.js'
export default {
  components: {},
  data() {
    // 这里存放数据
    return {}
  },
  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      // const params = {
      //   username: 13306036804,
      //   password: 123456,
      //   grant_type: 'password',
      //   scope: 'all',
      //   type: 'account'
      // }
      Authorization()
        .then(res => {
          console.log(res)
        })
        .catch(() => {})
    },
    back() {
      this.$router.go(-1)
    }
  },
  mounted() {
    this.initData()
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$store.dispatch('setBottomType', 0)
  }
}
</script>
<style lang="scss" scoped>
.detail-bg {
  background: url('~@img/order/paybg.png') no-repeat top;
  background-size: contain;
}
.un-bg--color {
  ::v-deep .van-nav-bar__title {
    color: #ffffff;
  }
}
.detail {
  color: #ffffff;
}
.detail-head {
  margin-top: 0.6rem;
  text-align: center;
}
.status {
  font-family: PingFangSC-Bold;
  font-size: 0.41rem;
}
.status-content {
  padding: 0.3rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Medium;
}
.detail-address {
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.2rem;
  margin: 0.3rem;
  overflow: hidden;
  padding: 0.3rem;
  .address-right {
    padding-left: 0.3rem;
  }
  .address-right--info {
    font-family: PingFangSC-Bold;
    color: #2b2e32;
    font-size: 0.3rem;
    .tel {
      padding-left: 0.3rem;
    }
  }
  .address-box {
    color: #565e67;
    font-size: 0.26rem;
    margin-top: 0.3rem;
  }
}
.detail-main {
  margin: 0.3rem;
  padding: 0.3rem;
  background-color: #ffffff;
  border-radius: 0.2rem;
  .merchandise-img {
    width: 2.16rem;
    height: 2.16rem;
    border-radius: 0.1rem;
    overflow: hidden;
    flex-shrink: 0;
  }
  .merchandise-details {
    padding-left: 0.3rem;
    .merchandise-details--title {
      @include textoverflow(2);
      font-weight: bold;
      color: #2b2e32;
      font-size: 0.3rem;
    }
    .merchandise-details--spec {
      padding: 0.1rem 0;
      color: #565e67;
      font-size: 0.22rem;
    }
    .merchandise-details--price {
      padding-top: 0.1rem;
      align-items: center;
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
}
</style>
