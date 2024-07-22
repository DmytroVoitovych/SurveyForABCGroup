<template>
  <div>
    <p class="result__hendling">
      Обработка <br />
      результатов
    </p>
    <div class="wrapper">
      <div class="loader"></div>
    </div>
    <p class="result__defining">
      Определение стиля мышления........... .... ...................................................
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.result__hendling {
  font-family: var(--main-txfont-ptserif);
  font-size: 23px;
  line-height: 1.1;
  letter-spacing: 1.15px;
  text-align: center;
  color: var(--main-tx-clr-white);
  margin-bottom: 33px;
  margin-top: 49px;
}

.wrapper {
  width: 65px;
  height: 68px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 28px;
}

.loader {
  --d: 22px;
  width: 6px;
  height: 4px;
  border-radius: 50%;
  color: var(--level-clr-green);

  box-shadow:
    calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: l27 1s infinite steps(8);
}
@keyframes l27 {
  100% {
    transform: rotate(1turn);
  }
}

.result__defining {
  font-family: var(--main-txfont-ptserif);
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.7px;
  color: var(--main-tx-clr-white);
}
</style>
