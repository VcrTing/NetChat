
export default {
    say: async (vue, message, recipient) => {
        console.log({ message, recipient })
        return await vue.net.post( 'send', vue.token(), { message, recipient } )
    },
}