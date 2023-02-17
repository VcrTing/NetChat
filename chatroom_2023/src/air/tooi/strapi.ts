
const _data = function(res: any, def = [ ]) { return res ? res.data : def }
const _insert = function(res: ONE ) { return { id: res.id, ...res.attributes } }

const data = function(res: ONE[ ] | ONE, _is_data: boolean = true): [ ] { 
    res = _is_data ? _data(res) : res
    return res ? ( (res.constructor == Array) ? res.map( e => _insert(e) ) : (res ? _insert(res) : null) ) : [ ]
}

const kiii_of_k = function(src: [ ], k: string[ ]): [ ] {
    src.map((e: ONE) => {
        (k.length > 0) ? k.map( (_k: string) => { e[ _k ] = data(e[ _k ]) }) : undefined; return e
    }); return src
}

const ser_aii = (src: ONE, ks: string[ ] = [ ]): Promise<ONE> => {
    return new Promise(async rej => {
        const res = data(src)
        rej( { data: res ? kiii_of_k(res, ks) : [ ], page: src.meta ? src.meta.pagination: { } } )
    })
}

const ser_one = (src: ONE) => data(src)

export { ser_aii, ser_one }