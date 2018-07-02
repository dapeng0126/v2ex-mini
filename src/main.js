import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      '^pages/index/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'V2EX',
      navigationBarTextStyle: 'black'
    },
    // tabBar: {
    //   color: "#92969c",
    //   selectedColor: "#03a5ef",
    //   borderStyle: "white",
    //   backgroundColor: "#f7f7fa",
    //   list: [{
    //       pagePath: "pages/index/index",
    //       iconPath: "image/home-icon.png",
    //       selectedIconPath: "image/home-icon-active.png",
    //       text: "首页"
    //     },
    //     {
    //       pagePath: "pages/elite/elite",
    //       iconPath: "image/elite-icon.png",
    //       selectedIconPath: "image/elite-icon-active.png",
    //       text: "找精英"
    //     },
    //     {
    //       pagePath: "pages/release/release",
    //       iconPath: "image/release-icon.png",
    //       selectedIconPath: "image/release-icon.png",
    //       text: "发布"
    //     }
    //   ]
    // }
  }
}