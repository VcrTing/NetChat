
export default {
    tempiates: async (vue, data = { }) => {
        data['isBlocked'] = false
        const res = await vue.net.get('tempiates', vue.token(), data)
        return res ? res : [ ]
    },

    send_Tempiate: async (vue, lang, data = { }) => {
        if (!data.components) { delete data.components }
        console.log('开始发送 =', data)
        try {

            const res = await vue.net.post('send_tempiate', vue.token(), data, { lang })
        } catch(err) {
            console.log('错误 =', err)
        }
        console.log('发送结果 =', res)
    }
}