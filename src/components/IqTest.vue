<template>
  <section class="iqtest">
    <div class="iqtest__progress" v-if="resready || question">
      <input
        type="range"
        id="progress"
        name="progress"
        min="0"
        max="11"
        v-model="levelOfProgress"
        step="1"
      />
      <label for="progress" class="visually-hidden">Test progress</label>
    </div>
    <ContainerMain v-if="question">
      <p class="iqtest__question" :style="styleP">{{ question }}</p>
      <picture v-if="imageIs" :style="imageStyle" class="testPicture">
        <img :src="imageIs" :alt="imageAlt" />
      </picture>
      <ListRadioButton :answers="answersArray" :class="commonOrSpecial" :listStyle="listStyle">
        <template v-for="answer of answersArray" #[answer] :key="answer">
          <div
            class="radio__wrapper"
            :style="{ backgroundColor: commonOrSpecial.includes('hex') ? answer : 'initial' }"
          >
            <input
              type="radio"
              :id="answer + levelOfProgress"
              :name="question + levelOfProgress"
              :value="answer"
              v-model="value"
            />
            <label :for="answer + levelOfProgress">{{ answer }}</label>
          </div>
        </template>
      </ListRadioButton>
      <ButtonMain class="buttonTest" :disabled="!!!value" @click="sendAnswer">
        <template #btntext> Далее </template>
      </ButtonMain>
    </ContainerMain>
    <ContainerMain v-if="resready">
      <ResultRequest></ResultRequest>
    </ContainerMain>
    <InterpretationTest
      v-if="!resready && !question"
      :ready="!resready && !question"
    ></InterpretationTest>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ContainerMain from './shared/ContainerMain.vue'
import ListRadioButton from './ListRadioButton.vue'
import ResultRequest from './ResultRequest.vue'
import ButtonMain from './shared/ButtonMain.vue'
import { computed } from 'vue'
import { testQuestions } from './data'
import { watch } from 'vue'
import InterpretationTest from './InterpretationTest.vue'

const storageData = []
const value = ref('')
const levelOfProgress = ref(JSON.parse(window.localStorage.getItem('userAnswer'))?.length ?? 0)
const resready = ref(false)
const styleP = computed(() => testQuestions[levelOfProgress.value]?.questionStyle ?? {})
const answersArray = computed(() => testQuestions[levelOfProgress.value]?.answers ?? [])
const question = computed(() => testQuestions[levelOfProgress.value]?.question ?? '')
const commonOrSpecial = computed(() =>
  testQuestions[levelOfProgress.value]?.hex ? 'hex__list' : 'radio__list'
)
const imageIs = computed(() => testQuestions[levelOfProgress.value]?.imageName)
const imageStyle = computed(() => testQuestions[levelOfProgress.value]?.imageStyle)
const imageAlt = computed(() => testQuestions[levelOfProgress.value]?.imageAlt)
const listStyle = computed(() => testQuestions[levelOfProgress.value]?.listStyle)

const sendAnswer = () => {
  storageData.push(value.value)
  const handledData = JSON.stringify(storageData)

  window.localStorage.setItem('userAnswer', handledData)
  levelOfProgress.value++
  value.value = ''
}

watch(levelOfProgress, (n) => n === 11 && (resready.value = true))
watch(resready, (n) => n && setTimeout(() => (resready.value = false), 5000))
</script>

<style scoped>
.grid__wrapper {
  display: grid;
}

.iqtest {
  padding: 17px 0 25px;
  background-image: url(../assets/img/mainPageImg/iqtestbg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  flex: 2;
  overflow: hidden;
}

.iqtest__progress {
  text-align: center;
}

input[type='range'] {
  pointer-events: none;
  border-radius: 10.5px;
  background-color: color-mix(in srgb, var(--prosgress-bg-grey), transparent 59%);
  height: 11px;
  max-width: 260px;
  width: 100%;
  outline: none;
  overflow: hidden;
  -webkit-appearance: none;
  appearance: none;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 16px;
  width: 16px;
  background-color: var(--level-clr-green);
  border-radius: 11px;
  box-shadow: -480px 0 0 480px var(--level-clr-green);
  box-shadow: -407px 0 0 400px var(--level-clr-green);
}

input[type='range']::-moz-range-thumb {
  height: 16px;
  width: 16px;
  background-color: var(--level-clr-green);
  border-radius: 11px;
  box-shadow: -407px 0 0 400px var(--level-clr-green);
}

.iqtest__question {
  font-family: var(--main-txfont-ptserif);
  font-size: 20px;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: center;
  color: var(--main-tx-clr-white);
}

.radio__list {
  display: grid;
  gap: 8px;
  padding-left: 20px;
  /* margin-bottom: 150px; */
}

.radio__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 39px;
}

