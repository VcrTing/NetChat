
export default {
    contacts: async (vue, data = { }) => {
        const res = await vue.net.get('contacts', vue.token(), data)
        // console.log('RES =', res)
        return res
    }
}