<!--  -->
<template>
  <div class="pp-box">
    <div class="item" v-for="(item, i) in list" :key="i" @click="godetail">
      <div class="no1" v-if="item.type == 1">推荐</div>
      <van-image :src="require('@img/index/zs.png')" />
      <div class="info">
        <div class="titles">
          {{ item.title }}
        </div>
        <div class="price">
          <span>￥{{ item.price }}</span>
          <van-button class="btn">马上抢</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  // 方法集合
  methods: {
    godetail() {
      this.$router.push({
        path: '/unitedetail'
      })
    }
  },
  created() {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.pp-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0.4rem;
  .item {
    width: 48%;
    box-shadow: 0px 8px 14px 1px rgba(219, 223, 230, 0.2);
    margin-bottom: 0.3rem;
    border-radius: 0.2rem;
    position: relative;
    .no1 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 0.8rem;
      height: 0.4rem;
      display: flex;
      align-items: center;
      font-size: 0.24rem;
      justify-content: center;
      color: #fff;
      background: url('~@img/index/bk-bg.png') no-repeat;
      background-size: contain;
    }
    .info {
      padding: 0.2rem;
      .titles {
        color: #2b2e32;
        font-size: 0.28rem;
        line-height: 0.39rem;
        margin-bottom: 0.2rem;
      }
    }
    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ff672b;
    }
    .btn {
      background-image: linear-gradient(90deg, #ffb82f 0%, #ff7120 100%), linear-gradient(#fff7ec, #fff7ec);
      color: #fff;
      border-radius: 0.28rem;
      font-weight: normal;
      font-size: 0.26rem;
      height: 0.56rem;
    }
  }
}
</style>
