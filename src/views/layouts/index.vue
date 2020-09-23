<template>
  <div class="app-container">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
    <div v-show="foottype != 0" class="layout-footer">
      <TabBar :data="tabbars" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: require('@img/tab/home.png'),
          icon_end: require('@img/tab/home_end.png')
        },
        {
          title: '联区',
          to: {
            name: 'Unitearea'
          },
          icon: require('@img/tab/area.png'),
          icon_end: require('@img/tab/area_end.png')
        },
        {
          title: '联购',
          to: {
            name: 'Unitebuy'
          },
          icon: require('@img/tab/buy.png'),
          icon_end: require('@img/tab/buy_end.png')
        },
        {
          title: '联商城',
          to: {
            name: 'UniteShop'
          },
          icon: require('@img/tab/shop.png'),
          icon_end: require('@img/tab/shop_end.png')
        },
        {
          title: '我的',
          to: {
            name: 'About'
          },
          icon: require('@img/tab/my.png'),
          icon_end: require('@img/tab/my_end.png')
        }
      ]
    }
  },
  components: {
    TabBar: () => import('@/components/TabBar')
  },
  computed: {
    foottype() {
      return this.$store.state.app.foottype
    }
  }
}
</script>
