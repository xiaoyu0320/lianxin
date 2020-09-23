<template>
  <div class="editaddress layout-child">
    <van-nav-bar title="添加收货地址" left-arrow @click-left="back" />
    <section class="edit-body layout-scorll">
      <van-field v-model="info.name" required label="收货人" :formatter="formatter" clearable placeholder="姓名" />
      <van-field
        v-model="info.phone"
        required
        maxlength="11"
        type="tel"
        label="手机号"
        clearable
        placeholder="11位手机号"
      />
      <van-field
        v-model="info.address"
        required
        label="详细地址"
        :formatter="formatter"
        clearable
        placeholder="街道门牌号信息"
      />
      <van-field
        v-model="info.postalcode"
        required
        clearable
        label="邮政编码"
        :formatter="formatter"
        placeholder="邮政编码(选填)"
      />
      <div class="footer dp-flex">
        <div class="button">
          <div class="button-text">保存</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name: '',
        phone: '',
        postalcode: '',
        address: ''
      }
    }
  },
  methods: {
    formatter(value) {
      // 过滤特殊符号
      return value.replace(
        /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,
        ''
      )
    },
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
.editaddress {
  background-color: #ffffff;
}
.footer {
  justify-content: center;
  margin: 0.5rem 0;
  .button {
    width: 6.18rem;
    height: 0.86rem;
    line-height: 0.86rem;
    border-radius: 0.4rem;
    text-align: center;
    color: #ffffff;
    font-size: 0.28rem;
    background-color: #2d9bfd;
    .button-text {
      display: inline-block;
      padding-left: 0.1rem;
    }
  }
}
</style>
