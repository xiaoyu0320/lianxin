/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/unitearea',
        name: 'Unitearea',
        component: () => import('@/views/unitearea/index'),
        meta: { title: '联区', keepAlive: false }
      },
      {
        path: '/unitebuy',
        name: 'Unitebuy',
        component: () => import('@/views/unitebuy/index'),
        meta: { title: '联购', keepAlive: false }
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/home/search'),
        meta: { title: '联购', keepAlive: false }
      },
      {
        path: '/unitedetail',
        name: 'UniteDetail',
        component: () => import('@/views/unitebuy/detail'),
        meta: { title: '详情', keepAlive: false }
      },
      {
        path: '/paystyle',
        name: 'paystyle',
        component: () => import('@/views/unitebuy/paystyle'),
        meta: { title: '详情', keepAlive: false }
      },
      {
        path: '/pintuan',
        name: 'pintuan',
        component: () => import('@/views/unitebuy/pintuan'),
        meta: { title: '联购中', keepAlive: false }
      },
      {
        path: '/payfailed',
        name: 'payfailed',
        component: () => import('@/views/unitebuy/payfailed'),
        meta: { title: '支付失败', keepAlive: false }
      },
      {
        path: '/uniteshop',
        name: 'UniteShop',
        component: () => import('@/views/uniteShop/index'),
        meta: { title: '联商城', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index'),
        meta: { title: '我的', keepAlive: false }
      },
      {
        path: '/integral',
        name: 'integral',
        component: () => import('@/views/about/integral'),
        meta: { title: '我的积分', keepAlive: false }
      },
      {
        path: '/integralDetails',
        name: 'integralDetails',
        component: () => import('@/views/about/integralDetails'),
        meta: { title: '积分详情', keepAlive: false }
      },
      {
        path: '/withdraw',
        name: 'withdraw',
        component: () => import('@/views/about/withdraw'),
        meta: { title: '我要提现', keepAlive: false }
      },
      {
        path: '/myshare',
        name: 'myshare',
        component: () => import('@/views/about/myshare'),
        meta: { title: '我的推广用', keepAlive: false }
      },
      {
        path: '/groupbooking',
        name: 'groupbooking',
        component: () => import('@/views/about/groupbooking'),
        meta: { title: '我的拼团', keepAlive: false }
      },
      {
        path: '/banklist',
        name: 'banklist',
        component: () => import('@/views/about/banklist'),
        meta: { title: '我的银行卡', keepAlive: false }
      },
      {
        path: '/addcard',
        name: 'addcard',
        component: () => import('@/views/about/addcard'),
        meta: { title: '添加银行卡', keepAlive: false }
      },
      {
        path: '/address',
        name: 'address',
        component: () => import('@/views/about/address'),
        meta: { title: '地址管理', keepAlive: false }
      },
      {
        path: '/editaddress',
        name: 'editaddress',
        component: () => import('@/views/about/editaddress'),
        meta: { title: '添加收货地址', keepAlive: false }
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/message/index'),
        meta: { title: '消息', keepAlive: false }
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/order/index'),
        meta: { title: '订单', keepAlive: false }
      },
      {
        path: '/payresult',
        name: 'payresult',
        component: () => import('@/views/order/payresult'),
        meta: { title: '订单结果', keepAlive: false }
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/order/detail'),
        meta: { title: '订单详情', keepAlive: false }
      }
    ]
  }
]
