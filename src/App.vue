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
        left: 0;
        right: 0;
    }
</style>
