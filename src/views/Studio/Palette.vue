<template>
    <body>
        <div class="palette-wrapper">
            <div v-for="(region, index) in regions" :key="index" :class="['region-box', { selected: selectedRegion === index }]" :style="{ backgroundColor: region.color }" @click="selectedRegion = index"></div>
        </div>
        <hr>
        <div class="colorpicker">
            <div v-for="color in colors" :key="color.hex" class="color-swatch" :style="{ backgroundColor: color.hex }" @click="applyColor(color.hex)" :title="color.name"></div>
        </div>
    </body>
</template>

<script setup>
    import { ref } from 'vue';

    const selectedRegion = ref(null);
    const selectedColor = ref('#615550');

    const regions = ref([
        { color: '#9E1030' },
        { color: '#DD4132' },
        { color: '#FE840E' },
    ]);

    const applyColor = (hex) => {
        selectedColor.value = hex;
        if (selectedRegion.value !== null) {
            regions.value[selectedRegion.value].color = hex;
        }
    };

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

    .palette-wrapper {
        display: flex;
        width: 80vw;
        height: 50vh;
        border: 5px solid #000;
    }

    .palette-wrapper > * {
        flex: 1;
    }

    .region-box {
        transition: background-color 0.5s ease;
        cursor: pointer;
    }

    .region-box.selected {
        border: 2.5px dashed #fff;
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
</style>
