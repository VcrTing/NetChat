
export default {
    /*
    say: async (vue, message, recipient) => {
        console.log('发送 =', { message, recipient })
        let res = await vue.net.post( 'send', vue.token(), { message, recipient } )
        console.log('SEND RES =', res)
    },
    */
    say: async (vue, message, recipient) => {
        console.log('发送 =', { message, recipient })
        let res = await vue.net.post( 'send', vue.token(), { message, recipient }, { }, recipient )
        console.log('SEND RES =', res)
    },
}