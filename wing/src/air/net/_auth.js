
import tool from './_too'
import conf from '../../conf'

import axios from 'axios'

const login = async function(identifier, password) {
    let res = { status: 400, data: null }
    try {
        res = await axios.post( conf.API + '/auth/local', { identifier, password } )
        res = res && res.status > 199 ? res : null
    } catch(err) { res.status = 400 }; return res
}

const _admin = async function() {
    let res = await login( conf.STRAPI.named, conf.STRAPI.pass )
    return res.data ? res.data : ''
}

export default {

    _admin,
    login,
}