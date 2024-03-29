import Vue from 'vue';
import Router from 'vue-router';

import Quizzes from '@/components/Filters/Quizzes/Quizzes';
import Harris from '@/components/Filters/Quizzes/Harris';
import Home from '@/components/Home';
import PageNotFound from '@/components/PageNotFound';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: Home
        },
        {
            path: '/filters/quizzes',
            name: 'Доступные квизы',
            component: Quizzes
        },
        {
            path: '/filters/quizzes/harris',
            name: 'Модифицированная Шкала Пирс-Харрис',
            component: Harris
        },
        {
            path: '**',
            name: 'Страница не найдена',
            component: PageNotFound
        }
    ]
});
