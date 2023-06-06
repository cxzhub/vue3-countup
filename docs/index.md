# 示例

:::preview title
demo-preview=./examples/basic.vue
:::

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
