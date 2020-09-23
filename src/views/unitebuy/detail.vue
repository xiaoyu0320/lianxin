<!--  -->
<template>
  <div class="detail layout-child">
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft" />
    <div class="container layout-scorll">
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item><van-image width="100%" :src="require('@img/index/zs.png')"></van-image></van-swipe-item>
        </van-swipe>
      </div>
      <div class="detail-container">
        <div class="detail-mode">
          <div class="price">
            <div class="mark-price">￥<span class="co">148.00</span> <span class="by">包邮</span></div>
            <div class="orngin-price">￥399.50</div>
          </div>
          <div class="time">
            <div class="count-down">
              <van-count-down :time="time" format="mm:ss">
                <template v-slot="timeData">
                  <span class="block">{{ timeData.minutes &lt; 10 ? '0' + timeData.minutes : timeData.minutes }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.seconds &lt; 10 ? '0' + timeData.seconds : timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
            <div class="count-txt">
              本轮联购倒计时
            </div>
          </div>
        </div>
        <div class="titles">
          <h3>
            天猫精灵方糖R哆啦A梦原声智能音箱儿童闹 钟蓝胖子叮当猫机器猫蓝牙音箱学习机
          </h3>
          <div class="share">
            <van-image width=".25rem" :src="require('@img/unitebuy/share.png')" style="margin-right:.1rem"></van-image
            >分享
          </div>
        </div>
        <div class="bz">
          <div class="item">
            <van-image width=".2rem" :src="require('@img/unitebuy/bz.png')"></van-image>100%正品 假一赔十
          </div>
          <div class="item"><van-image width=".2rem" :src="require('@img/unitebuy/bz.png')"></van-image>不支持退货</div>
          <div class="item">
            <van-image width=".2rem" :src="require('@img/unitebuy/bz.png')"></van-image> 七天质量问题换货
          </div>
        </div>
      </div>
      <div class="detail-cell">
        <van-cell-group>
          <van-cell
            class="cell"
            title="【联购玩法】"
            value="详情"
            label="每五分钟开团一次，每团为100人，支持不同商品混在一..."
          />
          <van-cell title="规格" is-link value="请选择" />
          <van-cell title="服务" is-link value="部分地区无法配送" />
        </van-cell-group>
      </div>
    </div>
    <div class="foot">
      <van-button class="share" @click="show = true" round>邀请好友联购</van-button>
      <van-button class="orange" @click="link" round>参与联购</van-button>
    </div>
    <van-popup round v-model="show" closeable position="bottom" :style="{ height: '70%' }">
      <sku></sku>
    </van-popup>
  </div>
</template>

<script>
export default {
  components: {
    sku: () => import('@/components/shops/sku')
  },
  data() {
    return {
      time: 4 * 60 * 1000,
      show: false
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
      this.$router.push({
        path: '/pintuan'
      })
    }
  },
  created() {
    this.$store.dispatch('setBottomType', 0)
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.detail {
  background: #f8f8f8;
  padding-bottom: 1.2rem;
}
.detail-container {
  background: #fff;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  .detail-mode {
    display: flex;
    justify-content: space-between;
    .price {
      color: #ff672b;
      font-weight: bold;
      .mark-price {
        font-size: 0.24rem;
        .co {
          font-size: 0.46rem;
        }
        .by {
          border: 1px solid #ff672b;
          padding: 0 0.1rem;
          border-radius: 0.1rem;
        }
      }
      .orngin-price {
        text-decoration: line-through;
        color: #a4acb5;
        font-size: 0.24rem;
        margin-top: 0.1rem;
        font-weight: bold;
      }
    }
    .time {
      display: flex;
      flex-direction: column;
      align-items: center;
      .colon {
        display: inline-block;
        margin: 0 4px;
        color: #37c234;
      }
      .block {
        display: inline-block;
        width: 0.5rem;
        color: #fff;
        font-size: 0.36rem;
        text-align: center;
        background-color: #37c234;
        border-radius: 0.05rem;
      }
      .count-txt {
        width: 2rem;
        height: 0.35rem;
        background: url('~@img/unitebuy/count-bg.png');
        background-size: contain;
        color: #fff;
        text-align: center;
        margin-top: 0.1rem;
      }
    }
  }
  .titles {
    position: relative;
    color: #2b2e32;
    font-size: 0.3rem;
    font-weight: bold;
    padding-right: 1.5rem;
    margin-top: 0.2rem;
    h3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      line-height: 0.42rem;
    }
    .share {
      position: absolute;
      right: -0.2rem;
      top: 20%;
      background: rgba(255, 182, 42, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.1rem 0.2rem;
      color: #d8a137;
      border-radius: 0.5rem 0 0 0.5rem;
      font-size: 0.24rem;
      font-weight: normal;
    }
  }
  .bz {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0;
    .item {
      display: flex;
      align-items: center;
      color: #6c737b;
      ::v-deep .van-image {
        margin-right: 0.1rem;
      }
    }
  }
}
.detail-cell {
  .cell {
    background-color: #e7fae6;
    color: #478d45;
    .van-cell__title,
    .van-cell__value,
    .van-cell__label {
      color: #478d45;
      flex: none;
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
</style>
