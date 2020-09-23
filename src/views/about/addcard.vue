<template>
  <div class="addcard layout-child">
    <van-nav-bar title="添加银行卡" left-arrow @click-left="back" />
    <section class="addcard-body">
      <div class="warning dp-flex">
        <div class="warning-val">请确保持卡人和实名认证的名一致，否则影响提现</div>
      </div>
      <van-field v-model="card" type="digit" label="卡号" />
      <van-field v-model="bank" type="digit" label="银行" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: '',
      bank: ''
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
.addcard {
  background-color: #ffffff;
}
.warning {
  margin: 0 0.3rem;
  border-radius: 0.1rem;
  padding: 0.3rem;
  background-color: #ecf6ff;
  align-items: center;
  color: #2d9bfd;
  font-size: 0.24rem;
  font-weight: bold;
}
</style>
