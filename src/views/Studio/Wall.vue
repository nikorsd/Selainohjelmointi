<template>
    <body>
        <img src="../../assets/studio/livingroom/room2.png">
        <hr>
        <div class="colorpicker">
            <!--Used AI to set all the colors to the right places-->
            <div class="fiesta" style="background-color: #DD4132;"></div>
            <div class="jester-red" style="background-color: #9E1030;"></div>
            <div class="turmeric" style="background-color: #FE840E;"></div>
            <div class="living-coral" style="background-color: #FF6F61;"></div>
            <div class="pink-peacock" style="background-color: #C62168;"></div>
            <div class="pepper-stem" style="background-color: #8D9440;"></div>
            <div class="aspen-gold" style="background-color: #FFD662;"></div>
            <div class="princess-blue" style="background-color: #00539C;"></div>
            <div class="toffee" style="background-color: #755139;"></div>
            <div class="mango-mojito" style="background-color: #D69C2F;"></div>
            <div class="terrarium-moss" style="background-color: #616247;"></div>
            <div class="sweet-lilac" style="background-color: #E8B5CE;"></div>
            <div class="soybean" style="background-color: #D2C29D;"></div>
            <div class="eclipse" style="background-color: #343148;"></div>
            <div class="sweet-corn" style="background-color: #F0EAD6;"></div>
            <div class="brown-granite" style="background-color: #615550;"></div>
        </div>
    </body>
</template>

<style scoped>
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        gap: 10px;
    }

    img {
        height: 40vh;
    }

    .colorpicker {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .colorpicker div {
        width: 40px;
        height: 40px;
        border-radius: 40px;
    }
</style>
