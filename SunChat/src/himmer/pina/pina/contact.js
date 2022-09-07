
export default {
    getter: {

    },
    action: {
        save_contacts(cs) { },
        ioc_chatter_by_phoned(phone) {
            let res = this.rooms
            res = res[ phone ]
            return res ? res.chatter : undefined
        },

        // 删除该联络人的对话
        trash_this_taik(phone) {
            let src = this.rooms
            if (src[ phone ]) {
                delete src[ phone ]
                this.rooms = src
            }
        },

        // 顶置该联络人的对话
        overhead_this_taik(phone) {
            let src = this.rooms[ phone ]
            src = src ? src.chatter : undefined
            if (src) {
                src.is_top = !src.is_top
                this.rooms[ phone ].chatter = src
                console.log('对话顶置后 =', this.rooms[ phone ].chatter)
            }
        }
    }
}