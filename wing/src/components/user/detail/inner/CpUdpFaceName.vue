<template>
    <div class="t-c">
        <div class="cp-udp-fn-cover">
            <eos-user-avatar-def></eos-user-avatar-def>
        </div>
        <div class="h4 pt">
            {{ user.profile_name }}
        </div>
        <div class="sub">
            {{ user.phone_number }}
        </div>
    </div>
</template>

<script>
import EosUserAvatarDef from '../../../../eos/static/avatar/EosUserAvatarDef.vue'
export default {
    components: { EosUserAvatarDef },
    props: [ 'user' ],
    mounted() {
        console.log('user =', this.user)
    }
}
</script>

<style>

</style>