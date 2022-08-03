import funni_message from "../../back_es/message/funni_message"
import moment from "moment"

export default {
    msg_one: async (vue, phone, _start = 0, _limit = 50) => {
        const condition = { phone_number: phone, _start, _limit }
        let res = await vue.net.get('message', vue.token(), condition)
        return res
    },

    fresh_msg: async (vue, timed) => {
        let res = await vue.net.get('message', vue.token(), 
            { dateTime: timed ? timed: moment(new Date()).format('yyyy-MM-DD') }
        )
        if (res && res.length > 0) {

        } else {
            res = await vue.net.get('message', vue.token(), 
                { _start: 0, _limit: 300 }
            )
        }
        return res
    }
}