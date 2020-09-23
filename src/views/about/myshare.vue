<!--  -->
<template>
  <div class="myshare layout-child">
    <van-nav-bar title="我的推广用户" left-arrow @click-left="back" />
    <van-search @search="onSearch" show-action shape="round" v-model="mobile" placeholder="请输入搜索手机号/昵称">
      <template #action>
        <div @click="onSearch">查询</div>
      </template>
    </van-search>
    <section class="layout-scorll">
      <div class="item dp-flex">
        <van-image round width="0.69rem" height="0.69rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div>
          <div>十二月是你的谎言</div>
          <div>2020-08-12 07:49:16</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: ''
    }
  },
  methods: {
    onSearch() {},
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
.myshare {
  background-color: #ffffff;
  :v-deep .van-search .van-field__control {
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
  }
}
</style>
<style>
.myshare input {
  box-shadow: none !important;
}
</style>
