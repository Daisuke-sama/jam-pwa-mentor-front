<template>
    <div class="row">
        <ul>
            <li>{{ phraseOne }}</li>

            <li v-for="item in getRange">

                <input type="radio"
                       v-bind:name="'question-'+questionId"
                       v-bind:value="item"
                />

            </li>

            <li>{{ phraseTwo }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ranged-quizz-line",
        props: {
            questionId: Number,
            phraseOne: String,
            phraseTwo: String
        },
        computed: {
            getRange() {
                Array.range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

                return Array.range(-3, 3);
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
</style>
