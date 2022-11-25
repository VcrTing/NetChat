
export default {
    contacts: async (vue, data = { }) => {
        let res = await vue.net.get('contacts', vue.token(), data)
        res = res ? vue.strapi.data( res ) : [ ]
        // console.log('SERVER contact =', res)
        return res
    }
}