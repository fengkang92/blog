module.exports = {
  title: '个人主页',
  description: '阿布的博客',
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/logo.ico'
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
  ],
  themeConfig: {
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
  },
}