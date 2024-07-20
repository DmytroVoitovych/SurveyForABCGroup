<template>
 
 <section class="hero">
 <ContainerMain>
 <div class="hero__wrapper">
 <p class="hero__description">
 Пройдите точный и быстрый
 </p>
 <h1 class="hero__headline" >
 тест на <br/> определение <br/>IQ
 </h1>
 <ButtonMain  class="buttonMain --сorrection">
 <template v-slot:btntext >
    пРойти тест
 </template>
 </ButtonMain>
 <p class="hero__explanation">
 <span>И получите рекомендации 
по развитию своего интеллекта</span>
и улучшению финансового благосостояния и личной жизни
 </p>

 <a href="#details" class="hero__anchor">
 Подробнее
 </a>
 </div>
 
 </ContainerMain>
 </section>
 
 
</template>


<script setup>
import ContainerMain from './shared/ContainerMain.vue';
import ButtonMain from './shared/ButtonMain.vue';
</script>

<style scoped>


.hero{
padding: 27px 0 11px; 
background-image: url(../assets/img/mainPageImg/herobg.jpg);
}

.hero__wrapper{
text-align: center;
}

.hero__description{
font-family: var(--main-txfont-ptserif);
font-size: 18px;
line-height: 1.28;
margin-bottom: 27px;
color: var(--main-tx-clr-white);


}

.hero__headline{
font-family: var(--accent-txfont-yeseva);  
color: var(--accent-tx-clr-orange);
font-size: 30px;
line-height: 1.1;
text-transform: uppercase;
text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.hero__headline::after{
content: '';
display: block;
width: 124px;
height: 108px;
background-image: url(../assets/img/mainPageImg/brainhero.png);  
background-size: cover;
margin-top: 17px;
margin-bottom: 31px;
border-radius: 50%;
margin-left: auto;
margin-right: auto;

}

.--сorrection{
margin-bottom: 22px;  
}

.hero__explanation{
font-family: var(--main-txfont-ptserif);
font-weight: bold;
color: var(--main-tx-clr-white);
font-size: 15px;
line-height: 1.27;
letter-spacing: 0.75px;
margin-bottom: 11px;
}

.hero__explanation > span{
display: block;  
color: var(--accent-tx-clr-orange);  
}

.hero__anchor{
display: block;  
font-family: var(--main-txfont-ptserif);
font-size: 8px;
line-height: 1.1;
letter-spacing: 0.4px;
color: var(--main-tx-clr-white);
text-decoration: none;
}

.hero__anchor::before{
content: '';
display: block;
margin: 0 auto 3px;
width: 16px;
height: 16px;
background-image: url(../assets/img/mainPageImg/heroarrow.svg);  
}

@media only screen and (min--moz-device-pixel-ratio: 2),

only screen and (-o-min-device-pixel-ratio: 2/1),

only screen and (-webkit-min-device-pixel-ratio: 2),

only screen and (min-device-pixel-ratio: 2) {

    .hero {
        background-image: url(../assets/img/mainPageImg/retina/herobgretina.jpg);
    }
}

</style>