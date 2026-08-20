<template>
    <body>
        <img src="../../assets/studio/room1.png" :style="{ backgroundColor: backgroundColor }">
        <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <hr>
        <div class="colorpicker">
            <!--Used AI to set all the colors to the right places-->
            <div class="fiesta" style="background-color: #DD4132;" @click="backgroundColor = '#DD4132'"></div>
            <div class="jester-red" style="background-color: #9E1030;" @click="backgroundColor = '#9E1030'"></div>
            <div class="turmeric" style="background-color: #FE840E;" @click="backgroundColor = '#FE840E'"></div>
            <div class="living-coral" style="background-color: #FF6F61;" @click="backgroundColor = '#FF6F61'"></div>
            <div class="pink-peacock" style="background-color: #C62168;" @click="backgroundColor = '#C62168'"></div>
            <div class="pepper-stem" style="background-color: #8D9440;" @click="backgroundColor = '#8D9440'"></div>
            <div class="aspen-gold" style="background-color: #FFD662;" @click="backgroundColor = '#FFD662'"></div>
            <div class="princess-blue" style="background-color: #00539C;" @click="backgroundColor = '#00539C'"></div>
            <div class="toffee" style="background-color: #755139;" @click="backgroundColor = '#755139'"></div>
            <div class="mango-mojito" style="background-color: #D69C2F;" @click="backgroundColor = '#D69C2F'"></div>
            <div class="terrarium-moss" style="background-color: #616247;" @click="backgroundColor = '#616247'"></div>
            <div class="sweet-lilac" style="background-color: #E8B5CE;" @click="backgroundColor = '#E8B5CE'"></div>
            <div class="soybean" style="background-color: #D2C29D;" @click="backgroundColor = '#D2C29D'"></div>
            <div class="eclipse" style="background-color: #343148;" @click="backgroundColor = '#343148'"></div>
            <div class="sweet-corn" style="background-color: #F0EAD6;" @click="backgroundColor = '#F0EAD6'"></div>
            <div class="brown-granite" style="background-color: #615550;" @click="backgroundColor = '#615550'"></div>
        </div>
    </body>
</template>

<script setup>
import { ref } from 'vue';

const backgroundColor = ref('transparent');
</script>

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
