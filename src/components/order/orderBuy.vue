<template>
  <van-action-sheet
    :close-on-click-overlay="false"
    lock-scroll
    safe-area-inset-bottom
    v-model="show"
    @cancel="close"
    title="请选择支付方式"
  >
    <div class="content">
      <van-radio-group :border="false" checked-color="#fd682d" v-model="radio">
        <van-cell-group :border="false">
          <van-cell center :border="false" label="微信安全支付" clickable @click="radio = '1'">
            <template #icon>
              <div class="cell-icon">
                <van-image round width=".56rem" height=".56rem" fit="cover" :src="require('@img/pay/wxPay.png')" />
              </div>
            </template>
            <template #title>
              <div class="cell-title">
                微信支付
              </div>
            </template>
            <template #label>
              <div class="cell-label">
                微信安全支付
              </div>
            </template>
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell center :border="false" clickable @click="radio = '2'">
            <template #icon>
              <div class="cell-icon">
                <van-image round width=".56rem" height=".56rem" fit="cover" :src="require('@img/pay/zfbPay.png')" />
              </div>
            </template>
            <template #title>
              <div class="cell-title">
                支付宝
              </div>
            </template>
            <template #label>
              <div class="cell-label">
                支付宝安全支付
              </div>
            </template>
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
          <van-cell center :border="false" clickable @click="radio = '3'">
            <template #icon>
              <div class="cell-icon">
                <van-image round width=".56rem" height=".56rem" fit="cover" :src="require('@img/pay/yunPay.png')" />
              </div>
            </template>
            <template #title>
              <div class="cell-title">
                云闪付
              </div>
            </template>
            <template #label>
              <div class="cell-label">
                云闪付安全支付
              </div>
            </template>
            <template #right-icon>
              <van-radio name="4" />
            </template>
          </van-cell>
          <van-cell center :border="false" clickable @click="radio = '4'">
            <template #icon>
              <div class="cell-icon">
                <van-image round width=".56rem" height=".56rem" fit="cover" :src="require('@img/pay/balancePay.png')" />
              </div>
            </template>
            <template #title>
              <div class="cell-title">
                余额支付
              </div>
            </template>
            <template #label>
              <div class="cell-label">
                可用积分：100000
              </div>
            </template>
            <template #right-icon>
              <van-radio name="5" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="footer">
      下一步
    </div>
  </van-action-sheet>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      radio: '1'
    }
  },
  methods: {
    close() {
      this.$emit('close', false)
    }
  },
  created() {}
}
</script>
<style lang="scss" scoped>
.content {
  padding: 0.3rem 0;
  .cell-icon {
    width: 0.8rem;
    height: 0.56rem;
  }
}
.footer {
  text-align: center;
  line-height: 0.8rem;
  height: 0.8rem;
  font-size: 0.32rem;
  color: #ffffff;
  background-color: #fd682d;
}
</style>
