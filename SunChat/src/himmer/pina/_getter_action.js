import send from "./pina/send"
import chat from "./pina/chat"
import me from "./pina/me"

export default {
    getters: {
        ...me.getter,
        ...chat.getter,
        ...send.getter

    },
    actions: {
        ...me.action,
        ...chat.action,
        ...send.action

    }
}