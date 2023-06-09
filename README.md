# Vue3Countup

基于[vue3](https://cn.vuejs.org/)，[countUp.js](http://inorganik.github.io/countUp.js/)封装的组件，实现数字滚动效果。

## 示例

```vue
<template>
  <Vue3Countup :number="number" />
</template>

<script setup lang="ts">
import { Vue3Countup } from 'vue3-countup'
import { ref } from 'vue'

const number = ref<string | number>(1000)

setInterval(() => {
  number.value = (Math.random() * 5000).toFixed(2)
}, 3000)
</script>
```

## 属性

| 属性名        | 说明                                                             | 类型           | 默认值    |
| ------------- | ---------------------------------------------------------------- | -------------- | --------- |
| number        | 用于滚动的数字                                                   | string,number  | undefined |
| decimalPlaces | 控制数字位数，不传位数自动计算                                   | number         | undefined |
| suffix        | 后缀                                                             | string         | ''        |
| defaultNumber | 默认值                                                           | string，number | 0         |
| moreOptions   | 更多属性，见[countup.js](http://inorganik.github.io/countUp.js/) | CountUpOptions | {}        |

## 事件

| 事件名 | 说明     | 回调参数  |
| ------ | -------- | --------- |
| finish | 滚动结束 | val：文本 |
