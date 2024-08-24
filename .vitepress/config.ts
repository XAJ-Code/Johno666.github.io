import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小阿俊的博客",
  description: "代码知识点归纳",
  base: "/PersonalBlog/",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/src/examples/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: '开始',
        collapsed: false,
        items: [
          { text: 'Markdown 示例', link: '/src/examples/markdown-examples' },
          { text: '运行时API 示例', link: '/src/examples/api-examples' }
        ]
      },
      {
        text: 'web API合集',
        collapsed: false,
        items: [
          { text: 'web Serial串口', link: '/src/webAPI/webSerial' }
        ]
      },
      {
        text: 'NodeJs知识点',
        collapsed: false,
        items: [
          { text: 'nodeJs第一章概述', link: '/src/node/nodeChapter1' },
          { text: 'nodeJs第二章Bufer', link: '/src/node/NodeJS内置模块之buffer' },
          { text: 'nodejs第三章Crypoto', link: '/src/node/NodeJs内置模块-crypto', },
          { text: 'nodejs第四章Events', link: '/src/node/Node.js中的Events模块', },
          { text: 'nodejs第五章Zlib', link: '/src/node/NodeJs-之zlib文件压缩', },
          { text: 'nodejs第六章Http', link: '/src/node/NodeJs中http服务器' },
          { text: 'nodejs第七章反向代理', link: '/src/node/NodeJS实现反向代理' },
          { text: 'nodejs第八章动静分离', link: '/src/node/NodeJS实现动静分离' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
