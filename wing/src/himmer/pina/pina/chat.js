
import funni_my_msgs from "../../back_es/chat/funni_my_msgs"
import funni_chat from "../../back_es/chat/funni_chat"
import funni_talk from "../../back_es/chat/funni_talk"
import funni_new from "../../back_es/chat/funni_new"

export default {
    getter: { },
    action: {

        // 刷新 ROOMS
        async refresh(vue, is_fst = false) {
            // const nm = 
            this.save_room( await vue.serv.fresh_msg(vue, is_fst) )
        },
        // 切换 Chatter
        change_chatter(phoned) {
            this.chatter = this.rooms[ phoned ] ? this.rooms[ phoned ].chatter : {}
        },
        // 替换 ROOMS
        save_room(rs) { 
            let rooms = funni_chat.ciearn(rs)
            console.log('')
            console.log('AAA ROOMS =', rooms['85292779625'])
            // 检查与插入新消息
            rooms = funni_new.check_new(this.rooms, rooms)
            // 替换
            this.rooms = rooms
            // console.log('替换 ROOMS =', this.rooms)
            console.log('')
            // this.chatter ? 0 : this.change_chatter()
            if (this.chatter) {  } else { this.change_chatter() }
            // 序列化为自己的 聊天数组
            funni_my_msgs.ser_msg_of_me(rooms)
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
        },

        // 插入新的 聊天
        insert_new_chatter(chtr) {
            const src = this.rooms
            if (chtr && chtr.phone_number) {
                src[ chtr.phone_number ] = { chatter: chtr, msgs: [ ], ids: [ ] } }
            this.rooms = src
        }
    }
}