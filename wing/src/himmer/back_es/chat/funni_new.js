

// 3
// 检查两 ids 是否相同, 根据 IDS 获取消息
const msgs_by_ids = function(o_ids, n_ids, o_k = [ ]) {
    const res = [ ]
    // console.log('n_ids =', n_ids)

    // 把 o_ids 的 key 塞入 o_k 中
    for (let k in o_ids) { o_k.push(k) }
    // console.log('n_ids =', n_ids, o_k)
    for (let n in n_ids) {
        // 新消息 ID 不存在 老消息s 内
        if (o_k.indexOf(n) < 0) {
            res.push(n_ids[ n ])
        }
    }; return res
}

// 2.5 
// 删除 from ioc
const trash_from_ioc = function(msgs, res = [ ]) {
    let _e = undefined
    const LEN = msgs.length
    // 循环某号码的所以消息
    for (let i= 0; i< LEN; i++ ) {
        _e = msgs[i]
        if (!_e.from_ioc) { res.push( _e ) }
    }; return res
}

// 2
// oid 为主，加入新消息
const insert_new_msg = function(oid, fresh, f_k = [ ]) {
    // console.log('筛选出的老数据 =', oid['85292779625'], ' 新数据 =', fresh['85292779625'])
    for (let k in fresh) { f_k.push(k) }
    // 每个号码
    
    // k = 号码
    for (let k in oid) {
        // 每一个号码的东西
        let o_ids = oid[k].ids
        let o_msgs = oid[k].msgs
        // 干掉所有 已经存在的消息
        o_msgs = trash_from_ioc(o_msgs)

        // f = f_K 内的号码
        f_k.map(f => {
            // 号码k == 号码f
            if (k == f || k === f) {
                const msgs = msgs_by_ids(o_ids , fresh[f].ids)
                console.log('新消息 =', msgs)
                if (msgs) {
                    // 新消息加入 msgs
                    o_msgs.push(...msgs)
                    // 新消息加入 ids
                    msgs.map(e => {
                        o_ids[ e.id ] = e
                    })
                    oid[k].msgs = o_msgs
                    oid[k].ids = o_ids
                }
            }           
        })
    }; 
    // console.log('最终操作结果 =', oid)
    return oid
}

// 1
// oid 为主, 将新人加入 oid
const has_new_chatter = function(oid, fresh, o_k = [ ]) {
    for (let k in oid) { o_k.push(k + '') }
    for (let f in fresh) {
        if (o_k.indexOf(f + '') < 0) { oid[f] = fresh[f] } 
    }; 
    return oid
}

export default {

    // 传输两个处理后的 ROOM 过来
    check_new(oid, fresh) {
        return (JSON.stringify(oid) != '{}') ? 
            insert_new_msg(has_new_chatter(oid, fresh), fresh): 
            fresh
    }
}