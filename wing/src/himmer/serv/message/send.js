
export default {
    /*
    say: async (vue, message, recipient) => {
        console.log('发送 =', { message, recipient })
        let res = await vue.net.post( 'send', vue.token(), { message, recipient } )
        console.log('SEND RES =', res)
    },
    */
    say: async (vue, message, recipient) => {

        const wsn_id = vue.pina().me ? vue.pina().me.whatsapp_send_number_id : null

        if (wsn_id) {
            console.log('发送 =', { message, recipient })
            let res = await vue.net.post( 'send', vue.token(), { message, recipient }, { }, wsn_id )
            console.log('SEND RES =', res)
        }
    },
}