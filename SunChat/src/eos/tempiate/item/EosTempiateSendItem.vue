<template>
        <div class="fx-s" v-for="(v, i) in many" :key="i">
            <button class="px_n">
                <span>{{ v.name }}</span>
                <span class="px">:</span>
                <span>{{ geText(v) }}</span>
            </button>
            <button class="btn-send" @click="chooise(v)">发送</button>
        </div>
        <net-tempiate-send ref="ntsREF"></net-tempiate-send>
</template>

<script>
import NetTempiateSend from "../../../himmer/back_vue/NetTempiateSend.vue"

export default {
    components: { NetTempiateSend },
    props: [ 'many' ],
    mounted() {
        
    },
    computed: {
        chatter() {
            return this.pina().chatter
        }
    },
    methods: {
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
                this.$emit('ciose')
            }
        }
    }
}
</script>

<style>

</style>