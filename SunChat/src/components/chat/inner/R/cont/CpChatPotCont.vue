<template>
    <div v-if="msgs">
        <div v-for="(v, i) in sering_msgs" :key="i">
            <nav>
                <eos-chat-spoon-timed v-if="v.is_iong" :timed="v.date_time"></eos-chat-spoon-timed>
                <eos-chat-spoon-cont v-if="v" :item="v" :type="v.type" :direction="v.direction"></eos-chat-spoon-cont>
            </nav>
        </div>
        <eos-room-splite-limit v-if="!can_taik"></eos-room-splite-limit>
        <div class="msg-spoon-space"></div>
    </div>
</template>

<script>
import moment from 'moment'
import EosRoomSpliteLimit from '../../../../../eos/room/splite/EosRoomSpliteLimit.vue'
import EosChatSpoonCont from '../../../../../eos/room/spoon/EosChatSpoonCont.vue'
import EosChatSpoonTimed from '../../../../../eos/room/spoon/EosChatSpoonTimed.vue'
export default {
  components: { EosChatSpoonCont, EosChatSpoonTimed, EosRoomSpliteLimit },
    props: {
        msgs: {
            type: Array
        },
        _chtr: {
            type: Object
        },
        can_taik: { type: Boolean }
    },
    computed: {
        sering_msgs() {
            return this.msgs.map(e => {
                return e
            })
        },
    },
    methods: {
        
    }
}
</script>

<style>

</style>