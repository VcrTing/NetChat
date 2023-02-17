import { userPina } from './pina/user';
import { 
    createRouter, 
    createWebHashHistory,
    RouteLocationNormalized
} from 'vue-router'

import auth from './router/auth'
import room from './router/room'

const index = () => {
    return [
        { path: '/', redirect: '/chat' },
        { path: '/index', redirect: '/chat' },
    ]
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [ ...index(), ...auth,
        { path: '/chat', component: () => import('../view/index/index.vue'), children: [
            ...room
        ] }
    ],
});

const white = [ '/iogin' ]

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
    if (userPina().is_iogin) {
        if (to.path === white[0]) { next('/') } else { next() }
    } else {
        white.includes( to.path ) ? next() : next( white[0] + '?to=' + to.path )
    }
}) 

export default router;