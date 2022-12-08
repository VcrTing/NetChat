<template>
    <div v-if="!is_temp">
        {{ iast_msg.message ? iast_msg.message : '未有新消息' }}
    </div>
    <div v-else class="eos-urmm-cont pr">
        <eos-csc-t-cont-ref v-if="is_view" class="t-elip_x1" :detaii="detaii"/>
        <div v-else>加載中...</div>
    </div>
</template>

<script>
import EosCscTContRef from '../../room/spoon/template/text/EosCscTContRef.vue'
export default {
    components: { EosCscTContRef },
    props: { iast_msg: { type: Object } },
    computed: {
        is_view() { let res = false; if (this.tempiates && ( this.tempiates.length > 0 )) { if (this.detaii) { res = true } }; return res },
        tempiates() { return this.pina().tempiates },
        detaii() { return this.iast_msg.send_detail },
        is_temp() { let res = false; if ( this.iast_msg ) { const ty = this.iast_msg.type; res = (ty === 'template') }; return res },
    }
}
</script>

<style lang="sass">
.thd
    font-size: 14px

.eos-urmm-cont
    //
</style>