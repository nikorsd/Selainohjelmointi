<template>
    <body>
        <img src="../assets/osao_kotkantie1.webp">
        <div>
            <h1>Tietoa meistä</h1>
            <hr>
            <!--Written with AI, since this is a School project and not meant to be deployed-->
            <p>Kotkantien Maalaus- ja Tapetointi on ammattitaitoinen maalaus- ja tapetointialan yritys. Palveluihimme kuuluvat erilaiset sisä- ja ulkomaalaustyöt, tapetoinnit sekä pintojen kunnostukset.</p>
            <p>Meille tärkeintä on huolellinen työnjälki, laadukkaat materiaalit ja tyytyväinen asiakas. Toteutamme työt asiakkaan toiveiden ja kohteen tarpeiden mukaan aina suunnittelusta viimeistelyyn asti.</p>
            <p>Panostamme siistiin työskentelyyn, luotettavuuteen ja hyvään asiakaspalveluun. Olipa kyseessä yksittäisen huoneen uudistaminen tai suurempi maalaus- ja tapetointiprojekti, tavoitteemme on tehdä lopputuloksesta kestävä ja viihtyisä.</p>
            <p>Kotkantien Maalaus- ja Tapetointi – pintaa, johon voit olla tyytyväinen.</p>
        </div>
    </body>
</template>

<style scoped>
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        text-align: center;
        height: 100vh;
    }

    div {
        width: 80vw;
    }

    img {
        width: 100vw;
        mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    }
</style>
