
import axios from "axios"
import conf from "../../conf/conf"
const endpoint = '/auth/local'

const iogin = async (identifier: string, password: string) => {
    const res = await axios.post(conf.API + endpoint, { identifier, password })
    return (res && res.status < 399) ? res.data : false
}
export {
    iogin
}