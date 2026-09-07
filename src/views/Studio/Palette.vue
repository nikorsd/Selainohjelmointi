<template>
    <main>
        <div class="palette-wrapper">
            <div v-for="(region, index) in regions" :key="index" :class="['region-box', { selected: selectedRegion === index }]" :style="{ backgroundColor: region.color }" @click="selectedRegion = selectedRegion === index ? null : index"></div>
        </div>
        <hr>
        <div v-if="selectedRegion != null" class="colorpicker">
            <div v-for="color in colors" :key="color.hex" class="color-swatch" :style="{ backgroundColor: color.hex }" @click="applyColor(color.hex)" :title="color.name"></div>
        </div>
        <h1 v-else class="hint">Valitse alue</h1>
    </main>
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
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 16px;
        min-height: 100vh;
    }

    .palette-wrapper {
        display: flex;
        width: 100%;
        max-width: 600px;
        height: 30vh;
        max-height: 300px;
        border: 5px solid #000;
        border-radius: 8px;
        overflow: hidden;
    }

    .palette-wrapper > * {
        flex: 1;
    }

    .region-box {
        transition: background-color 0.5s ease;
        cursor: pointer;
        min-height: 60px;
    }

    .region-box.selected {
        border-bottom: solid 10px;
        border-top: solid 10px;
        margin-bottom: -5px;
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

    .hint {
        color: #666;
        font-size: 1rem;
        margin: 8px 0;
    }

    @media (max-width: 480px) {
        .palette-page {
            padding: 12px;
            gap: 12px;
        }

        .palette-wrapper {
            height: 25vh;
            max-height: 200px;
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
