<template>
    <nav class="eos-user-room-easy-card fx-s" v-if="user && user.profile_name">
        <div class="user-avatar fx-c">
            <div v-if="user.avatar" :style="{
                'background': 'url(' + user.avatar + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }"></div>
            <div v-else class="user-avatar bg-avatar user-def-avatar">
                <span>{{ name_avatar }}</span>
            </div>
        </div>
        <span class="px_s"></span>
        <nav class="t-l fx-1 fs_s">
            <div class="fx-s op-90">
                <div>{{ user.profile_name }}</div>
            </div>
            <nav class="sub">
                <span>{{ user.phone_number }}</span>
            </nav>
        </nav>
    </nav>
    <div v-else></div>
</template>

<script>
export default {
    props: [ 'user' ],
    computed: {

        name_avatar() {
            const res = this.user ? this.user.profile_name : ''
            return res ? res.substring(0, 1) : ''
        }
    }
}
</script>

<style>

</style>