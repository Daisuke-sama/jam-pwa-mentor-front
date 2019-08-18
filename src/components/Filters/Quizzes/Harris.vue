<template>
    <div>
        <h1>Модифицированная Шкала Пирс-Харрис</h1>
        <form>
            <ul>
                <ranged-quizz-line
                        v-bind:phraseOne="'aa'"
                        v-bind:phraseTwo="'bb'"
                        v-bind:questionId="1"
                />
            </ul>
        </form>
    </div>
</template>

<script>
    

    export default {
        name: 'Harris',
        created() {

        }
    }
</script>

<style scoped>

</style>
