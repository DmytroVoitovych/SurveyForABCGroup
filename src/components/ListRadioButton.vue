<template>
  <ul>
    <li v-for="answer of answers" :key="answer">
      <slot :name="answer" />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  answers: {
    type: Array,
    required: true
  }
})
</script>
