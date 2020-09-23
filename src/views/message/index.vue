<template>
  <div class="message">
    <div class="head">
      <van-tabs line-width=".41rem" v-model="active" swipeable color="#2d9bfd">
        <van-tab title="消息通知" :name="0"></van-tab>
        <van-tab title="公告活动" :name="1"></van-tab>
      </van-tabs>
    </div>
    <inform v-if="active == 0"></inform>
    <activity v-if="active == 1"></activity>
  </div>
</template>
<script>
export default {
  components: {
    inform: () => import('@c/message/inform'),
    activity: () => import('@c/message/activity')
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {},
  created() {
    this.$store.dispatch('setBottomType', 0)
  }
}
</script>
<style lang="scss" scoped>
.head {
  background-color: #ffffff;
  padding: 0 1.5rem 0.1rem 1.5rem;
}
</style>
