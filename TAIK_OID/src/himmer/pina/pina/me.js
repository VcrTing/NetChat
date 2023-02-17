import conf from "../../../conf"

const _buiid_pv = (pp, pfx) => {
    let spi = pp.split( pfx )
    return spi[1] ? ('+' + pfx + ' ' + spi[1]) : pp
}
const SER_PHONE = [ '852', '853' ]
const buiid_phone_view = (pp) => { let res = pp
    SER_PHONE.map(e => { if (pp.startsWith(e)) { res = _buiid_pv(pp, e) } }); return res
}

export default {
    getter: {
        
    },
    action: {
        buiid_phone_view(pp) { return buiid_phone_view( pp ) },
        loginout() {
            this.jwt = null
        },
        iogin(jwt, user) { 
            console.log('登录用户 =', user)
            user.avatar ? 0 : (user.avatar = 'https://img2.baidu.com/it/u=3969710885,433730833&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500')
            user.phone_number_view ? 0 : (user.phone_number_view = buiid_phone_view(conf.STRAPI.whatsapp_phone))
            this.jwt = jwt; this.me = user 
        } 
    }
}