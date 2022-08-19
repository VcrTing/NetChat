
import tempiate from "./pina/tempiate"
import send from "./pina/send"
import chat from "./pina/chat"
import app from "./pina/app"
import me from "./pina/me"

export default {
    getters: {
        ...me.getter,
        ...app.getter,
        ...chat.getter,
        ...send.getter,
        ...tempiate.getter
    },
    actions: {
        ...me.action,
        ...app.action,
        ...chat.action,
        ...send.action,
        ...tempiate.action
    }
}