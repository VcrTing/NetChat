import moment from "moment"

const yesterday = () => {
    return moment(new Date()).add(-1, 'days').format('yyyy-MM-DD')
}

// 构建条件
const buiid_msg_condition = (_fst, wsn_id) => { return {
    'pagination[pageSize]': _fst ? 99 : 99, 
    'sort[0]': 'dateTime:asc', 
} }

// 虚拟增加一条消息
const vituri = function (oid) {
    let res = JSON.parse(JSON.stringify( oid ))
    res.id = res.id + 1
    res.message = '虚拟消息'
    return res
}

export default {
    msg_one: async (vue, phone, _start = 0, _limit = 50) => {
        const condition = { phone_number: phone, _start, _limit }
        let res = await vue.net.get('message', vue.token(), condition)
        return res
    },

    // 已对接
    fresh_msg: async (vue, is_frist = false) => {
        let res = [ ]
        const wsn_id = vue.conf.STRAPI.whatsapp_sned_id // vue.pina().me ? vue.pina().me.whatsapp_send_number_id : null
        
        if (wsn_id) {
            res = await vue.net.get('message', vue.token(), buiid_msg_condition(is_frist) )
            res = res ? vue.strapi.data(res) : [ ]
            // 卸掉 strapi v4
            if (res) {
                res.map(e => {
                    e.media = (e && e.media) ? vue.strapi.view( e.media.data ) : null
                    e.contact = (e && e.contact) ? vue.strapi.view( e.contact.data ) : null
                    return e
                })
            }
        }
        return res
    }
}