<template>
  <div class="inform layout-scorll">
    <div class="inform-item">
      <div class="inform-item--time">
        {{ 1598845648 | formatDate('yyyy年MM月dd日') }}
      </div>
      <div class="inform-item--details">
        <div class="details-head dp-flex">
          <van-image round width=".4rem" height=".4rem" :src="icon" />
          <div class="details-head--status">联购未抽中</div>
        </div>
        <div class="details-body">
          <div class="details-body--item dp-flex">
            <label>订单</label>
            <p class="value">123456789101112131415</p>
          </div>
          <div class="details-body--item dp-flex">
            <label>奖励</label>
            <p class="value"><span class="unit">100</span>积分</p>
          </div>
          <div class="details-body--item dp-flex">
            <label>来自</label>
            <p class="value">{{ 18405007901 | hidePhone }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: require('@img/message/systemMsg.png')
    }
  },
  methods: {},
  created() {}
}
</script>
<style lang="scss" scoped>
.inform {
  padding: 0.3rem;
  .inform-item--time {
    text-align: center;
    font-size: 0.26rem;
    color: #565e67;
    padding: 0.2rem 0;
  }
  .inform-item--details {
    background-color: #ffffff;
    border-radius: 0.2rem;
    padding: 0.2rem;
    .details-head {
      position: relative;
      justify-content: space-between;
      padding-bottom: 0.2rem;
      ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #e5e5e5;
        transform: scaleY(0.5);
      }
      .details-head--status {
        color: #fd682d;
        font-size: 0.3rem;
      }
    }
    .details-body {
      padding: 0.1rem 0;
      .details-body--item {
        color: #79828c;
        font-size: 0.3rem;
        padding: 0.2rem 0;
        .value {
          margin-left: 0.3rem;
          color: #1b1d20;
        }
        .unit {
          color: #ff2d31;
          font-weight: bold;
          padding-right: 0.1rem;
        }
      }
    }
  }
}
</style>
