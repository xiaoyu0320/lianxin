<!--  -->
<template>
  <div class="unit">
    <van-nav-bar title="中联信" />
    <div class="contianer">
      <van-image :src="require('@img/lianqu/tishi.png')"></van-image>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },

  computed: {},

  watch: {},

  methods: {},
  created() {
    this.$store.dispatch('setBottomType', 1)
  }
}
</script>
<style lang="scss" scoped>
.contianer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
