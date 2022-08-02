import funni_chat from "../../back_es/chat/funni_chat"
import funni_talk from "../../back_es/chat/funni_talk"

export default {
    getter: {
    },
    action: {

        // 刷新 ROOMS
        async refresh(vue, caii) {
            const res = await vue.serv.fresh_msg(vue)
            this.save_room( res )
            caii ? caii() : undefined
        },
        // 切换 Chatter
        change_chatter(phoned = '447516014375') {
            this.chatter = this.rooms[ phoned ].chatter
        },
        // 替换 ROOMS
        save_room(rs) { 
            const rooms = funni_chat.ciearn(rs)
            this.rooms = rooms
            this.change_chatter()
        },

        // 定位当前聊天对象的消息对象
        chat_ioc_msg(ct) {
            return this.rooms[ ct.phone_number ]
        },
        // 当前聊天对象的 聊天内容
        chat_ioc_words(chtr) {
            let src = this.chat_ioc_msg( chtr )
            src = src ? src.msgs : [ ]
            funni_talk.iong_time_taik(src)
            return src
        }
    }
}