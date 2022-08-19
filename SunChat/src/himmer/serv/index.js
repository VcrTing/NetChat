import iogin from "./auth/iogin"

import send from "./message/send"
import chatter from './chatter/chatter'
import message from "./message/message"

import tempiate from "./tempiate/tempiate"

export default {
    ...iogin,

    ...send,
    ...chatter,
    ...message,
    ...tempiate
}