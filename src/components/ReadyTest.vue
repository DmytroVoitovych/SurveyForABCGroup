<template>
  <ContainerMain>
    <div>
      <div>
        <p class="ready__res">Ваш результат рассчитан:</p>
        <p class="ready__desc">
          <span>Вы относитесь к 3%</span>
          , чей уровень интеллекта более чем на 15 пунктов отличается
          от среднего в большую или меньшую сторону!
        </p>
        <p class="ready__call">Скорее получите свой результат!</p>
      </div>
    </div>
    <div>
      <p class="ready__guard">
        В целях защиты персональных данных результат теста, их подробная интерпретация и
        рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
      </p>
    </div>
    <div>
      <p class="ready__forse">
        Звоните скорее, запись доступна всего <br /><span>10:00</span> минут
      </p>
    </div>
    <button @click="getData" type="button" class="red__call">
      Позвонить и прослушать результат
    </button>
    <div class="user__response">
      <div v-for="(value, key) in userInfos" :key="value">
        <p>{{ key }}</p>
        <p>{{ value }}</p>
      </div>
    </div>
  </ContainerMain>
</template>

<script setup>
import { ref } from 'vue'
import ContainerMain from './shared/ContainerMain.vue'
import { pick } from 'lodash'

const userInfos = ref({})
const option = [
  'name',
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender'
]
const url = 'https://swapi.dev/api/people/1/'

const getData = () =>
  fetch(url)
    .then((e) => e.json())
    .then((res) => (userInfos.value = pick(res, option)))
    .then(() => window.localStorage.removeItem('userAnswer'))
    .catch((err) => console.log(err))
</script>

<style scoped>
.ready__res {
  font-family: var(--main-txfont-ptserif);
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 1.6px;
  color: var(--main-tx-clr-white);
  margin-bottom: 6px;
  text-transform: uppercase;
  text-align: center;
}

.ready__desc {
  font-family: var(--main-txfont-ptserif);
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  color: var(--main-tx-clr-white);
  margin-bottom: 22px;
}

.ready__desc span {
  text-decoration: underline;
}

.ready__call {
  font-family: var(--main-txfont-ptserif);
  font-size: 18px;
  font-weight: bold;
  line-height: 1.22;
  letter-spacing: 1.8px;
  text-align: center;
  color: var(--level-clr-green);
  margin-bottom: 12px;
  text-transform: uppercase;
}

.ready__guard {
  font-family: var(--system-txfont-roboto);
  font-size: 8px;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 2px;
  text-align: center;
  color: var(--main-tx-clr-white);
  padding: 15px 12px 10px;
  border-radius: 6px;
  background-color: #1c2741;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.ready__forse {
  font-family: var(--main-txfont-ptserif);
  font-size: 11px;
  line-height: 2.73;
  letter-spacing: 1.1px;
  text-align: center;
  color: var(--level-clr-green);
}

.ready__forse span {
  font-size: 20px;
  letter-spacing: 3px;
}

.red__call {
  padding: 31px 14px 22px 15px;
  background-color: #eb1b00;
  margin: 0 auto;
  display: block;
  border-radius: 5px;
}

.red__call {
  font-family: var(--system-txfont-roboto);
  font-size: 15px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: 0.75px;
  text-align: left;
  color: var(--main-tx-clr-white);
  display: flex;
  align-items: center;
}

.red__call::before {
  content: '';
  display: block;
  width: 28px;
  height: 28px;
  background-image: url(../assets/img/mainPageImg/call.svg);
  background-repeat: no-repeat;
  background-size: contain;

  margin-right: 18px;
}

.user__response {
  text-align: center;
  color: var(--level-clr-green);
  font-family: var(--extra-txfont-merriweather);
}

.user__response > div {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: baseline;
}
</style>
