<template>
  <van-action-sheet
    :close-on-click-overlay="false"
    lock-scroll
    safe-area-inset-bottom
    v-model="show"
    @cancel="close"
    title="请选择原因"
  >
    <div class="warning">订单一旦取消，无法恢复，优惠券将原路返还</div>
    <div class="content">
      <van-radio-group :border="false" checked-color="#fd682d" v-model="radio">
        <van-cell-group :border="false">
          <van-cell :border="false" title="我不想买了" clickable @click="radio = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell :border="false" title="信息填写错误，重拍" clickable @click="radio = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
          <van-cell :border="false" title="商家缺货" clickable @click="radio = '3'">
            <template #right-icon>
              <van-radio name="3" />
            </template>
          </van-cell>
          <van-cell :border="false" title="同城见面交易" clickable @click="radio = '4'">
            <template #right-icon>
              <van-radio name="4" />
            </template>
          </van-cell>
          <van-cell :border="false" title="其他原因" clickable @click="radio = '5'">
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
.warning {
  color: #a4acb5;
  font-size: 0.22rem;
  text-align: center;
}
.content {
  padding: 0.3rem 0;
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
