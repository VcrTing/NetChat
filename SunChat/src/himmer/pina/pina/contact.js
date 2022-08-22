
export default {
    getter: {

    },
    action: {
        save_contacts(cs) { },
        ioc_chatter_by_phoned(phone) {
            let res = this.rooms
            res = res[ phone ]
            return res ? res.chatter : undefined
        }
    }
}