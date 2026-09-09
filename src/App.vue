<script setup>
    import Navbar from './components/Navbar.vue'
    import Footer from  './components/Footer.vue'
</script>

<template>
    <Navbar class="nav"/>
    <RouterView/>
    <Footer></Footer>
</template>

<style scoped>
    .nav {
        left: 0;
        right: 0;
    }
</style>
