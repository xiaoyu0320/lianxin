<template>
  <div>
    <van-tabbar safe-area-inset-bottom placeholder fixed route v-model="active" @change="handleChange">
      <van-tabbar-item v-for="(item, index) in data" :to="item.to" :key="index">
        {{ item.title }}
        <template #icon="props">
          <van-image width=".52rem" height=".52rem" :src="props.active ? item.icon : item.icon_end" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: this.defaultActive,
      type: 1 // 1：显示底部 0：隐藏底部
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>
