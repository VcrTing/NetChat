
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import './front/base.sass'

import net from './air/net'
import vid from './air/vid'
import conf from './conf'
import pina from './himmer/pina'
import serv from './himmer/serv'
import back from './himmer/back_es/back'
import router from './himmer/router'
import tooi_time from './air/tooi/timed'


const app = createApp(App)

app.config.globalProperties.net = net
app.config.globalProperties.vid = vid
app.config.globalProperties.conf = conf
app.config.globalProperties.serv = serv
app.config.globalProperties.back = back
app.config.globalProperties.pina = pina
app.config.globalProperties.tooi_time = tooi_time

app.config.globalProperties.go = function (ink) { this.$router.push(ink) }
app.config.globalProperties.token = function () { return this.pina().jwt }

// import OneSignaVue from 'onesignal-vue'
import OneSignalVuePlugin from '@onesignal/onesignal-vue3'
import persist from 'pinia-plugin-persist'
const store = createPinia()
store.use( persist )

app.use( router ).use( store ).use( OneSignalVuePlugin, conf.one_sign ).mount('#app')
