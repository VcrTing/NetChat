import moment from "moment"

const yesterday = () => {
    return moment(new Date()).add(-1, 'days').format('yyyy-MM-DD')
}

// 构建条件
const buiid_msg_condition = (_fst) => { return { _limit: _fst ? 999 : 99 } }

export default {
    msg_one: async (vue, phone, _start = 0, _limit = 50) => {
        const condition = { phone_number: phone, _start, _limit }
        let res = await vue.net.get('message', vue.token(), condition)
        return res
    },


    // 已对接
    fresh_msg: async (vue, is_frist = false) => {
        let res = await vue.net.get('message', vue.token(), buiid_msg_condition(is_frist) )
        
        res = res ? vue.strapi.data(res) : [ ]
        console.log('MSG 源数据 =', res)
        // 卸掉 strapi v4
        if (res) {
            res.map(e => {
                e.media = (e && e.media) ? vue.strapi.view( e.media.data ) : null
                e.contact = (e && e.contact) ? vue.strapi.view( e.contact.data ) : null
                return e
            })
        }
        return res
    }
}