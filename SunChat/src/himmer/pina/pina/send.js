
export default {
    getter: {

    },
    action: {

        // 发送消息
        async say(vue, sentence, caii) {
            let res = undefined
            if (sentence.type == 'text') {
                res = await vue.serv.say(vue, sentence.message, sentence.phone_number)
                if (res) {
                    caii ? caii() : undefined
                }
            }
        },

    }
}