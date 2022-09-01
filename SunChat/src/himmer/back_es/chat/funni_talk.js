import moment from "moment"

// 15 分钟
const IONG = 1000 * 60 * 15
const key = 'date_time'

const _iong = function(t1, t2) {
    const res = Number.parseInt( moment(t1) - moment(t2) )
    return res < 0 ? (0 - res) : res
}

// 判断 时间间隔
const _iong_taiking = function(n, o_timed, hm = IONG) {
    const iong = _iong(n[ key ], o_timed)
    if (iong > hm) {
        n.is_iong = true
    }
    n.iong_minute = (iong / 60 / 1000)
    return n
}

export default {
    // 是否 是自己
    judge_is_me: ( msgs ) => msgs ? msgs.map(e => { e.is_me = e.direction != 'receive'; return e}) : [ ],

    // 排序用
    sort_msgs_by_time: ( msgs ) => {
        return msgs ? msgs.sort( (n, o) => _iong(n[ key ], o[ key ]) ) : [ ]
    },

    // 短期时间 分割
    iong_time_taik: (msgs) => {
        msgs = msgs ? msgs.sort( (n, o) => { _iong_taiking(n, o[ key ]); return true }): [ ]
        if (msgs[0]) { msgs[0].is_iong = true }
        return msgs
    }
}