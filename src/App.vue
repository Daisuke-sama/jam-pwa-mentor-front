<template>
    <div>
        <ul>
            <li v-for="(link, index) in links" :key="index">
                <router-link :to="link.to">{{ link.name }}</router-link>
            </li>
        </ul>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

<script>
    export default {
        components: {

        },
        data: () => ({
            links: [
                {
                    name: 'Главная',
                    to: '/'
                },
                {
                    name: 'Доступные квизы',
                    to: '/filters/quizzes'
                },
                {
                    name: 'Модифицированная Шкала Пирс-Харрис',
                    to: '/filters/quizzes/harris'
                },
                {
                    name: '404',
                    to: '/404-url'
                }
            ]
        }),
        methods: {
            goBack () {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        }
    }
</script>
