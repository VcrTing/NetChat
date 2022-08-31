
export default [
    {
        path: '/',
        redirect: '/chat',
        children: [
            { 
                path: '/chat', redirect: '/chat/room', component: () => import('../../../screen/chat/ChatScreen.vue'),
                children: [
                    { path: '/chat/room', component: () => import('../../../screen/chat_users/ChatUsersScreen.vue'), },
                    { path: '/chat/settings', component: () => import('../../../screen/setting/SettingScreen.vue') },
                    { path: '/chat/user_panner', component: () => import('../../../screen/user/panner/UserPannerScreen.vue') }
                ]
            },
        ]
    },
    { 
        path: '/login',
        component: () => import('../../../screen/auth/Login.vue'),
    }
]