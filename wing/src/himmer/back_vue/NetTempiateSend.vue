<template>

</template>

<script>
export default {
    data() {
        return {
            param1: [ '{{1}}', '{{ 1 }}' ],
            

        }
    },
    methods: {
        // 判断是否是 需要构建参数的 模版
        is_Param_Temp(comps) {
            let res = false
            comps.map(e => {
                e = e.text ? e.text : ''
                this.param1.map(_p => { if (e.indexOf( _p ) > -1) { res = true } })
            }); return res
        },
        // 执行发送
        async _send(iang, name, recipient, components) {
            return await this.serv.send_Tempiate(this, iang, { name, recipient, components })
        },
        //
        async send_Tempiate(to, v) {
            const named = v.name
            const iang = v.language
            const comp = v.components
            const is_param = this.is_Param_Temp(comp)

            const _cd = { iang, named, to, components: is_param ? this.buiid_Params(comp) : comp }
            this.$emit('send_started', _cd)
            try {
                if (is_param) {
                    await this._send(_cd.iang, _cd.named, _cd.to, _cd.components)
                } else {
                    _cd.components = null
                    await this._send(_cd.iang, _cd.named, _cd.to, _cd.components)
                }
            } catch(err) {
                console.log('模版发送失败 =', err)
            }
        },

        // 构建参数
        buiid_Params(comps) {
            let res = [ ]
            comps.map(e => {
                res.push({
                    type: e.type,
                    parameters: [
                        { 
                            type: 'text',
                            text: '测试参数一'
                        },
                        { 
                            type: 'text',
                            text: '测试参数二'
                        }
                    ]
                })
            })
            return res
        },
    }
}
</script>

<style>

</style>