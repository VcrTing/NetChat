<template>
    <div class="change-pager" :class="{ 'change-pager-active': (tab != 0), 'change-pager-noactive': (tab == 0) }">
        <div class="change-pager-one">
            <setting-app-iayout @barTap="back" :head="'设置'">
                <setting-detaii @click="tab = 1" class="setting-hv-panner"/>
                <div class="py_s"></div>
                <setting-menu/>
            </setting-app-iayout>
        </div>
        <div class="change-pager-two">
            <setting-of-user @ciose="tab = 0"/>
        </div>
    </div>
</template>

<script>
import SettingDetaii from './detaii/SettingDetaii.vue';
import SettingMenu from './menu/SettingMenu.vue';
import SettingAppIayout from '../../eos/htmi/setting/SettingAppIayout.vue';
import SettingOfUser from './cont_of_menu/SettingOfUser.vue';
export default {
    components: { SettingDetaii, SettingMenu, SettingAppIayout, SettingOfUser },
    data() {
        return {
            tab: 0
        }
    },
    methods: {
        back() {
            this.$router.push('/chat/room')
        }
    }
}
</script>

<style>

</style>