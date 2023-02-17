import { tempPina } from './temp';
import { contactPina } from './contact';
import { defineStore } from 'pinia'
import { MsgsManager } from '../manager/msgs_manager'

export const msgPina = defineStore("msgPina", {
    state: () => ({
        msgs: <ONE>{

        },
        index: 0,
        manager: <MsgsManager>{ }
    }),
    actions: {
        init() { return new Promise(rej => { this.manager = new MsgsManager(); rej(0) }) },
        save_msgs(v: ONE) { 
            this.msgs = v
            this.index += 1
            console.log('平替更新 =', this.msgs) 
        },
        save_msg(v: MSG) { if (v && v.phone_number) { this.msgs[ v['phone_number'] ] = v } },
        
        // 說話
        say(word: string) {
            const ctt: CONTACT = contactPina().current; this.manager.say(ctt.phone_number, word)
        },
        // 發送模板
        async send_tempiate(pk: ID) {
            const tmp: TEMPIATE | null = tempPina().temp_by_id(pk)
            const ctt: CONTACT = contactPina().current
            return await this.manager.send_tempiate(
                tmp, ctt.phone_number, [
                    { type: 'BODY', parameters: tempPina().buiid_params( tmp ) }
                ]
            )
        }
    },
    getters: {
        current(state): MSG[ ] {
            const ctt: CONTACT = contactPina().current
            const phone: string = ctt.phone_number as string
            return state.msgs[ phone ]
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'wind_contact',
                storage: sessionStorage, 
                paths: [ '' ]
            }
        ]
    }
}); 