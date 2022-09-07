<template>
    <nav class="eos-user-room-card fx-s" v-if="cher" :class="{ 'bg-def': is_now }">
        <span class="pl"></span>
        <div class="user-avatar fx-c">
            <div v-if="cher.avatar" :style="{
                'background': 'url(' + cher.avatar + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }"></div>
            <div v-else>
                <div v-if="name_avatar" class="user-avatar user-def-avatar bg-avatar" :class="{ 'bg-avatar': !is_now, 'bg-avatar': is_now }">
                    <span class="">{{ name_avatar }}</span>
                </div>
                <div v-else>
                    <eos-user-avatar-def class="w-100"></eos-user-avatar-def>
                </div>
            </div>
        </div>
        <span class="px_s"></span>
        <nav class="t-l fx-1">
            <div class="fx-s">
                <div>{{ cher.profile_name ? cher.profile_name : '未知用戶' }}</div>
                <div class="fs_s sub">
                    <tookit-spoon-timed v-if="iast_msg" :_timed="iast_msg.date_time" :mode="2"></tookit-spoon-timed>
                </div>
            </div>
            <nav class="fx-s">
                <eos-user-rc-mute-msg class="thd" :iast_msg="iast_msg"/>
                <div class="fs_s">
                    <eos-chat-user-drop-menu :chatter="cher"></eos-chat-user-drop-menu>
                </div>
            </nav>
        </nav>
    </nav>
    <div v-else></div>
</template>

<script>
import moment from 'moment'

import EosChatUserDropMenu from '../../drop/chat/EosChatUserDropMenu.vue'
import EosUserAvatarDef from '../../static/avatar/EosUserAvatarDef.vue'
import TookitSpoonTimed from '../../tookit/TookitSpoonTimed.vue'
import EosUserRcMuteMsg from './EosUserRcMuteMsg.vue'
export default {
  components: { EosChatUserDropMenu, EosUserAvatarDef, TookitSpoonTimed, EosUserRcMuteMsg },
    props: [ 'chatter', 'msgs' ],
    mounted() {
        console.log('该人聊天 =', this.iast_msg)
    },
    computed: {
        cher() {
            return this.chatter
        },
        reciever() {
            return this.pina().chatter
        },
        is_now() {
            return this.cher ? (this.cher.phone_number == this.reciever.phone_number) : false
        },

        name_avatar() {
            const res = this.cher ? this.cher.profile_name : ''
            return res ? res.substring(0, 1) : ''
        },

        iast_msg() {
            let res = this.msgs ? this.msgs : [ ]
            const LEN = res.length
            return LEN > 0 ? res[ LEN - 1 ] : null
        }
    }
}
</script>

<style lang="sass">
.eos-user-room-card
    .ui-droptap-anime
        .droptap-trig
            opacity: 0
            visibility: hidden

    &:hover
        .droptap-trig
            opacity: 1
            visibility: visible
            animation: urtb_view .242s ease-out

@keyframes urtb_view
    0%
        opacity: 0
        transform: translateX(2px)
    100%
        opacity: 1
        transform: translateX(0px)
</style>