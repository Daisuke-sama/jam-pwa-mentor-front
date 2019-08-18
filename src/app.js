import Vue from 'vue';
import App from './App.vue';
import router from './router';

import RangedQuizzLine from '@/elements/Forms/Ranged-Quizz-Line';

Vue.config.productionTip = false;

Vue.component('ranged-quizz-line', RangedQuizzLine);

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
