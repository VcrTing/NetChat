import { userPina } from './../pina/user';

import net from "../../air/net";
import { ser_aii, ser_one } from '../../air/tooi/strapi';

const endpoint = 'tempiates'
const jwt = () => userPina().jwt

export default {
    get: async (params: ONE = { }): Promise<ONE> => {
        const res = await net.get(endpoint, jwt(), params)
        return res ? (await ser_aii( res )) : { };
    },

    send: async (lang: string, name: string, recipient: string, components: MANY) => {
        console.log('發送模板', {
            lang, name, recipient, components
        })
        const res = await net.pos('send_tempiate', jwt(), { name, recipient, components }, '', { lang })
        if (res) {
            return true
        } return false
    },
    pos: async (data: ONE): Promise<ONE> => {
        const res = await net.pos(endpoint, jwt(), { data })
        return { }
    },

    one: async (pk: string): Promise<ONE> => {
        const res: ONE | null = await net.get(endpoint, jwt(), {}, pk)
        return (res ? ser_one( res ) : { }) as ONE
    }
}