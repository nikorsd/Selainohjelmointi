<script setup>
    import Home from './views/Home.vue'
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
