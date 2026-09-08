<template>
    <footer class="footer">
        <div class="main">
            <nav class="links">
                <a @click="$router.push('/')">Koti</a>
                <a @click="$router.push('/contact')">Ota Yhteyttä</a>
                <a @click="$router.push('/about')">Tietoa Meistä</a>
                <a @click="$router.push('/studio/wall')">Studio: Seinät</a>
                <a @click="$router.push('/studio/palette')">Studio: Värit</a>
                <a @click="$router.push('/gallery')">Galleria</a>
                <a @click="$router.push('/services')">Palvelut</a>
            </nav>
            <hr>
            <div class="bottom">
                <p>© Kotkantien Maalaus- ja Tapetointi</p>
                <img src="../assets/logo_ai.webp" alt="Logo">
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        display: flex;
        justify-content: center;
        background-color: rgb(200, 200, 200);
        padding: 28px 0 20px;
    }

    .main {
        width: 90vw;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 6px 22px;
    }

    a {
        cursor: pointer;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        color: #1c1c1c;
        text-decoration: none;
        border-radius: 8px;
        font-size: 0.95rem;
        transition: background-color 0.15s ease;
    }

    a:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    img {
        height: 4rem;
        border-radius: 20px;
        object-fit: cover;
    }

    .bottom {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
    }

    .bottom p {
        margin: 0;
        color: #1c1c1c;
        font-size: 0.85rem;
    }

    hr {
        border: none;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.15);
        width: 100%;
    }

    @media (max-width: 480px) {
        .links {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        .bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .main {
            width: 100vw;
        }

        .footer {
            padding: 20px 12px 16px;
        }
    }
</style>
