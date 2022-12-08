import _vid from "./vid/_vid"
import _input from "./vid/_input"

const SER_PHONE = [ '852', '853' ]
const _buiid_pv = (pp, pfx) => {
    let spi = pp.split( pfx ); return spi[1] ? ('+' + pfx + ' ' + spi[1]) : pp }
const buiid_phone_view = (pp) => { let res = pp
    SER_PHONE.map(e => { if (pp.startsWith(e)) { res = _buiid_pv(pp, e) } }); return res }

export default {
    vid: _vid,
    input: _input,
    buiid_phone_view
}