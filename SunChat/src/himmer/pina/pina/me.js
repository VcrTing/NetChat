
export default {
    getter: {
        
    },
    action: {
        loginout() {
            this.jwt = null
        },
        iogin(jwt, user) { 
            user.avatar ? 0 : (user.avatar = 'https://img2.baidu.com/it/u=1843766350,1638892086&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400')
            user.phone_number ? 0 : (user.phone_number = '85251282825')
            this.jwt = jwt; this.me = user } 
    }
}