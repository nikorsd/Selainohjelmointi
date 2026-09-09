<template>
    <div class="form-container">
        <template v-if="submitted">
            <h2>Kiitos!</h2>
            <div class="summary">
                <p><strong>Yhteenveto:</strong></p>
                <p><strong>Palvelu:</strong> {{ service }}</p>
                <p><strong>Nimi:</strong> {{ form.name }}</p>
                <p><strong>Sähköposti:</strong> {{ form.email }}</p>
                <p><strong>Päivämäärä:</strong> {{ formattedDate }}</p>
                <p><strong>Aika:</strong> {{ formattedTime }}</p>
            </div>
            <button class="btn btn-primary" @click="closeForm">Sulje</button>
        </template>
        <template v-else>
            <h2>Varaa palvelu</h2>
            <div class="service-badge">
                Olet ostamassa palvelua: <strong>{{ service }}</strong>
            </div>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name">Nimi</label>
                    <input type="text" id="name" v-model="form.name" required />
                </div>
                <div class="form-group">
                    <label for="email">Sähköposti</label>
                    <input type="email" id="email" v-model="form.email" required />
                </div>
                <div class="form-group">
                    <label for="date">Päivämäärä</label>
                    <input type="date" id="date" v-model="form.date" required />
                </div>
                <div class="form-group">
                    <label for="time">Aika</label>
                    <input type="time" id="time" v-model="form.time" required />
                </div>
                <div class="form-group">
                    <label for="message">Lisätietoja</label>
                    <textarea id="message" v-model="form.message" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Lähetä</button>
            </form>
        </template>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';

    const props = defineProps({
        service: {
            type: String,
            required: true
        }
    });

    const emit = defineEmits(['submit']);

    const submitted = ref(false);

    const form = ref({
        name: '',
        email: '',
        date: '',
        time: '',
        message: ''
    });

    const formattedDate = computed(() => {
        if (!form.value.date) return '';
        const [y, m, d] = form.value.date.split('-');
        return `${d}.${m}.${y}`;
    });

    const formattedTime = computed(() => {
        if (!form.value.time) return '';
        return form.value.time;
    });

    const submitForm = () => {
        submitted.value = true;
        emit('submit', form.value);
    };

    const closeForm = () => {
        submitted.value = false;
        form.value = { name: '', email: '', date: '', time: '', message: '' };
        emit('close');
    };
</script>

<style scoped>
    .form-container {
        font-family: inherit;
    }

    .form-container h2 {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 1.35rem;
    }

    .service-badge {
        color: #555;
        font-size: 14px;
        margin-bottom: 20px;
    }

    .summary {
        color: #333;
        line-height: 1.8;
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        margin-bottom: 6px;
        font-size: 0.9rem;
        color: #333;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
    }

    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #999;
    }

    .form-group textarea {
        min-height: 90px;
        resize: vertical;
    }

    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        min-height: 44px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-primary {
        background-color: #1a1a1a;
        color: white;
    }

    .btn-primary:active {
        background-color: #000;
    }

    @media (max-width: 480px) {
        .form-container h2 {
            font-size: 1.2rem;
        }
    }
</style>
