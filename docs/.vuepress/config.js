module.exports = {
  title: '人事已非',
  description: '阿布的博客',
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/favicon.ico'
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: 'JavaScript',
        link: '/javascript/'
      },
      {
        text: 'Vue',
        link: '/vue/'
      },
      {
        text: '微信小程序',
        items: [{
          text: '原生小程序',
          link: '/wxml/'
        }, {
          text: 'wepy小程序',
          link: '/wepy/'
        }]
      },
      {
        text: '关于',
        link: '/about/'
      },
      {
        text: 'Github',
        link: 'https://github.com/fengkang92'
      },
    ],
    sidebar: [
      "/",
      '/javascript/',
      "/vue/",
      "/wxml/",
      "/wepy/",
      "/about/"
    ],
    sidebarDepth: 1,
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true, // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      updatePopup: { 
         message: "New content is available.", 
         buttonText: "Refresh" 
      }
    }
  },
}