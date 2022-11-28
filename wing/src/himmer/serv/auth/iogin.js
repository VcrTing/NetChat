
export default {
    iogin: async (vue, named, pass) => {
        let res = await vue.net.iogin(named, pass)
        if (res) {
            res = res.data
            if (res && res.user) {
                vue.pina().iogin(res.jwt, res.user)
                return [ 200, res ]
            } }
        return [ 400, res ]
    }
}