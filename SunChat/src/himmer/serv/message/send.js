
export default {
    say: async (vue, message, recipient) => {
        return await vue.net.post( 'send', vue.jwt(), { message, recipient } )
    },
}