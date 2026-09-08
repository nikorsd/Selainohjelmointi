<template>
    <!-- Snippet from Bootstrap's templates -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" @click="$router.push('/')">
                <img src="../assets/logo_ai.webp" alt="Bootstrap" height="50">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" :class="{ active: currentRoute === '/' }" @click="$router.push('/')">Koti</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active: currentRoute === '/contact' }" @click="$router.push('/contact')">Ota yhteyttä</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active: currentRoute === '/about' }" @click="$router.push('/about')">Tietoa meistä</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active: currentRoute === '/gallery' }" @click="$router.push('/gallery')">Galleria</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active: currentRoute === '/services' }" @click="$router.push('/services')">Palvelut</a>
                </li>
                <li class="nav-item dropdown" :class="{ show: currentRoute.includes('/studio') }">
                    <a class="nav-link dropdown-toggle" :class="{ active: currentRoute.includes('/studio') }" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Studio
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" :class="{ active: currentRoute === '/studio/wall' }" @click="$router.push('/studio/wall')">Seinien värjäys</a></li>
                        <li><a class="dropdown-item" :class="{ active: currentRoute === '/studio/palette' }" @click="$router.push('/studio/palette')">Paletti rakentaja</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="social-links">
                <li class="nav-item">
                    <a class="social-link" href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">
                        <i class="bi bi-youtube"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="social-link" href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
                        <i class="bi bi-instagram"></i>
                    </a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const currentRoute = computed(() => route.path);
</script>

<style scoped>
    .navbar-brand img {
        border-radius: 20px;
        cursor: pointer;
    }

    .nav-link.active, .dropdown-item.active {
        font-weight: 800 !important;
    }

    .dropdown-item.active {
        background-color: white;
        color: black;
    }

    .nav-link {
        cursor: pointer;
        transition: font-weight 0.3s ease;
    }

    .dropdown-item {
        cursor: pointer;
    }

    .social-links {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-left: auto;
        padding-left: 0;
        list-style: none;
    }

    .social-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        border-radius: 8px;
        color: inherit;
        transition: background-color 0.15s ease, color 0.15s ease;
    }

    .social-link:hover {
        background-color: rgba(0, 0, 0, 0.06);
    }

    .social-link i {
        font-size: 20px;
        line-height: 1;
    }
</style>
