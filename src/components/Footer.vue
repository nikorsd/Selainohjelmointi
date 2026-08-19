<template>
    <body>
        <div class="main">
            <hr>
            <div class="links">
                <p>© Kotkantien Maalaus- ja Tapetointi</p>
                <img src="../assets/logo_ai.webp">
                <a @click="$router.push('/')">Koti</a>
                <a @click="$router.push('/contact')">Ota Yhteyttä</a>
                <a @click="$router.push('/about')">Tietoa Meistä</a>
                <a @click="$router.push('/studio')">Studio</a>
            </div>
        </div>
    </body>
</template>

<style scoped>
    body {
        display: flex;
        justify-content: center;
        background-color: rgb(200, 200, 200);
        padding: 20px;
    }

    a {
        cursor: pointer;
    }

    img {
        width: 8rem;
        margin-left: auto;
        margin-right: auto;
        border-radius: 20px;
    }

    .links {
        display: flex;
        gap: 10px;
    }

    .main {
        width: 90vw;
    }
</style>
