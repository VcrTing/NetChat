const TEST = false

const SPEED = TEST ? 80 * 1000 : 8 * 1000

import ENDPOINT from './air/endpoint'

export default {
    STRAPI: {
        named: 'support@manfulls.com',
        pass: '1Qazxc2Wsxcv'
    },
    TEST,
    API: 'https://strapi08.svr.up5d.com',
    SPEED,
    ENDPOINT
}