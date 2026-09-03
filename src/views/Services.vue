<template>
    <body>
        <div class="service-card">
            <img src="../assets/gallery/pexels-pavel-danilyuk-6764282.webp" alt="">
            <h2>Maalaus</h2>
            <p>Maalausta</p>
            <a class="btn btn-primary" href="">Buy</a>
        </div>
        <div class="service-card">
            <img src="../assets/gallery/pexels-artbovich-7546769.webp" alt="">
            <h2>Tapetointi</h2>
            <p>Tapetointia</p>
            <a class="btn btn-primary" href="">Buy</a>
        </div>
    </body>
</template>

<style scoped src="../assets/styles/FlexBody.css"></style>
<style scoped>
    body {
        flex-direction: initial;
        gap: 15px;
    }

    .service-card {
        background-color: gray;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 30px;
        color: white;
        gap: 15px;
    }

    .service-card img {
        width: 30vw;
        height: 20vh;
        object-fit: cover;
        border-radius: 15px;
    }
</style>
