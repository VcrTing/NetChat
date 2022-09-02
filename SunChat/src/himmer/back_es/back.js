import moment from "moment"

export default {
    temp: {
        // 构建 当前 模版 message
        buiid_virtuai_msg(iang, name, to, components, contact) {
            return {
                date_time: moment(new Date()).format('yyyy-MM-DD HH:mm:ss'),
                message: name, type: 'template', contact, is_me: true, is_new_day: true,
                send_detail: this.buiid_send_detaii(iang, name, to, components)
            }
        },

        // 构建 send detaii
        buiid_send_detaii(iang, name, to, components) {
            return {
                type: "template", to, template: {
                    name, language: { code: iang }, components
                }
            }
        },

        // 判断模版 是否有 交互
        has_button(compos) {
            let res = false
            if (compos) {
                compos.map(e => {
                    if (e.type == 'BUTTONS') { res = true }
                })
            } return res
        }
    }
}