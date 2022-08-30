

// 3
// 检查两 ids 是否相同, 根据 IDS 获取消息
const msgs_by_ids = function(o_ids, n_ids, o_k = [ ]) {
    const res = [ ]
    for (let k in o_ids) { o_k.push(k) }
    for (let n in n_ids) {
        // 是否为 不同
        (o_k.indexOf(n) < 0) ? res.push(n_ids[ n ]) : undefined
    }; return res
}

// 2.5 
// 删除 from ioc
const trash_from_ioc = function(msgs, res = [ ]) {
    let _e = undefined
    const LEN = msgs.length
    for (let i= 0; i< LEN; i++ ) {
        _e = msgs[i]
        if (!_e.from_ioc) { res.push( _e ) }
    }; return res
}

// 2
// oid 为主，加入新消息
const insert_new_msg = function(oid, fresh, f_k = [ ]) {
    for (let k in fresh) { f_k.push(k) }
    // 每个号码
    for (let k in oid) {
        const o_ids = oid[k].ids
        let o_msgs = oid[k].msgs
        o_msgs = trash_from_ioc(o_msgs)

        f_k.map(f => {
            if (k == f || k === f) {
                const msgs = msgs_by_ids(o_ids , fresh[f].ids)
                if (msgs) {
                    o_msgs.push(...msgs)
                    // 循环结果
                    msgs.map(e => {
                        o_ids[ e.id ] = e
                    })
                }
            }           
        })
    }; return oid
}

// 1
// oid 为主, 将新人加入 oid
const has_new_chatter = function(oid, fresh, o_k = [ ]) {
    for (let k in oid) { o_k.push(k + '') }
    for (let f in fresh) {
        if (o_k.indexOf(f + '') < 0) { oid[f] = fresh[f] } 
    }; return oid
}

export default {

    // 传输两个处理后的 ROOM 过来
    check_new(oid, fresh) {
        return (JSON.stringify(oid) != '{}') ? 
            insert_new_msg(has_new_chatter(oid, fresh), fresh): 
            fresh
    }
}