.radio__wrapper::after {
  content: '';
  pointer-events: none;
  width: 300vw;
  height: 100%;
  left: -100%;
  position: absolute;
  background-color: color-mix(in srgb, var(--prosgress-bg-grey), transparent 85%);
}

.radio__wrapper:has(input[type='radio']:checked)::after {
  background-color: var(--main-btn-bg-orange);
  z-index: 0;
}

input[type='radio'] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid var(--main-tx-clr-white);
  border-radius: 50%;
  background-color: transparent;
  position: relative;
  z-index: 1;
}

input[type='radio'] + label {
  font-family: var(--main-txfont-ptserif);
  font-size: 18px;
  line-height: 1.1;
  padding: 18px 0;
  letter-spacing: 0.9px;
  color: var(--main-tx-clr-white);
  z-index: 1;
}

input[type='radio']:checked {
  border: 1px solid var(--extra-tx-clr-black);
  background-color: var(--radio-bg-blue);
}

input[type='radio']:checked + label {
  color: var(--extra-tx-clr-black);
}

.buttonTest {
  position: absolute;
  left: 50%;
  right: 50%;
  translate: -50% -50%;
  bottom: 7px;
}

@media screen and (max-height: 660px) {
  .buttonTest {
    position: unset;
    translate: unset;
    display: block;
    margin: 0 auto;
    margin-top: 8px;
  }

  .hex__list + .buttonTest {
    position: absolute;
    left: 50%;
    right: 50%;
    translate: -50% -50%;
    bottom: 7px;
  }
}

.buttonTest:not(:disabled) {
  background-image: radial-gradient(
    circle at 50% 50%,
    var(--main-btn-bg-orange),
    var(--main-btn-bg-orange) 21%
  );
  color: var(--main-btn-clr-black);
}

.hex__list {
  display: flex;
  column-gap: 21px;
  row-gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.hex__list .radio__wrapper {
  gap: unset;
  width: 75px;
  height: 75px;
}

.hex__list .radio__wrapper::after {
  content: none;
}

.hex__list input[type='radio'] {
  border: unset;
  background-color: unset;
}

.hex__list input[type='radio'] + label {
  color: transparent;
}

.hex__list .radio__wrapper:has(input[type='radio']:checked) {
  border: 6px solid var(--main-btn-bg-orange);
}

picture + .hex__list {
  gap: 29px;
}

picture + .hex__list .radio__wrapper {
  justify-content: center;
  gap: unset;
  width: 41px;
  height: 44px;
  background-color: var(--main-tx-clr-white);
}

picture + .hex__list input[type='radio'] + label {
  color: var(--main-btn-clr-black);
  font-size: 20px;
  line-height: 2.45;
}

picture + .hex__list input[type='radio'] {
  position: absolute;
}

.testPicture {
  margin: 0 auto;
}

.radio__list[listStyle='true'] {
  gap: 19px;
}

.radio__list[listStyle='true'] .radio__wrapper {
  gap: 15px;
  padding: 19px;
}

.radio__list[listStyle='true'] label {
  line-height: 1.1;
}

picture:has([alt='Star']) {
  position: relative;
}

picture:has([alt='Star'])::after {
  content: '';
  position: absolute;
  left: -100px;
  right: -100px;
  bottom: -24px;
  height: 4px;
  opacity: 0.15;
  background-color: var(--prosgress-bg-grey);
}

picture:has([alt='Star']) + .hex__list {
  gap: 9px;
}
</style>
