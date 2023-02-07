import { createRouter, createWebHistory } from "vue-router";
import Article from '../views/Article.vue'
import Audio from '../views/Audio.vue'

const router = createRouter({
    history: createWebHistory(),

    routes:[
        { path: '/', redirect: '/article' },
        { path: '/article', component:Article},
        { path: '/audio', component:Audio},


    ]
})

export default router;