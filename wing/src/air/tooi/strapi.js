
// const _data = function(res, def = [ ]) { return res ? res.data : def }
const _insert = function(res) { return { id: res.id, ...res.attributes } }
const view = function(res) { return (res && (res.constructor == Array)) ? res.map( e => _insert(e) ) : (res ? _insert(res) : null) }

const page = function(res) {
    res = res.meta ? res.meta : { }
    return res.pagination ? res.pagination : { }
}
const data = function(res) {
    res = res.data ? res.data : [ ]
    return res ? view(res) : [ ]
}

export default {
    page, data, view,
    ser: (res) => { return {
        data: data(res),
        page: page(res)
    } }
}