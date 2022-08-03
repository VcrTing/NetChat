<template>
    <nav class="eos-user-room-card fx-s" v-if="cher" :class="{ 'bg-def': is_now }">
        <span class="px_s"></span>
        <div class="user-avatar fx-c">
            <div v-if="cher.avatar" :style="{
                'background': 'url(' + cher.avatar + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }"></div>
            <div v-else class="user-avatar user-def-avatar" :class="{ 'bg-def': !is_now, 'bg-avatar': is_now }">
                <span>{{ name_avatar }}</span>
            </div>
        </div>
        <span class="px_s"></span>
        <nav class="t-l fx-1">
            <div class="fx-s">
                <div>{{ cher.profile_name }}</div>
                <div class="fs_s sus">昨天 12:20</div>
            </div>
            <nav class="fs_s sub fx-s">
                <span>{{ cher.phone_number }}</span>
                <div>
                    <eos-chat-user-drop-menu></eos-chat-user-drop-menu>
                </div>
            </nav>
        </nav>
    </nav>
    <div v-else></div>
</template>

<script>

import EosChatUserDropMenu from '../../drop/chat/EosChatUserDropMenu.vue'
export default {
  components: { EosChatUserDropMenu },
    props: [ 'chatter', 'msgs' ],
    computed: {
        cher() {
            const src = this.chatter
            const res = src
            return res
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
        }
    }
}
</script>

<style>

</style>