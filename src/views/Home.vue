<template>
    <div>
        <h1>Kotkantien maalaus- ja tapetointi</h1>
        <h2>Kotimaista suunnittelua</h2>
        <button class="btn btn-secondary" @click="$router.push('/studio')">Suunnittelu studio</button>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        gap: 0.5rem;
    }

    h1, h2 {
        text-align: center;
    }
</style>
