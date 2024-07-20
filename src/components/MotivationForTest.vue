<template>
   <section class="motivation">
   <ContainerMain>
   <h2 class="motivation__headline visually-hidden" >Motivation of IQ Test</h2>
   <p class="motivation__description">
   Также по результатам теста
<b>вы получите</b> подробные <b>советы</b> по определению наиболее перспективной 
<b>для вашего типа <span>интеллекта</span> сферы деятельности</b>, 
которая принесет вам скорейший финансовый результат.
   </p>
   <PictureComponent 
   v-bind:src="'../assets/img/mainPageImg/pictureoptimised/brainmotivationpng1x.png'"
   v-bind:alt="'two lobes of the brain'"
   class="motivation__picture"
    >
   <template #source>
    <source 
    srcset="
    ../assets/img/mainPageImg/pictureoptimised/brainmotivation1x.webp 1x,
    ../assets/img/mainPageImg/pictureoptimised/brainmotivation2x.webp 2x
     " type="image/webp"/>
    <source srcset="
    ../assets/img/mainPageImg/pictureoptimised/brainmotivationpng1x.png 1x,
    ../assets/img/mainPageImg/pictureoptimised/brainmotivationpng2x.png 2x
    " type="image/png"/>
   </template>
     </PictureComponent>
    <ButtonMain  class="buttonMain --corection">
   <template v-slot:btntext >
    пРойти тест
   </template>
   </ButtonMain>
   </ContainerMain>
   </section>
</template>

<script setup>
import ButtonMain from './shared/ButtonMain.vue';
import ContainerMain from './shared/ContainerMain.vue';
import PictureComponent from './shared/PictureComponent.vue';


</script>

<style scoped>

.motivation{
padding: 38px 0 40px;
background-color: var(--extra-bg--whitedusk);    
}

.motivation__description{
font-family: var(--main-txfont-ptserif);
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.8px;
color: var(--extra-tx-clr-black);
margin-bottom: 26px;    
}

.motivation__description > b{
text-transform: uppercase;
font-weight: bold;    
}

.motivation__description span{
text-transform: lowercase;
font-weight: inherit;
    
}

.motivation__picture{
margin: 0 auto;
margin-bottom: 30px;    
}

.--corection{
    margin: 0 auto;
    display: block;
}
</style>
