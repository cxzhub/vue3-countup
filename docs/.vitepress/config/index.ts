import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin'

module.exports = {
  title: 'Vue3Countup',
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
}
