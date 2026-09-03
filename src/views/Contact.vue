<template>
    <body>
        <img class="banner" src="../assets/osao_kotkantie1.webp">
        <div class="form-wrapper">
            <h1>Kirjoita meille viesti!</h1>
            <hr style="width: 80vw;">
            <div class="contact-name-email">
                <input class="form-control" @keydown="checkFields()" v-model="name" type="text" placeholder="Nimi">
                <input class="form-control" @keydown="checkFields()" v-model="email" type="email" placeholder="Sähköposti">
            </div>
            <input class="form-control subject" @keydown="checkFields()" v-model="subject" type="text" placeholder="Aihe">
            <h5>Viestisi</h5>
            <textarea class="form-control message" @keydown="checkFields()" v-model="message" placeholder="Viesti"></textarea>
            <h5 v-if="showSuccess">Viesti lähetetty!</h5>
            <button v-else class="btn-primary btn" :disabled="disableButton" @click="send()">Lähetä</button>
        </div>
    </body>
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
    body {
        gap: 15px;
        text-align: center;
        justify-content: initial;
        height: auto;
        min-height: 100vh;
        padding-bottom: 50px;
    }

    .form-wrapper {
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding-left: 20vw;
        padding-right: 20vw;
    }

    .contact-name-email {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
    }

    h5 {
        text-align: center;
        margin-top: 15px;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 16px;
    }

    .form-control.message {
        min-height: 120px;
        resize: vertical;
    }

    .btn-primary, .btn-secondary {
        margin-top: 10px;
    }

    .banner {
        width: 100vw;
        mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    }
</style>
