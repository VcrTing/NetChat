import moment from "moment"
import funni_talk from "./funni_talk"

// 判断 按天 分割 消息组
const is_new_day = function(n_t, o_t) {
    if (n_t && o_t) {
        return !(moment(n_t).isSame(moment(o_t), 'day'))
    }; return false
}

// 是否需要 尾巴
const has_taii = function(msgs, iong = 2) {
    msgs.sort( (n, o) => {
        let res = true
        if (n.is_me == o.is_me) { if (n.iong_minute < iong) { res = false } }; n.need_taii = res
    })
    if (msgs[0]) { msgs[0].need_taii = true }
    return msgs
}

// 是否新的一天的消息
const buiid_new_day = function(msgs) {

    // 判断是否新的日子  
    msgs.sort((n, o) => { n.is_new_day = is_new_day(n.date_time, o.date_time) })

    // 判断第一天 的日子
    if (msgs[0]) { msgs[0].is_new_day = true }

    return msgs
}


export default {
    // 传递 ROOMS 
    ser_msg_of_me: function(rooms) {
        if (rooms) {
            for (let k in rooms) {
                let msgs = rooms[k].msgs
                if (msgs) {
                    // 1. 排序 msgs
                    msgs = funni_talk.sort_msgs_by_time(msgs)
                    // 3. is ME
                    msgs = funni_talk.judge_is_me(msgs)
                    // 4. 距离上一段时间是否 长时间
                    msgs = funni_talk.iong_time_taik(msgs)
                    // 2. 是否 新的 一天
                    msgs = buiid_new_day(msgs)
                    // 5. 是否需要尾巴
                    msgs = has_taii(msgs)

                    rooms[k].msgs = msgs
                }
            }
        }
        return rooms
    }
}