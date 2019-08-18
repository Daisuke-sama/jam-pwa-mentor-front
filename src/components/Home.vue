<template>
    <div>
        <h1>{{ this.headline }}</h1>
    </div>
</template>

<style scoped>
    h1 {
        color: blue
    }
</style>

<script>
    export default {
        data: function() {
            return {
                headline: "Главная"
            }
        }
    }
</script>
