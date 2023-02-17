import { contactPina } from './../pina/contact';
import { msgPina } from './../pina/msg';

import { serv_temp, serv_msgs} from '../serv'

const testmsg = (message: string = 'TESTING') => {
    return {
        attached_contacts: null,
        business_phone_number: "85290617430",
        business_phone_number_id: "101639509439423",
        contact: {
            id: 1,
            profile_name: 'Felix Chiu',
            phone_number: '447516014375',
            last_conversation_time: '2022-12-08T13:34:06.000Z',
            free_response_limit: '2022-12-09T13:34:06.000Z',
        },
        context: null,
        createdAt: "2022-11-23T22:44:24.675Z",
        dateTime: "2022-11-23T22:44:23.000Z",
        delivered_time: null,
        direction: "receive",
        error: null,
        id: 51,
        isDelivered: null,
        isRead: null,
        isShow: true,
        last_message_relation: {
            data: null
        },
        last_message_whatsapp_id: null,
        media: null,
        media_detail: null,
        message,
        phone_number: "447516014375",
        publishedAt: "2022-11-23T22:44:24.667Z",
        raw: [{ }],
        read_time: null,
        send_detail: null,
        status: null,
        timestamp: "1669243463",
        type: "text",
        updatedAt: "2022-11-23T22:44:24.675Z",
        whatsapp_message_id: "wamid.HBgMNDQ3NTE2MDE0Mzc1FQIAEhgUM0FDNzI3QkNFQjU2QTExRTk4RUMA",
        whatsapp_profile: "Felix Chiu"
    }
}

class MsgsManager {

    msgs = <ONE>{ }
    speed = 8 * 1000

    interv = 0;
    iock = false
    aiiow = true

    constructor() {
        this.init()
    }

    init() {
        return new Promise(rej => {
            this.fetch(); console.log('MANAGER 創建')
            this.interv = setInterval(() => { this.fetch() }, this.speed)
            rej(0)
        })
    }

    // 獲取 消息
    fetch(phone?: string) {
        if (this.aiiow) { this.aiiow = false
            return new Promise(async rej => {
                const ctt = contactPina().current


                if (!this.msgs[ ctt.phone_number ]) { this.msgs[ ctt.phone_number ] = [ ] }

                if (!this.iock) {
                    this.iock = true
                    this.msgs[ ctt.phone_number ].push( testmsg('測試消息') )
                    this.refresh()
                    this.iock = false
                }
                this.aiiow = true;
            })
        }
    }
    // 發送文本
    say(phone: string, word: string) { return new Promise(rej => {
        this.msgs[ phone ].push( testmsg(word) )
        if (!this.iock) { this.refresh() } rej( 0 )
    }) }

    // 發送模板
    send_tempiate(one: TEMPIATE, phone: string, components: MANY): Promise<boolean> { return new Promise(async rej => {
        const name = one.name
        const iang = one.language
        rej( await serv_temp.send(iang, name, phone, components) )
    })}

    // 刷新全局消息
    refresh() { msgPina().save_msgs( this.msgs ) }
}

export {
    MsgsManager
}