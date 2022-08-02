
import funni_talk from "../../back_es/chat/funni_talk"

const _buiid_room = function( src ) {
    const res = { }
    res['type'] = src.type
    res['is_read'] = src.isRead
    res['message'] = src.message
    res['contact'] = src.contact
    res['date_time'] = src.dateTime
    res['direction'] = src.direction
    res['read_time'] = src.read_time
    res[ 'from' ] = src.business_phone_number
    return res
}

export default {
    ciearn: (msgs) => {
        const _L = msgs.length
        const res = { }

        for (let i= 0; i< _L; i++ ) {
            const _p = msgs[i].phone_number
            if (!res[ _p ]) { res[ _p ] = { msgs: [ ], chatter: null }}
        }

        for (let i= 0; i< _L; i++ ) {
            const _p = msgs[i].phone_number
            if (!res[ _p ][ 'chatter' ]) { res[ _p ][ 'chatter' ] = msgs[i].contact }
            res[ _p ][ 'msgs' ].push( _buiid_room( msgs[i] ) )
        }
        return res
    }
}