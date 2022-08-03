<template>
    <div v-if="msgs">
        <div v-for="(v, i) in msgs" :key="i">
            <nav>
                <eos-chat-spoon-timed v-if="v.is_iong" :timed="v.date_time"></eos-chat-spoon-timed>
                <eos-chat-spoon-cont v-if="v" :item="v" :type="v.type" :direction="v.direction"></eos-chat-spoon-cont>
            </nav>
        </div>
        <div class="msg-spoon-space"></div>
    </div>
</template>

<script>
import EosChatSpoonCont from '../../../../../eos/room/spoon/EosChatSpoonCont.vue'
import EosChatSpoonTimed from '../../../../../eos/room/spoon/EosChatSpoonTimed.vue'
export default {
  components: { EosChatSpoonCont, EosChatSpoonTimed },
    props: {
        msgs: {
            type: Array
        }
    },
    mounted() {
        // console.log('MSGS =', this.msgs)
    },
    computed: {
        
    },
    methods: {
        
    }
}
</script>

<style>

</style>