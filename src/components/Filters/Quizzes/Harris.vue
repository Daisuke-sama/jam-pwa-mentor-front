<template>
    <div>
        <h1>Модифицированная Шкала Пирс-Харрис</h1>
        <form v-if="questions.length !== 0">
            <ul>
                <ranged-quizz-line v-for="qst in this.questions"
                                   v-bind:phraseOne="qst.phraseOne"
                                   v-bind:phraseTwo="qst.phraseTwo"
                                   v-bind:questionId="qst._id"
                />
            </ul>

            <button v-on:click.prevent="sendResults">Send</button>
        </form>
        <div v-else>
            <div class="red">Извините, проблемы с получением информации о данном квизе!</div>
            <div>Но вы можете посмотреть, как работает диапазонный квиз на примере ниже</div>
            <form>
                <ul>
                    <ranged-quizz-line v-for="item in getRange"
                                       v-bind:phraseOne="'фраза1 вопрос'+item"
                                       v-bind:phraseTwo="'фраза2 вопрос'+item"
                                       v-bind:questionId="item"
                    />
                </ul>

                <button v-on:click.prevent="sendResults">Send</button>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Harris',
        data() {
            return {
                name: 'Оценка качества жизни',
                questions: [],
                url: 'https://feed-service.scopicsoftware.com/answer',
                person_id: Number,
            }
        },
        computed: {
            getRange() {
                Array.range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

                return Array.range(1, 10);
            },
        },
        created() {
            this.getQuestions();
        },
        methods: {
            getQuestions() {
                console.log('started');
                let vm = this;
                let quests = '';

                const request = async () => {
                    const response = await fetch(this.$data.url);
                    const data = await response.json();

                    vm.$data.name = data.name;
                    quests = data.questions;
                    vm.$data.person_id = data.person_id;
                };

                request();

                console.log('ended');
                console.log(quests);

                return quests;
            },
            sendResults() {
                const collectAnswers = () => {
                    return [];
                };

                const request = new Request(this.$data.url, {
                    method: 'POST',
                    body: collectAnswers(),
                });

                fetch(request)
                    .then(response => {
                        if (response.status === 200) {
                            return response.json();
                        } else {
                            throw new Error('Что-то случилось с API сервером!');
                        }
                    })
                    .then(response => {
                        console.debug(response);

                        alert('Sent! You\'ll be redirected.');
                        window.location.href = '/#';
                    })
                    .catch(error => {
                        console.error(error);
                        alert('AAAAA! Error эгэйн! Настройки!');
                    });
            }
        }
    }
</script>

<style scoped>
    .red {
        background-color: red;
        color: white;
    }

    ul {
        padding-inline-start: 0;
    }

    .row {
        padding-bottom: 5px;
        border-bottom: 1px lightgray solid;
        padding-top: 5px;
    }
</style>
