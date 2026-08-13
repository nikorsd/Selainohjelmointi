<script setup>
import Home from './pages/Home.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
    <Navbar class="nav"/>
    <RouterView/>
</template>

<style scoped>
    .nav {
        position: fixed;
        left: 0;
        right: 0;
        height: 35px;
        padding: 8px;
    }
</style>
