<template>
  <header>
    <HeaderChunk @click="iqTestRun" />
  </header>

  <main v-if="!start" @click="iqTestRun">
    <SectionHero />
    <DetailOfTest />
    <MotivationForTest />
    <InterpretationTest />
  </main>

  <IqTest v-else> </IqTest>
  <footer>© 2019</footer>
</template>

<script setup>
import { ref } from 'vue'
import DetailOfTest from './components/DetailOfTest.vue'
import HeaderChunk from './components/HeaderChunk.vue'
import InterpretationTest from './components/InterpretationTest.vue'
import MotivationForTest from './components/MotivationForTest.vue'
import SectionHero from './components/SectionHero.vue'
import IqTest from './components/IqTest.vue'

const start = ref(false)

const iqTestRun = (e) => {
  console.log(e)
  if (e.target && e.target.nodeName === 'A') {
    start.value = e.target.pathname.length > 0 ? false : true
  }
  if (!e.target || e.target.nodeName !== 'BUTTON') {
    return
  }

  start.value = e.target.hasAttribute('start')
}
</script>

<style scoped>
header {
  line-height: 1.5;
  background-color: var(--header-bg-black);
  padding: 17px 0 13px;
}

header:has([aria-expanded='true']) {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99999;
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: var(--system-txfont-roboto);
  font-size: 10px;
  line-height: 2.3;
  letter-spacing: 0.5px;
  text-align: center;
  color: var(--system-tx-clr-grey);
}
</style>
