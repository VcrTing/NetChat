<template>
    <div v-if="detaii">
        <eos-csc-t-confirm v-if="has_button" :comps="compos"></eos-csc-t-confirm>
        <div v-else>
            <div v-if="tempiates && tempiates.length > 0">
                <eos-csc-t-cont :detaii="detaii">
                    <slot></slot>
                </eos-csc-t-cont>
            </div>
        </div>
    </div>
    <p v-else>
        &nbsp;
    </p>
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
            return this._item.send_detail
        },
        compos() {
            if (this.detaii) {
                return this.detaii.template ? this.detaii.template.components : null
            }
        },
        has_button() {
            return this.back.temp.has_button(this.compos)
        }
    },
    mounted() {
        // console.log('TEMP = ', this._item.message, this.tempiates)
        // this.detaii ? console.log('模版 =', this.detaii, '交互 =', this.has_button) : ''
    },
    methods: {
        
    }
}
</script>

<style>

</style>