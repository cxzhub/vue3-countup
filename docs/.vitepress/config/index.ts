import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin'

module.exports = {
  title: 'Vue3 Countup',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cxzhub/vue3-countup' }
    ],

    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2023-present Chen Xing zhi'
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  base: '/vue3-countup/'
}
