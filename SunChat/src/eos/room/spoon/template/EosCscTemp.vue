<template>
    <div v-if="!detaii">
        展示模版
    </div>
    <div v-else>
        <eos-csc-t-confirm v-if="has_button" :comps="compos"></eos-csc-t-confirm>
        <div v-else>
            <div v-if="tempiates && tempiates.length > 0">
                <eos-csc-t-cont :detaii="detaii"></eos-csc-t-cont>
            </div>
        </div>
    </div>
</template>

<script>
import EosCscTConfirm from './confirm/EosCscTConfirm.vue'
import EosCscTCont from './text/EosCscTCont.vue'
export default {
  components: { EosCscTConfirm, EosCscTCont },
    props: [ '_item' ],
    computed: {
        tempiates() {
            return this.pina().tempiates
        },
        detaii() {
            let res = null
            try {
                let dt = this._item.send_detail
                res = dt ? JSON.parse(dt) : ''
            } catch(err) { res = null }; return res
        },
        compos() {
            if (this.detaii) {
                return this.detaii.template ? this.detaii.template.components : null
            }
        },
        has_button() {
            let res = false
            this.compos.map(e => {
                if (e.type == 'BUTTONS') { res = true }
            }); return res
        }
    },
    mounted() {
        // this.detaii ? console.log('模版 =', this.detaii, '交互 =', this.has_button) : ''
    },
    methods: {
        
    }
}
</script>

<style>

</style>