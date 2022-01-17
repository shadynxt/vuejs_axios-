import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './routes/home';
import stories from './routes/stories';

Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
    routes: [
        ...home,
        ...stories,
    ],
});
