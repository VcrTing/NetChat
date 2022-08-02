
export default {
    iogin: async (vue, named, pass) => {
        let res = await vue.net.iogin(named, pass)
        if (res) {
            res = res.data
            vue.pina().iogin(res.jwt, res.user)
        }
    }
}