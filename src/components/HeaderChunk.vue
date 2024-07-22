<template>
  <ContainerMain>
    <nav role="navigation" aria-label="Navigation menu">
      <button :aria-expanded="menuShow" type="button" @click="switchMenu">
        <svg
          aria-hidden="true"
          focusable="false"
          :width="menuShow ? 28 : 24"
          :height="menuShow ? 28 : 16"
        >
          <use :href="menuOrcrose"></use>
        </svg>
      </button>

      <ul class="header__menu">
        <li class="header__menu-item"><a href="#" @click="menuShow && switchMenu()">Главная</a></li>
        <li class="header__menu-item">
          <a href="#testresults" @click="menuShow && switchMenu()">Информация о тесте</a>
        </li>
        <li class="header__menu-item">
          <button class="menuTextButton" start type="button" @click="switchMenu">
            Пройти тест
          </button>
        </li>
      </ul>
    </nav>
  </ContainerMain>
</template>

<script setup>
import { ref } from 'vue'
import ContainerMain from './shared/ContainerMain.vue'
import { computed } from 'vue'

const menu = new URL('../assets/sprite.svg', import.meta.url).href

const menuShow = ref(false)

const menuOrcrose = computed(() => menu + (!menuShow.value ? '#icon-menu' : '#icon-cross'))

const switchMenu = () => (menuShow.value = !menuShow.value)
</script>

<style scoped>
.header__menu {
  display: flex;
  flex-direction: column;
  gap: 27px;
}

.header__menu-item {
  font-family: var(--system-txfont-roboto);
  font-size: 16px;
  line-height: 1.38;
  font-weight: 300;
  color: var(--main-tx-clr-white);
  text-transform: uppercase;
}

.menuTextButton {
  font-family: inherit;
  font-weight: inherit;
  color: var(--accentmenu-tx-clr-orange);
  text-transform: uppercase;
}

[aria-expanded='true'] {
  display: block;
  margin-left: auto;
  margin-bottom: 64px;
}

[aria-expanded='true'] + .header__menu {
  height: 100vh;
  opacity: 1;
  animation: menuAppears 450ms ease;
}

[aria-expanded='false'] + .header__menu {
  animation: menuDisappears 450ms ease;
  display: none;
}

@media screen and (min-width: 768px) {
  [aria-expanded='false'] {
    display: none;
  }

  [aria-expanded='false'] + .header__menu {
    display: flex;
    display: flex;
    flex-direction: unset;
  }
}

@keyframes menuAppears {
  from {
    height: 0vh;
    opacity: 0;
  }
  to {
    height: 100vh;
    opacity: 1;
  }
}

@keyframes menuDisappears {
  from {
    display: block;
    height: 100vh;
  }
  to {
    height: 0vh;
    opacity: 0;
  }
}
</style>
