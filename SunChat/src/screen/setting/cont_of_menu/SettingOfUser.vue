<template>
    <setting-app-iayout @barTap="$emit('ciose')" :head="'个人信息'">
        <div class="sou-cover">
            <nav><eos-user-avatar></eos-user-avatar></nav>
        </div>
        <com-sou-panner :head="'您的姓名'">
            <div>
                {{ me.username }}
            </div>
        </com-sou-panner>
        <div class="sub sou-panner-sub">
            这并非您的用户名或个人识别码，您的 WhatsApp 的联系人将可看见它。
        </div>
        <com-sou-panner :head="'聯絡電話'">
            <div>
                {{ me.phone }}
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

    computed: {
        me() {
            return this.pina().me
        }
    }
}
</script>

<style>

</style>