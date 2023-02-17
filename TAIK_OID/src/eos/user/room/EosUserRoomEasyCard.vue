<template>
    <nav @click="open" class="eos-user-room-easy-card fx-s" v-if="user && user.profile_name">
        <div class="user-avatar fx-c">
            <div v-if="user.avatar" :style="{
                'background': 'url(' + user.avatar + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }"></div>
            <div v-else>
                <div v-if="name_avatar" class="user-avatar user-def-avatar bg-avatar">
                    <span class="">{{ name_avatar }}</span>
                </div>
                <div v-else>
                    <eos-user-avatar-def class="w-100"></eos-user-avatar-def>
                </div>
            </div>
        </div>
        <span class="px_s"></span>
        <nav class="t-l fx-1">
            <div class="fx-s pl_s">
                <div >{{ user.profile_name }}</div>
            </div>
        </nav>
    </nav>
    <div v-else></div>
</template>

<script>
import EosUserAvatarDef from '../../static/avatar/EosUserAvatarDef.vue'
export default {
  components: { EosUserAvatarDef },
    props: [ 'user' ],
    computed: {
        name_avatar() {
            const res = this.user ? this.user.profile_name : ''
            return res ? res.substring(0, 1) : ''
        }
    },
    methods: {
        open() {
            this.pina().open_Panner(1)
        }
    }
}
</script>

<style>

</style>