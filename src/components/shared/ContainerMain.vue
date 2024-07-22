<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  max-width: 768px;
  padding: 0 15px;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    max-width: 768px;
  }

  @media screen and (max-width: 767.5px) {
    max-width: 480px;
  }
}
</style>
