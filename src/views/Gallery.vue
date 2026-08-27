<template>
    <body>
        <h1>Gallery</h1>
        <img src="../assets/osao_kotkantie1.webp" alt="">
        <div class="main-gallery">
            <img src="../assets/osao_kotkantie1.webp" alt="">
            <img src="../assets/osao_kotkantie1.webp" alt="">
            <img src="../assets/osao_kotkantie1.webp" alt="">
            <img src="../assets/osao_kotkantie1.webp" alt="">
            <img src="../assets/osao_kotkantie1.webp" alt="">
        </div>
    </body>
</template>

<style scoped>
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vh;
        height: 100vh;
    }

    .main-gallery {
        display: grid;
        grid-template-columns: auto auto auto;
    }
</style>
