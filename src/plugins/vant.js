// 按需全局引入 vant组件
import Vue from 'vue'
import {
  Button,
  List,
  Cell,
  CellGroup,
  Tabbar,
  Tab,
  NavBar,
  Search,
  Swipe,
  SwipeItem,
  Tabs,
  TabbarItem,
  Toast,
  Icon,
  CountDown,
  Divider,
  Empty,
  Popup,
  RadioGroup,
  Radio,
  Image as VanImage
} from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Toast)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(VanImage)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(CountDown)
Vue.use(Divider)
Vue.use(Empty)
Vue.use(Popup)
Vue.use(Radio)
Vue.use(Tab).use(Tabs)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Search)
Vue.use(RadioGroup)
Vue.use(CellGroup)
