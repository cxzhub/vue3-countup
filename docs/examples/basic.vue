<template>
  <Vue3Countup :number="number" />
</template>

<script setup lang="ts">
import { Vue3Countup } from '../../src'
import { ref } from 'vue'

const number = ref<string | number>(1000)

setInterval(() => {
  number.value = (Math.random() * 5000).toFixed(2)
}, 3000)
</script>
