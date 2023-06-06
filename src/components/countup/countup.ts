import type { ExtractPropTypes, PropType } from 'vue'
import type { CountUpOptions } from 'countup.js'

export const countupProps = {
  number: {
    type: [Number, String]
  },
  decimalPlaces: {
    type: Number
  },
  suffix: {
    type: String,
    default: ''
  },
  moreOptions: {
    type: Object as PropType<CountUpOptions>,
    default: () => ({})
  },
  defaultNumber: {
    type: [Number, String],
    default: 0
  }
}

export type Vue3CountupProps = ExtractPropTypes<typeof countupProps>
