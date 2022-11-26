

const _build_media = function( src ) {
    /*
    return src ? src.map( e => {
        const md = {
            mime: e.mime, origin: e.url, name: e.name,
            width: e.width, height: e.height
        }; const fmt = e.formats
        if (fmt) { md[ 'smaii' ] = fmt.small ? fmt.small.url : fmt.thumbnail.url }
        return md
    }) : [ ]
    */
    let e = src
    if (e) {
        const md = {
            mime: e.mime, origin: e.url, name: e.name,
            width: e.width, height: e.height
        }; const fmt = e.formats
        if (fmt) { md[ 'smaii' ] = fmt.small ? fmt.small.url : fmt.thumbnail.url }
        return [ md ]
    }
    return [ ]
}

const _buiid_room = function( src ) {
    const res = { }
    res['id'] = src.id
    res['type'] = src.type
    res['media'] = _build_media ( src.media )
    res['is_read'] = src.isRead
    res['message'] = src.message
    res['contact'] = src.contact
    res['date_time'] = src.dateTime
    res['direction'] = src.direction
    res['read_time'] = src.read_time
    res['send_detail'] = src.send_detail
    res[ 'from' ] = src.business_phone_number
    res['delivered_time'] = src.delivered_time
    res['last_message_relation'] = src.last_message_relation
    return res
}

export default {
    ciearn: (msgs) => {
        const _L = msgs.length
        const res = { }

        for (let i= 0; i< _L; i++ ) {
            const _p = msgs[i].phone_number
            if (!res[ _p ]) { res[ _p ] = { msgs: [ ], chatter: null, ids: { } }}
        }

        for (let i= 0; i< _L; i++ ) {
            const mm = msgs[i]
            const _p = mm.phone_number
            if (!res[ _p ][ 'chatter' ]) { res[ _p ][ 'chatter' ] = mm.contact }
            res[ _p ][ 'msgs' ].push( _buiid_room( mm ) )
            res[ _p ][ 'ids' ][ mm.id ] = mm
        }

        return res
    }
}