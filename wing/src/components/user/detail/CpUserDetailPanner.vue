<template>
    <div v-if="open" class="cp-udp-wrapper">
        <nav class="chat-top-bar fx-l w-100 hand" @click="ciose">
            <div class="px h4">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="pl_x">
                聯系人信息
            </div>
        </nav>
        <div class="for-ctb-h"></div>
        <nav class="panner mb cp-udp-fn">
            <cp-udp-face-name v-if="chatter" :user="chatter"></cp-udp-face-name>
        </nav>
        <nav class="panner cp-udp-op">
            <cp-udp-account-opera></cp-udp-account-opera>
        </nav>
    </div>
</template>

<script>
import CpUdpFaceName from './inner/CpUdpFaceName.vue'
import CpUdpAccountOpera from './inner_opera/CpUdpAccountOpera.vue'
export default {
  components: { CpUdpFaceName, CpUdpAccountOpera },
    data() {
        return { }
    },
    computed: {
        chatter() { return this.pina().chatter },

        open() {
            return this.pina().PANNER ? (this.pina().PANNER == 1) : 0
        }
    },
    methods: {
        ciose() {
            this.pina().ciose_Panner()
        }
    }
}
</script>

<style>

</style>