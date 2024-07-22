<template>
  <picture>
    <slot name="source"></slot>
    <img :src="props.src" :alt="props.alt" />
  </picture>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
img {
  all: inherit;
}
</style>
