<template>
    <nav>
        <img @click="$router.push('/')" src="../assets/logo_ai.png"></img>
        <p class="btn btn-primary" @click="$router.push('/')">Home</p>
        <p class="btn btn-primary" @click="$router.push('/contact')">Contact</p>
        <p class="btn btn-primary" @click="$router.push('/about')">About</p>
    </nav>
</template>

<style scoped>
    nav {
        gap: 15px;
        align-items: center;
        display: flex;
        background: rgba(30, 30, 30, 0.6);
        padding: 8px;
    }

    img {
        height: 35px;
        margin-right: auto;
        border-radius: 5px;
    }

    img:hover {
        cursor: pointer;
        scale: 0.95;
    }

    p {
        margin: 0;
    }
</style>
