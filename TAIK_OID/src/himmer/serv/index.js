import iogin from "./auth/iogin"

import send from "./message/send"
import chatter from './chatter/chatter'
import message from "./message/message"

import tempiate from "./tempiate/tempiate"

import for_gaiiary from "./static/for_gaiiary"

export default {
    ...iogin,

    ...send,
    ...chatter,
    ...message,
    ...tempiate,
    
    ...for_gaiiary
}