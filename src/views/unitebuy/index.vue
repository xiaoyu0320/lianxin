<!--  -->
<template>
  <div class="buy layout-child">
    <van-nav-bar title="中联信" />
    <van-tabs class="layout-scorll">
      <van-tab v-for="(item, i) in menu" :key="i" :title="item.name">
        <div class="pd">
          <cards :list="list" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  components: {
    cards: () => import('@/components/shops/cards')
  },
  data() {
    return {
      menu: [
        {
          name: '推荐'
        },
        {
          name: '家用'
        },
        {
          name: '日用'
        },
        {
          name: '洗护'
        },
        {
          name: '服饰'
        },
        {
          name: '车载'
        },
        {
          name: '酒水'
        },
        {
          name: '食品'
        }
      ],
      list: [
        {
          title: '全铜免打孔肥皂盒香皂架网不锈钢单碟玻璃...',
          price: '101.00',
          type: 1
        },
        {
          title: '全铜免打孔肥皂盒香皂架网不锈钢单碟玻璃...',
          price: '101.00'
        },
        {
          title: '全铜免打孔肥皂盒香皂架网不锈钢单碟玻璃...',
          price: '101.00'
        },
        {
          title: '全铜免打孔肥皂盒香皂架网不锈钢单碟玻璃...',
          price: '101.00'
        },
        {
          title: '全铜免打孔肥皂盒香皂架网不锈钢单碟玻璃...',
          price: '101.00'
        }
      ]
    }
  },
  mounted() {
    this.$store.dispatch('setBottomType', 1)
  }
}
</script>
<style lang="scss" scoped>
.buy {
  .pd {
    margin: 0 0.2rem;
  }
}
</style>
