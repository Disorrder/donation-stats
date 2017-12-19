// import Vue from 'vue';
// import VueRouter from 'vue-router';

const Vue = require('vue/dist/vue.js');
const VueRouter = require('vue-router');
Vue.use(VueRouter);
console.log(Vue);

var app = new Vue({
    el: '#app',
    data: {
        msg: 'QWE'
    }
});
