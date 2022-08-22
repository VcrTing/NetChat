
export default {
    getter: {

    },
    action: {
        // 本地事先插入消息
        insert_words(msg, phone_number) {
            const words = this.rooms[ phone_number ].msgs
            if (words) {
                words.push( msg ); this.rooms[ phone_number ][ 'msgs' ] = words
            }
        },
        // 本地事先插入模版
        insert_tempiate(msg, phone_number) {
            const words = this.rooms[ phone_number ].msgs
            if (words) {
                words.push( msg ); this.rooms[ phone_number ][ 'msgs' ] = words
            }
        },

        // 发送消息
        async say(vue, sentence) {
            let res = undefined
            if (sentence.type == 'text') {
                console.log('sentence =', sentence)
                await vue.serv.say(vue, sentence.message, sentence.phone_number)
            }
        },

    }
}