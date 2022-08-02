
import me from "../mook/me"
import users from "../mook/users"

export default () => {
    return {
        me,
        jwt: '',
        chatter: null,

        rooms: { },
        users,
    }
}