
import me from "../mook/me"
import users from "../mook/users"

export default () => {
    return {
        me,
        jwt: '',
        chatter: null,

        rooms: { },
        users,

        tempiates: [ ],

        // 0 = 非打开，1 = 图片 Gaiiary
        MODAL: 0,
        GALLARY: [  ]
    }
}