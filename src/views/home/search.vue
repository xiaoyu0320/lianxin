<!--  -->
<template>
  <div class="search">
    <van-nav-bar title="搜索商品" left-arrow @click-left="onClickLeft" />
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    <van-tabs v-model="active">
      <van-tab v-for="(item, i) in menu" :key="i">
        <template #title> {{ item.name }} </template>
      </van-tab>
    </van-tabs>
    <div class="line"></div>
    <div class="search-list">
      <div class="item">
        <div class="left">
          <van-image width="2.46rem" height="2.46rem" :src="require('@img/index/zs.png')"></van-image>
        </div>
        <div class="right">
          <div class="title">天猫精灵方糖R哆啦A梦原声智能 音箱儿童闹钟蓝胖子叮...</div>
          <div class="s-title">精心挑选优惠套装</div>
          <div class="ys">已售888件</div>
          <div class="zone">
            <div class="price-box">
              <div class="price">
                <div class="mark"><span>￥</span>128.00</div>
                <div class="orgin">￥188.00</div>
              </div>
              <van-button>马上抢</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <van-empty
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="没有搜到相关的商品"
    /> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: '',
      active: 0,
      menu: [
        {
          name: '推荐',
          type: 0
        },
        {
          name: '销量',
          type: 1
        },
        {
          name: '价格',
          type: 2
        },
        {
          name: '上新',
          type: 3
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
    },
    onSearch(val) {},
    onCancel() {}
  },
  created() {},
  mounted() {
    this.$store.dispatch('setBottomType', 0)
  }
}
</script>
<style lang="scss" scoped>
.search {
  ::v-deep .van-search__content {
    border-radius: 0.3rem;
    .van-field__control {
      box-shadow: none;
      background: #f7f8fa;
    }
  }
  .line {
    background: #f2f2f2;
    height: 0.15rem;
    margin-top: 0.3rem;
  }
  .search-list {
    .item {
      padding: 0.3rem;
      display: flex;
      .right {
        padding-left: 0.3rem;
        .price-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .price {
            .mark {
              font-size: 0.34rem;
              font-weight: bold;
              color: #ff672b;
              span {
                font-size: 0.21rem;
              }
            }
            .orgin {
              font-size: 0.2rem;
              color: #a4acb5;
              text-decoration: line-through;
            }
          }
          ::v-deep .van-button {
            background-image: linear-gradient(90deg, #ffa600 0%, #ff3200 100%), linear-gradient(#fff7ec, #fff7ec);
            border-radius: 0.3rem;
            height: 0.56rem;
            font-size: 0.26rem;
            color: #fff;
            border-color: #fff7ec;
          }
        }
        .title {
          color: #2b2e32;
          font-size: 0.28rem;
          font-family: PingFangSC-Bold;
          font-weight: bold;
        }
        .s-title {
          font-size: 0.28rem;
          color: #565e67;
          line-height: 0.36rem;
          margin: 0.1rem 0;
        }
        .ys {
          color: #a4acb5;
          font-size: 0.2rem;
          margin-bottom: 0.2rem;
        }
      }
    }
  }
}
</style>
