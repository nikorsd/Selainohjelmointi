<template>
    <body>
        <div class="card">
            <h3>Kirjoita meille viesti!</h3>
            <div class="contact-name-email">
                <input class="form-control" @keydown="checkFields()" v-model="name" type="text" placeholder="Nimi">
                <input class="form-control" @keydown="checkFields()" v-model="email" type="email" placeholder="Sähköposti">
            </div>
            <input class="form-control subject" @keydown="checkFields()" v-model="subject" type="text" placeholder="Aihe">
            <h5>Viestisi</h5>
            <textarea name="Sähköposti" @keydown="checkFields()" v-model="message" id=""></textarea>
            <button class="btn-primary btn" :disabled="disableButton" @click="send()">Lähetä</button>
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
            }
        },
        methods: {
            checkFields() {
                console.debug("yes")
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
            }
        }
    }
</script>

<style scoped>
    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        color: white;
    }

    .card {
        background-color: rgb(98, 145, 73);
        padding: 2%;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2%;
    }

    .contact-name-email {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
    }

    h3 {
        text-align: center;
        color: white;
    }

    h5 {
        text-align: center;
        margin-top: 15px;
        color: white;
    }

    .btn-primary, .btn-secondary {
        margin-top: 10px;
    }
</style>
