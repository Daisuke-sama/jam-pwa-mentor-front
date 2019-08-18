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
    ul {
        list-style: none;
        display: flex;
        padding: 0;
    }
    li {
        padding: 5px 15px 5px 0;
    }
    li a {
        text-decoration: none;
        color: black;
    }
    li a:hover {
        color: #404040;
    }
</style>

<script>
    export default {
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
        })
    }
</script>
