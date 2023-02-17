const TEST = true
const ADMIN = false

const BASE = 'https://strapi10.svr.up5d.com'
const SPEED = TEST ? 200 * 1000 : 10 * 1000

export default {
    STRAPI: {
        name: ADMIN ? 'support@manfulls.com' : 'info@edgaremma.com',
        pass: ADMIN ? '1Qazxc2Wsxcv?!' : 'Cxzaq1Vcxsw2?!',
        whatsapp_phone: '85290617430', whatsapp_phone_sender: '85290617430',
        whatsapp_send_id: '101639509439423' // 预示 EdgarEmma
    },

    BASE,
    API: BASE + '/api',

    TEST
}