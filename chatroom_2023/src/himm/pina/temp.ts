import { defineStore } from 'pinia'

export const tempPina = defineStore("tempPina", {
    state: () => ({
        tempiates: <TEMPIATE[]>[ ]
    }),
    actions: {
        temp_by_id(pk: ID): TEMPIATE {
            let res = <TEMPIATE>{ };
            this.tempiates.map((e: TEMPIATE) => {
                if (e.id === pk) { res = e }
            }); 
            return res
        },
        buiid_params(v: TEMPIATE) {
            return (v.body_variable_count == 2) ? [
                { 
                    type: 'text',
                    text: '测试参数一'
                },
                { 
                    type: 'text',
                    text: '测试参数二'
                }
            ] : [
                { 
                    type: 'text',
                    text: '测试参数一'
                },
            ]
        },
        save_tempiates(v: TEMPIATE[]) { this.tempiates = v ? v : [ ] },
    },
    getters: {
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'wind_tempiate',
                storage: sessionStorage, 
                paths: [ 'tempiates' ]
            }
        ]
    }
}); 