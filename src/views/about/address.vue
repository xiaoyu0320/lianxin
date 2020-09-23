<template>
  <div class="address layout-child">
    <van-nav-bar title="地址管理" left-arrow @click-left="back" />
    <section v-show="list.length != 0" class="address-body layout-scorll">
      <div v-for="item in list" :key="item.id" class="item">
        <div class="item-head dp-flex">
          <div class="item-head--title">
            {{ item.name }}<span class="phone">{{ item.phone }}</span>
          </div>
          <div class="item-head--tag">{{ item.tag }}</div>
        </div>
        <div class="item-address">
          {{ item.address }}
        </div>
        <div class="item-foot dp-flex">
          <div>默认</div>
          <div class="item-foot--btn dp-flex">
            <div @click="edit(1, item.id)" class="btn-edit btn">编辑</div>
            <div @click="del" class="btn-del btn">删除</div>
          </div>
        </div>
      </div>
      <div class="footer dp-flex">
        <div @click="edit(0)" class="button dp-flex">
          <van-icon name="plus" />
          <div class="button-text">添加新地址</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          name: '张三',
          tag: '公司',
          phone: '153****5965',
          address: '福建省厦门市思明区软件园二期望海路43号4层43号4层'
        }
      ]
    }
  },
  methods: {
    edit(type) {
      this.$router.push({
        path: '',
        query: {
          type: type
        }
      })
    },
    back() {
      this.$router.back()
    },
    del() {
      this.$dialog
        .confirm({
          title: '确认删除',
          message: '你确认要删除地址吗?'
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  created() {
    this.$store.dispatch('setBottomType', 0)
  }
}
</script>
<style lang="scss" scoped>
.item {
  padding: 0.3rem;
  background-color: #ffffff;
  margin-bottom: 0.2rem;
  .item-head {
    justify-content: space-between;
    .item-head--title {
      color: #2c2e33;
      font-size: 0.3rem;
      font-weight: bold;
      .phone {
        padding-left: 0.3rem;
      }
    }
    .item-head--tag {
      width: 0.8rem;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      background-color: #edf6ff;
      border-radius: 0.2rem;
      border: 1px solid #2d9bfd;
      color: #2d9bfd;
      font-size: 0.24rem;
    }
  }
  .item-address {
    padding: 0.3rem 0;
    color: #565e67;
    font-size: 0.26rem;
    word-wrap: break-word;
    letter-spacing: 0.5px;
  }
  .item-foot {
    padding-top: 0.3rem;
    align-items: center;
    justify-content: space-between;
    .item-foot--btn {
      .btn {
        width: 1.29rem;
        height: 0.52rem;
        line-height: 0.52rem;
        text-align: center;
        color: #2b2e32;
        font-size: 0.28rem;
        border-radius: 0.26rem;
        border: 1px solid #a4acb5;
      }
      .btn-del {
        margin-left: 0.2rem;
      }
    }
  }
}
.footer {
  justify-content: center;
  min-height: 100%;
  padding-top: 0.5rem;
  background-color: #ffffff;
  .button {
    width: 5.4rem;
    height: 0.79rem;
    border-radius: 0.4rem;
    border: 1px solid #666666;
    justify-content: center;
    align-items: center;
    color: #3d424e;
    font-size: 0.3rem;
    .button-text {
      padding-left: 0.1rem;
    }
  }
}
</style>
