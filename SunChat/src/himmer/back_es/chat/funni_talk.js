import moment from "moment"

// 15 分钟
const IONG = 1000 * 60 * 15
const key = 'date_time'

const _iong = function(t1, t2) {
    const res = Number.parseInt( moment(t1) - moment(t2) )
    return res < 0 ? (0 - res) : res
}

const _iong_taiking = function(n, o_timed, hm = IONG) {
    const iong = _iong(n[ key ], o_timed)
    if (iong > hm) {
        n.is_iong = true
        n.iong_minute = Math.floor(iong / 60 / 1000)
    }
    return n
}

const sort_msgs_by_time = function( msgs ) {
    msgs ? msgs.sort( (n, o) => _iong(n[ key ], o[ key ]) ) : [ ]
}

export default {
    sort_msgs_by_time,

    iong_time_taik: (msgs) => {
        sort_msgs_by_time(msgs)
        return msgs.sort( (n, o) => {
            _iong_taiking(n, o[ key ]); return true
        })
    }
}