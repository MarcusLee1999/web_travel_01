// src/router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Region from '@/components/Region.vue';
import Discount from '@/components/Discount.vue';
import Infor from '@/components/Infor.vue';
import Diary from '@/components/Diary.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/region', component: Region },
    { path: '/discount', component: Discount },
    { path: '/infor', component: Infor },
    { path: '/diary', component: Diary },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
});
