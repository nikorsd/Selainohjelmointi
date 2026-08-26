<template>
    <body>
        <div class="img-wrapper">
            <img :src="'/studio/' + room + '.png'" :style="{ backgroundColor }">
        </div>
        <select v-model="room" class="form-select" aria-label="Default select example">
            <option value="room1">Huone 1</option>
            <option value="room2">Huone 2</option>
            <option value="room3">Huone 3</option>
        </select>
        <hr>
        <div class="colorpicker">
            <div v-for="color in colors" :key="color.hex" :class="['color-swatch', { selected: backgroundColor === color.hex }]" :style="{ backgroundColor: color.hex }" @click="backgroundColor = color.hex" :title="color.name"></div>
        </div>
    </body>
</template>

<script setup>
    import { ref } from 'vue';

    const room = ref('room3');
    const backgroundColor = ref('#615550');

    // Used AI to make this array
    const colors = [
        { name: 'Fiesta', hex: '#DD4132' },
        { name: 'Jester Red', hex: '#9E1030' },
        { name: 'Turmeric', hex: '#FE840E' },
        { name: 'Living Coral', hex: '#FF6F61' },
        { name: 'Pink Peacock', hex: '#C62168' },
        { name: 'Pepper Stem', hex: '#8D9440' },
        { name: 'Aspen Gold', hex: '#FFD662' },
        { name: 'Princess Blue', hex: '#00539C' },
        { name: 'Toffee', hex: '#755139' },
        { name: 'Mango Mojito', hex: '#D69C2F' },
        { name: 'Terrarium Moss', hex: '#616247' },
        { name: 'Sweet Lilac', hex: '#E8B5CE' },
        { name: 'Soybean', hex: '#D2C29D' },
        { name: 'Eclipse', hex: '#343148' },
        { name: 'Sweet Corn', hex: '#F0EAD6' },
        { name: 'Brown Granite', hex: '#615550' },
    ];
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

    select {
        width: 200px;
    }

    img {
        height: 50vh;
        transition: background-color 0.5s ease-in-out, transform 0.1s ease-in-out;
    }

    img:hover {
        transform: scale(1.10);
    }

    .img-wrapper {
        border-radius: 12px;
        border: 2.5px solid;
        overflow: hidden;
    }

    .form-select {
        border: 2.5px solid;
    }

    .colorpicker {
        display: grid;
        grid-template-columns: repeat(8, 48px);
        align-items: center;
        justify-content: center;
        gap: 12px;
    }

    .color-swatch {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.1s ease, box-shadow 0.1s ease, box-shadow 0.15s ease-in;
        border: 3px solid transparent;
    }

    .color-swatch:hover {
        transform: scale(1.10);
    }

    .color-swatch:active {
        transform: scale(1);
    }

    .color-swatch.selected {
        border: dashed;
        border-color: #fff;
        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.2);
    }
</style>
