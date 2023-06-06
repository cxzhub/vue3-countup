<template>
  <span ref="countupRef">
    {{ number ?? defaultNumber }}
  </span>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from 'vue'
import { CountUp } from 'countup.js'
import { countupProps } from './countup'

const props = defineProps(countupProps)

const emit = defineEmits<{
  (e: 'finish', val?: string): void
}>()

const decimalPlaces = ref(0)

const options = computed(() => ({
  duration: 1,
  decimalPlaces: props.decimalPlaces ?? decimalPlaces.value,
  suffix: props.suffix,
  ...props.moreOptions
}))

const countupRef = ref()
let countUp: CountUp

const callBack = () => {
  emit('finish', countupRef.value?.innerText)
}

const initCountUp = (val: number) => {
  countUp = new CountUp(countupRef.value, val, options.value)
  if (!countUp.error) {
    countUp.start(callBack)
  }
}

onMounted(() => {
  watch(
    () => props.number,
    val => {
      if (val === null || val === undefined) {
        countUp?.reset()
        return
      }
      const decimal = `${val}`.split('.')?.[1]?.length ?? 0
      const num = val

      if (
        !countUp ||
        ((props.decimalPlaces === null || props.decimalPlaces === undefined) &&
          decimalPlaces.value !== decimal)
      ) {
        decimalPlaces.value = decimal
        initCountUp(Number(num))
      } else {
        countUp?.update(Number(num))
      }
    },
    {
      immediate: true
    }
  )
})
</script>

<style lang="scss" scoped></style>
