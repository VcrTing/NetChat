const TEST = true

const BASE = 'https://strapi10.svr.up5d.com'

const SPEED = TEST ? 200 * 1000 : 10 * 1000

import ENDPOINT from './air/endpoint'
import PLUGINS_CONF from './air/plugins_conf'

export default {
    STRAPI: {
        named: 'info@edgaremma.com', // support@manfulls.com
        pass: 'Cxzaq1Vcxsw2?!', // 1Qazxc2Wsxcv?!
        whatsapp_phone: '85290617430',
        // 预示
        whatsapp_sned_id: '101639509439423'
    },
    TEST,
    
    BASE,
    API: BASE + '/api',
    SPEED,
    ENDPOINT,
    ...PLUGINS_CONF
}