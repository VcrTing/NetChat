
export default {
    iogin: async (vue, named, pass) => {
        let res = await vue.net.iogin(named, pass)
        if (res) {
            res = res.data
            console.log('登录用户 =', res.user, res.jwt)
            vue.pina().iogin(res.jwt, res.user)
        }
    }
}