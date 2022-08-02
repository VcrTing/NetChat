import iogin from "./auth/iogin"

import send from "./message/send"
import message from "./message/message"

export default {
    ...iogin,

    ...send,
    ...message
}