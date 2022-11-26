const TEST = true

const BASE = 'https://strapi10.svr.up5d.com'

const SPEED = TEST ? 8000 * 1000 : 8 * 1000

import ENDPOINT from './air/endpoint'
import PLUGINS_CONF from './air/plugins_conf'

export default {
    STRAPI: {
        named: 'support@manfulls.com',
        pass: '1Qazxc2Wsxcv?!'
    },
    TEST,
    
    BASE,
    API: BASE + '/api',
    SPEED,
    ENDPOINT,
    ...PLUGINS_CONF
}