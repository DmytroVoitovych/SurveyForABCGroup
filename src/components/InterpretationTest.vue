<template>
<section class="interpritation">
<ContainerMain>
<h2 class="interpritation__headline visually-hidden" >Interpritation of IQ Test</h2>
<p class="interpritation__description">
Прохождение теста займет у вас не более <span>12 минут</span>, а его результаты вы сможете <span>использовать всю жизнь</span>.
</p>
<p class="interpritation__textattract">
Профессиональная интерпретация и детально 
<span>проработанные рекомендации</span> позволят вам качественно 
<span>изменить все аспекты своей жизни:</span>
 от финансового до любовного.
</p>
<ButtonMain  class="buttonMain --corection">
   <template v-slot:btntext >
    пРойти тест
   </template>
   </ButtonMain>
</ContainerMain>

</section>   
</template>

<script setup lang="ts">
import ButtonMain from './shared/ButtonMain.vue';
import ContainerMain from './shared/ContainerMain.vue';
</script>

<style scoped>
.interpritation{
position: relative;    
padding: 56px 0 83px;
background-image: url(../assets\img\mainPageImg\inerpritationbg.jpg);
background-size: cover;
background-repeat: no-repeat;    
}

.interpritation::after{
content: '';
position: absolute;
right: 0;
top: 65px;
background-image: url(../assets/img/mainPageImg/rightlightningbg.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right;
width: 165px;
height: 165px;     
}

.interpritation::before{
content: '';
position: absolute;
left: 0;
bottom: 62px;
background-image: url(../assets/img/mainPageImg/leftlightningbg.png);
background-repeat: no-repeat;
background-size: contain;
background-position: left;
width: 165px;
height: 165px;     
}

.interpritation__description{
font-family: var(--extra-txfont-merriweather);
color: var(--main-tx-clr-white); 
font-size: 15px;
line-height: 1.33;
letter-spacing: 0.75px;
text-align: left;
padding-right: 30px;
margin-bottom: 16px;   
}

.interpritation__description span{
font-weight: 900;
color: var(--accent-tx-clr-orange);    
}

.interpritation__textattract{
position: relative;    
padding: 29px 15px 31px 14px;
margin-bottom: 33px; 
border-radius: 20px;
background-color: var(--decor-bg-greyalfa);   

font-family: var(--extra-txfont-merriweather);
color: var(--extra-tx-clr-darkblack);
font-size: 16px;
line-height: 1.44;
letter-spacing: 0.8px;
text-align: left;
z-index: 1;
}

.interpritation__textattract span{
font-weight: bold;    
}

.--corection{
display: block;
margin: 0 auto;
background-image: none;
color: var(--main-tx-clr-white);
border: 1px solid var(--main-tx-clr-white);
}


@media only screen and (min--moz-device-pixel-ratio: 2),

only screen and (-o-min-device-pixel-ratio: 2/1),

only screen and (-webkit-min-device-pixel-ratio: 2),

only screen and (min-device-pixel-ratio: 2) {

    .interpritation {
        background-image: url(../assets/img/mainPageImg/retina/interpritationbgretina.jpg);
    }

    .interpritation::after{
    background-image: url(../assets/img/mainPageImg/retina/rightlightningbgretina.png);    
    }

    .interpritation::before{
    background-image: url(../assets/img/mainPageImg/retina/leftlightningbgretina.png);    
    }
}
</style>