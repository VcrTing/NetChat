const TEST = true

const SPEED = TEST ? 8000 * 1000 : 8 * 1000

import ENDPOINT from './air/endpoint'
import PLUGINS_CONF from './air/plugins_conf'

export default {
    STRAPI: {
        named: 'support@manfulls.com',
        pass: '1Qazxc2Wsxcv'
    },
    TEST,
    API: 'https://strapi08.svr.up5d.com',
    SPEED,
    ENDPOINT,
    ...PLUGINS_CONF
}