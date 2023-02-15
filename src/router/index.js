import Vue from 'vue'
import VueRouter from 'vue-router'

import AllTours from "../views/AllTours"
import SingleTour from "../views/SingleTour"

Vue.use(VueRouter)

const routes = [
    { path: '/', component: AllTours },
    { name: 'single', path: '/single-tour/:id', component: SingleTour },
]

const router = new VueRouter({
    //отключение хеша "#"
    mode: 'history',
    routes
})

export default router