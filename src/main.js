import Vue from 'vue';
import Router from './Router.vue';

import router from './router';

new Vue({
    render: h => h(Router),
    router,
}).$mount('#app');