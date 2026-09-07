<template>
    <footer class="footer">
        <div class="main">
            <hr>
            <div class="links">
                <p>© Kotkantien Maalaus- ja Tapetointi</p>
                <img src="../assets/logo_ai.webp" alt="Logo">
                <a @click="$router.push('/')">Koti</a>
                <a @click="$router.push('/contact')">Ota Yhteyttä</a>
                <a @click="$router.push('/about')">Tietoa Meistä</a>
                <a @click="$router.push('/studio')">Studio</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        display: flex;
        justify-content: center;
        background-color: rgb(200, 200, 200);
        padding: 20px;
    }

    a {
        cursor: pointer;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        padding: 4px 0;
    }

    img {
        height: 4rem;
        margin-left: auto;
        margin-right: auto;
        border-radius: 20px;
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
    }

    .main {
        width: 90vw;
    }

    @media (max-width: 480px) {
        .links {
            flex-direction: column;
            align-items: center;
            gap: 6px;
        }

        .main {
            width: 100vw;
        }

        .footer {
            padding: 16px 12px;
        }
    }
</style>
