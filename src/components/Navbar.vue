<template>
    <nav>
        <img></img>
        <p class="button" @click="$router.push('/')">Home</p>
        <p class="button" @click="$router.push('/contact')">Contact</p>
        <p class="button" @click="$router.push('/about')">About</p>
    </nav>
</template>

<style scoped>
    nav {
        gap: 15px;
        align-items: center;
        display: flex;
        background: rgba(30, 30, 30, 0.6);
        backdrop-filter: blur(10px);
        position: fixed;
        z-index: 1;
    }

    img {
        height: 150%;
        margin-right: auto;
        transition: 200ms ease-in-out;
    }

    img:hover {
        cursor: pointer;
        transform: scale(1.05) rotate(-5deg);
    }

    .button {
        padding: 10px 20px;
        background-color: rgb(218, 149, 0);
        text-decoration: none;
        color: white;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: bolder;
        border-radius: 5px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

    .button:hover {
        background-color: rgb(218, 149, 0, 0.8);
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .button:active {
        background-color: rgb(218, 149, 0, 0.7);
        transform: scale(0.95);
    }


    @keyframes hoverAnimation {
        0% {
            transform: rotate(0deg) scale(1);
        }
        25% {
            transform: rotate(10deg) scale(1.1);
        }
        50% {
            transform: rotate(-10deg) scale(1.2);
        }
        75% {
            transform: rotate(10deg) scale(1.1);
        }
        100% {
            transform: rotate(0deg) scale(1);
        }
    }
</style>
