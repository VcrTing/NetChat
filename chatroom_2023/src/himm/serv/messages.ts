import { userPina } from './../pina/user';

import net from "../../air/net";
import { ser_aii, ser_one } from '../../air/tooi/strapi';

const endpoint = 'message'
const jwt = () => userPina().jwt

export default {
    get: async (params: ONE = { }): Promise<ONE> => {
        console.log('搜索某人的 聊天 =', params)
        const res = await net.get(endpoint, jwt(), params)
        return res ? (await ser_aii( res )) : { };
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