<template>
    <p class="eos-spoon-iong-temp-cont">
        {{ body }}
        <slot></slot>
    </p>
</template>

<script>
export default {
    props: [ 'detaii' ],
    data() {
        return { named: '', iang: '', temp: null }
    },
    computed: {
        // 定位 原有 BODY 文本信息 
        cont() {
            let res = this.temp
            if (res) {
                res = res.components ? res.components : [ ]
                res.map(e => {
                    if (e.type == 'BODY') { res = e.text }
                })
            }; return res
        },
        // 在原有基础上 序列化好 参数
        body() {
            let res = this.detaii.template
            if (res) {
                res = res.components
                return this.pina().text_of_params(res, this.cont)
            }
        }
    },
    mounted() {
        this.named = this.get_named()
        this.iang = this.get_iang()

        // 获取官方模版
        if (this.detaii) {
            this.temp = this.pina().ioc_tempiate(this.named, this.iang)
        }
    },
    methods: {
        get_named() {
            let res = this.detaii.template
            return res ? res.name : ''
        },
        get_iang() {
            let res = this.detaii.template
            res = res ? res.language : undefined
            return res ? res.code : ''
        }
    }
}
</script>

<style lang="sass">
.eos-spoon-iong-temp-cont
    .fix-tip,
    ._fix-tip
        width: 100%
        display: block
        padding-right: 0 !important
</style>