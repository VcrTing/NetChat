
import funni_tempiate from "../../back_es/tempiate/funni_tempiate"

const ser_temp = function(one) {
    delete one.id
    delete one.raw
    delete one.created_at
    delete one.updated_at
    // delete one.whatsapp_id
    delete one.published_at
    return one
}

export default {
    getter: {

    },
    action: {
        // 模版
        async save_tempiate(temps) {
            this.tempiates = temps.map(e => ser_temp(e))
            // console.log('模版 =', this.tempiates)
        },

        // 根据模版名称 与 语言，定位当前内容
        ioc_tempiate(named, iang) {
            let res = undefined
            this.tempiates.map(e => {
                if (e.name) {
                    if (named == e.name) {
                        if (iang == e.language) {
                            res = e
                        }
                    }
                }
               // console.log('结果 =', e.name, e.language, iang, named)
               /*
                if (e.template) {
                    let _ig = e.template.language ? e.template.language.code : null

                    if (named == e.template.name) {
                        if (_ig && (iang == _ig)) {
                            res = e
                        }
                    }
                }
                */
            })
            return res
        },
        
        // 传来 components 和 模版文字，返回有参数的结果
        text_of_params(comps, text, typed = 'BODY') {
            // console.log('COMPS =', comps)
            comps = comps ? comps : [ ]
            (comps.length > 0) ? comps.map(e => {
                if (e.type == typed) {
                    const ps = e.parameters
                    text = funni_tempiate.text_of_params(ps, text)
                }
            }) : undefined; return text
        }
    }
}