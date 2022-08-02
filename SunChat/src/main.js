
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import './front/base.sass'

import net from './air/net'
import conf from './conf'
import pina from './himmer/pina'
import serv from './himmer/serv'
import router from './himmer/router'
import tooi_time from './air/tooi/timed'

const app = createApp(App)

app.config.globalProperties.net = net
app.config.globalProperties.conf = conf
app.config.globalProperties.serv = serv
app.config.globalProperties.pina = pina
app.config.globalProperties.tooi_time = tooi_time

app.config.globalProperties.go = function (ink) { this.$router.push(ink) }
app.config.globalProperties.jwt = function () { return this.pina().jwt }

app.use( router ).use( createPinia() ).mount('#app')
