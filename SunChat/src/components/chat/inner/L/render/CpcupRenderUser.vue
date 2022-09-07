<template>
    <nav>
        <!-- 顶置 -->
        <div v-for="(v, i) in many" :key="i" :class="{ 'cpcup-ciose': !v.is_show }">
            <nav @click="change(v)" v-if="v.is_top">
                <eos-user-room-card :chatter="v" :msgs="getMsgs(v)"></eos-user-room-card>
            </nav>
        </div>

        <!-- 非顶置 -->
        <div v-for="(v, i) in many" :key="i" :class="{ 'cpcup-ciose': !v.is_show }">
            <nav @click="change(v)" v-if="!v.is_top">
                <eos-user-room-card :chatter="v" :msgs="getMsgs(v)"></eos-user-room-card>
            </nav>
        </div>
    </nav>
</template>

<script>
import EosUserRoomCard from '../../../../../eos/user/room/EosUserRoomCard.vue'
export default {
    components: { EosUserRoomCard },
    props: [
        'many'
    ],
    methods: {

        // 根据用户 contact
        getMsgs(uu) {
            let res = uu ? uu.phone_number : ''
            res = res ? this.rooms[ res ] : undefined
            return res ? res.msgs : [ ]
        },

        // 切换聊天用户
        change(chr) {
            const ph_oid = chr.phone_number // 
            if (ph_oid != this.chatter.phone_number) {
                this.pina().change_chatter( ph_oid )
            }
        },
    },
    computed: {
        // 当前聊天者
        chatter() { return this.pina().chatter },
        // 所有聊天
        rooms() { return this.pina().rooms },
    }
}
</script>

<style lang="sass">
.cpcup-ciose
    overflow: hidden !important
    max-height: 0px !important
</style>