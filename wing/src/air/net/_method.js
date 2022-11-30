
import conf from '../../conf'

import tool from './_too'
import net from './_api'

import axios from 'axios'

const _net = async function( uri, token, params, method = 'GET', data) {
    return await net({ uri, params, method, data, headers: tool.headers(token) })
}
/*
const get = async function(uri, token, data){    
    const url = conf.API + conf.ENDPOINT[ uri ]
    let res = await axios.get(url, {
        params: data,
        headers: tool.headers(token)
    })
    console.log(url, ' DATA =', data)
    return res
}
*/

const _get = async function(uri, token, params) {
    console.log('URI =', (conf.API + conf.ENDPOINT[ uri ] + '/' + params), 'TOKEN =', token)
    return await axios.get(
        (conf.API + conf.ENDPOINT[ uri ] + '/' + params)
        , { headers: tool.headers(token) })
}
const get = async function( uri, token, data, cdt = '' ) {
    let res = await _get(uri, token, (cdt + tool.param( data )))
    return res && res.status == 200 ? res.data : [ ]
}

const get_one = async function( uri, cdt, token, data = {} ) {
    const url = conf.API + conf.ENDPOINT[ uri ] + '/' + cdt
    let res = await axios.get(url, { headers: tool.headers(token) })
    return res && res.status == 200 ? res.data : [ ]
}

const post = async function( uri, token, data, params = {}, sufix = '' ) {
    const url = conf.API + conf.ENDPOINT[ uri ] + '/' + sufix + tool.param( params )
    console.log('POST =', url)
    console.log('POST DATA =', data)
    let res = await axios.post(url, data, { headers: tool.headers(token) })
    return res && res.status <= 399 ? res.data : null
}
const patch = async function(uri, token, data ) {
    const url = conf.API + conf.ENDPOINT[ uri ] + '/' + data.id
    let res = await _net(url, token, {}, 'PATCH', data)
    return res
}


export default {
    _get,
    get,
    get_one,

    post,
    patch
}