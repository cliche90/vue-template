import Vue from 'vue';

import store from './store';
import router from './router';

import Router from './Router.vue';

new Vue({
    render: h => h(Router),
    router,
    store,
}).$mount('#app');
