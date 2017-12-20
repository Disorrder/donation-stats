import './vendor';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {name: 'income', path: '/', component: require('app/income').default}
    ]
});

console.log(router);

const data = require('./_data');

$(() => {
    var app = new Vue({
        el: '#app',
        router,
        data: {
            TEST: 'TEST',
            transactions: data.transactions,
        }
    });
});
