<template>
    <main>
        <div class="img-wrapper">
            <img :src="'/studio/' + room + '.png'" :style="{ backgroundColor }" alt="Huoneen esikuva">
        </div>
        <select v-model="room" class="form-select" aria-label="Default select example">
            <option value="room1">Huone 1</option>
            <option value="room2">Huone 2</option>
            <option value="room3">Huone 3</option>
        </select>
        <div class="colorpicker">
            <div v-for="color in colors" :key="color.hex" :class="['color-swatch', { selected: backgroundColor === color.hex }]" :style="{ backgroundColor: color.hex }" @click="backgroundColor = color.hex" :title="color.name"></div>
        </div>
    </main>
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
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 16px;
        min-height: 100vh;
    }

    select {
        width: 200px;
        padding: 8px 12px;
        font-size: 16px;
    }

    img {
        width: 100%;
        height: auto;
        display: block;
        transition: background-color 0.5s ease-in-out, transform 0.1s ease-in-out;
    }

    .img-wrapper {
        border-radius: 12px;
        border: 2.5px solid;
        overflow: hidden;
        width: 100%;
        max-width: 400px;
    }

    .form-select {
        border: 2.5px solid;
    }

    .colorpicker {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));
        justify-content: center;
        gap: 10px;
        width: 100%;
        max-width: 500px;
    }

    .color-swatch {
        aspect-ratio: 1;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.1s ease, box-shadow 0.1s ease, box-shadow 0.15s ease-in;
        border: 3px solid transparent;
        min-width: 36px;
    }

    .color-swatch:active {
        transform: scale(0.95);
    }

    .color-swatch.selected {
        border-color: #fff;
        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 480px) {
        .wall-page {
            padding: 12px;
            gap: 12px;
        }

        .img-wrapper {
            max-width: 100%;
        }

        .colorpicker {
            grid-template-columns: repeat(6, 1fr);
            gap: 6px;
        }

        .color-swatch {
            min-width: 28px;
        }
    }
</style>
