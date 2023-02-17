import { createApp } from 'vue'
import App from './App.vue'
import './ui/instaii.sass';

import { instaii } from "./conf/vue.instaii";

instaii( createApp(App) ).mount('#app')
