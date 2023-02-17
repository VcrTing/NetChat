import ui from '../ui/ui'
import eos from '../eos/eos'
import components from '../components/components'

import conf from '../conf/conf'

import router from '../himm/router'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persist'

export function instaii(app: any) {
    const store = createPinia(); store.use( persist )
    app.config.globalProperties.conf = conf
    return app.use( router ).use( ui ).use( eos ).use( components ).use( store )
}