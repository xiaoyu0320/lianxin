<template>
  <div class="activity layout-scorll">
    <div class="activity-item dp-flex">
      <div class="activity-item--image">
        <van-image width="1.77rem" height="1.77rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="activity-item--box">
        <div class="title">狂欢一元购，轻松任你选</div>
        <div class="time">{{ 1598845648 | formatDate('yyyy-MM-dd hh:mm:ss') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {},
  created() {}
}
</script>
<style lang="scss" scoped>
.activity {
  padding: 0 0.3rem;
}
.activity-item {
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  background-color: #ffffff;
  padding: 0.3rem;
  .activity-item--image {
    width: 1.77rem;
    height: 1.77rem;
    overflow: hidden;
    border-radius: 0.08rem;
  }
  .activity-item--box {
    padding-left: 0.3rem;
    .title {
      font-weight: bold;
      padding: 0.2rem 0;
      color: #2a2d31;
      font-size: 0.32rem;
    }
    .time {
      font-size: 0.26rem;
      color: #848e9c;
    }
  }
}
</style>
