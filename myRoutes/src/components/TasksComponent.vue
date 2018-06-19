<template>
    <div>
        <h2>{{ title }}</h2>

        <p>Parâmetro: </p>{{ id }}
    </div>
</template>

<script>
    export default{
        props: ['id'],
        data() {
            return {
                title: 'Lista de tarefas'
            }
        }
    }
</script>

<style scoped>

</style>

