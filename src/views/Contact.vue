<template>
    <main>
        <img class="banner" src="../assets/osao_kotkantie1.webp" alt="Ota yhteyttä">
        <div class="form-wrapper">
            <h1>Kirjoita meille viesti!</h1>
            <hr>
            <div class="contact-name-email">
                <input class="form-control" @keydown="checkFields()" v-model="name" type="text" placeholder="Nimi">
                <input class="form-control" @keydown="checkFields()" v-model="email" type="email" placeholder="Sähköposti">
            </div>
            <input class="form-control subject" @keydown="checkFields()" v-model="subject" type="text" placeholder="Aihe">
            <h5>Viestisi</h5>
            <textarea class="form-control message" @keydown="checkFields()" v-model="message" placeholder="Viesti"></textarea>
            <div v-if="showSuccess" class="success-message">Viesti lähetetty!</div>
            <button v-else class="btn-primary btn" :disabled="disableButton" @click="send()">Lähetä</button>
        </div>
        <div class="contact-info">
            <h2>Suorat yhteystiedot</h2>
            <p>Kotkantie 3, 90100 Oulu</p>
            <p>Puhelin: <a href="tel:+3584499988899">044 999 888 99</a></p>
            <p>Sähköposti: <a href="mailto:info@kotkantienma.fi">info@kotkantienma.fi</a></p>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                name: "",
                email: "",
                subject: "",
                message: "",
                disableButton: true,
                showSuccess: false,
            }
        },
        methods: {
            checkFields() {
                if (this.name && this.email && this.subject && this.message) {
                    console.debug("enabled")
                    this.disableButton = false
                } else {
                    console.debug("disabled")
                    this.disableButton = true
                }
            },
            send() {
                this.name = ""
                this.email = ""
                this.subject = ""
                this.message = ""
                this.disableButton = true
                this.showSuccess = true
            }
        }
    }
</script>

<style scoped src="../assets/styles/FlexBody.css"></style>
<style scoped>
    main {
        gap: 15px;
        text-align: center;
        justify-content: initial;
        height: auto;
        min-height: 100vh;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-wrapper {
        width: 100%;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding: 0 20px;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        margin-top: 10px;
    }

    .contact-info a {
        color: inherit;
    }

    .contact-name-email {
        display: flex;
        gap: 15px;
        width: 100%;
    }

    .contact-name-email .form-control {
        flex: 1;
    }

    h5 {
        text-align: center;
        margin-top: 15px;
    }

    .form-control {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
        min-height: 44px;
    }

    .form-control.message {
        min-height: 120px;
        resize: vertical;
    }

    .btn-primary,
    .btn-secondary {
        margin-top: 10px;
        min-height: 44px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .success-message {
        color: #28a745;
        font-weight: bold;
        padding: 12px;
        background-color: #f0f9f0;
        border: 1px solid #b3e6b3;
        border-radius: 8px;
        width: 100%;
    }

    hr {
        width: 100%;
    }

    .banner {
        width: 100%;
        max-width: 100vw;
        height: auto;
        mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    }

    @media (max-width: 480px) {
        .contact-page {
            padding-bottom: 24px;
        }

        .form-wrapper {
            padding: 0 12px;
            gap: 12px;
        }

        .contact-name-email {
            flex-direction: column;
            gap: 15px;
        }

        .banner {
            height: 180px;
            object-fit: cover;
        }
    }
</style>
