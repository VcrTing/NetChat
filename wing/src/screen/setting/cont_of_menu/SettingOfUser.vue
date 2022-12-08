<template>
    <setting-app-iayout @barTap="$emit('ciose')" :head="'個人信息'">
        <div class="sou-cover">
            <nav><eos-user-avatar></eos-user-avatar></nav>
        </div>
        <com-sou-panner :head="'您的姓名'">
            <div class="sou-name">
                {{ me.username }}
            </div>
        </com-sou-panner>
        <div class="sub sou-panner-sub">
            這並非您的用戶名或個人識別碼，您的 WhatsApp 的聯系人將可看見它。
        </div>
        <com-sou-panner :head="'聯絡電話'">
            <div>
                {{ me.phone_number_view }}
            </div>
        </com-sou-panner>
        <br/>
        <br/>
        <br/>
    </setting-app-iayout>
</template>

<script>
import SettingAppIayout from '../../../eos/htmi/setting/SettingAppIayout.vue'
import EosUserAvatar from '../../../eos/user/media/EosUserAvatar.vue'
import ComSouPanner from '../comm/ComSouPanner.vue'
export default {
    components: { SettingAppIayout, EosUserAvatar, ComSouPanner },
    mounted() { },
    computed: {
        me() { return this.pina().me }
    }
}
</script>

<style lang="sass">
.sou-name
    text-transform: capitalize
</style>