<template>
  <section class="detail">
    <ContainerMain>
      <h2 id="details" class="detail__headline visually-hidden">Details of IQ Test</h2>
      <p class="detail__description">
        Профессиональный<span></span> IQ-тест позволяет не только определить коэффициент вашего
        интеллекта,
        <span>но и выработать список рекомендаций для повышения этого показателя.</span>
      </p>
    </ContainerMain>
  </section>
</template>

<script setup lang="ts">
import ContainerMain from './shared/ContainerMain.vue'
</script>

<style scoped>
.detail {
  position: relative;
  padding: 83px 0 51px;
  background-image: url(../assets/img/mainPageImg/detailbg.jpg);
  background-position: center;
  background-size: cover;
  text-align: center;
  overflow: hidden;
}

.detail::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/mainPageImg/radialdetail.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}

.detail__description {
  position: relative;
  font-family: var(--accent-txfont-yeseva);
  font-size: 18px;
  line-height: 1.28;
  letter-spacing: 0.9px;
  color: var(--main-tx-clr-white);
  z-index: 1;
}

.detail__description > span {
  display: block;
}

.detail__description::before,
.detail__description::after {
  content: '';
  position: absolute;
  width: 23px;
  height: 22px;
}

.detail__description::before {
  background-image: url(../assets/img/mainPageImg/leftdetailquote.svg);
  top: -35px;
  left: 8px;
}

.detail__description::after {
  background-image: url(../assets/img/mainPageImg/rightdetailquote.svg);
  bottom: -15px;
  right: 15px;
}

@media only screen and (min--moz-device-pixel-ratio: 2),
  only screen and (-o-min-device-pixel-ratio: 2/1),
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-device-pixel-ratio: 2) {
  .detail {
    background-image: url(../assets/img/mainPageImg/retina/detailretina.jpg);
  }
}
</style>
