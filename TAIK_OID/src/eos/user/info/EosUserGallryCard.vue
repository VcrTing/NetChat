<template>
    <div class="eos-user-gallry-card fx-l" v-if="user">
        <div class="user-avatar fx-c">
            <div v-if="user.avatar" :style="{
                'background': 'url(' + user.avatar + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }"></div>
            <eos-user-avatar-def v-else class="w-100"/>
        </div>
        <nav class="pl">
            <div class="h5">
                {{ name_avatar }}
            </div>
            <span class="sub fs_14">
                <slot></slot>    
            </span>
        </nav>
    </div>
    <div v-else></div>
</template>

<script>
import EosUserAvatarDef from '../../static/avatar/EosUserAvatarDef.vue'
export default {
    components: { EosUserAvatarDef },
    props: [ 'user' ],
    computed: {
        me() {
            return this.pina().me
        },

        name_avatar() {
            const res = this.user ? this.user.profile_name : ''
            return res ? res : '未知用戶'
        },
    }
}
</script>

<style>

</style>