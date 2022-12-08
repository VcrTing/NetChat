<template>
    <div v-if="!is_temp">
        {{ iast_msg.message ? iast_msg.message : '未有新消息' }}
    </div>
    <div v-else class="eos-urmm-cont pr">
        <eos-csc-t-cont-ref class="t-elip_x1" v-if="detaii" :detaii="detaii"/>
    </div>
</template>

<script>
import EosCscTContRef from '../../room/spoon/template/text/EosCscTContRef.vue'
export default {
    components: { EosCscTContRef },
    props: { iast_msg: { type: Object } },
    computed: {
        tempiates() { return this.pina().tempiates },
        detaii() { return this.iast_msg.send_detail },
        is_temp() {
            let res = false
            if ( this.iast_msg ) { const ty = this.iast_msg.type; res = (ty === 'template') }; return res
        },
    }
}
</script>

<style lang="sass">
.thd
    font-size: 14px

.eos-urmm-cont
    //
</style>