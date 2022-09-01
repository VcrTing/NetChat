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

    fresh_msg: async (vue, is_frist = false) => {
        let res = await vue.net.get('message', vue.token(), buiid_msg_condition(is_frist) )
        console.log('拉取一次消息 =', res)
        return res
    }
}