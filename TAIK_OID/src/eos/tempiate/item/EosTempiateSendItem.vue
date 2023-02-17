<template>
    <div class="eos-tsi-wrapper">
        <div class="eos-tempiate-send-item" :class="'ani-eos-right_' + i" v-for="(v, i) in many" :key="i">
            <div>
                <button class="px py_s">
                    <!--span>{{ v.name }}</span>
                    <span class="px">:</span>-->
                    <span class="t-elip_x3">{{ geText(v) }}</span>
                </button>
                <div class="fx-r">
                    <button class="btn-send" @click="chooise(v)">发送</button>
                </div>
            </div>
        </div>
        <net-tempiate-send @send_started="sendStarted" ref="ntsREF"></net-tempiate-send>
    </div>
</template>

<script>
import conf from "../../../conf"
import NetTempiateSend from "../../../himmer/back_vue/NetTempiateSend.vue"

export default {
    components: { NetTempiateSend },
    props: [ 'many' ],
    mounted() {
        console.log('模版 =', this.many)
    },
    computed: {
        chatter() {
            return this.pina().chatter
        }
    },
    methods: {
        sendStarted(cond) {
            this.$emit('send_temp', cond)
        },

        // 获取文本
        geText(v) {
            let res = ''
            if (v.components) {
                res = v.components[0].text
            } return res
        },
        async chooise(v) { 
            const chat = this.chatter.phone_number
            if (chat) {
                await this.$refs.ntsREF.send_Tempiate(chat, v)
            }
        }
    }
}
</script>

<style lang="sass">

</style>