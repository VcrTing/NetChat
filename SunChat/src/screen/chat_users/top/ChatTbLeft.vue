<template>
    <div class="fx-r">
        <div class="pr">
            <eos-user-easy-card></eos-user-easy-card>
        </div>
        <nav class="fx-r ister">
            <div>刷新</div>
            <div>编辑</div>
            <eos-chat-setting-drop-menu></eos-chat-setting-drop-menu>
        </nav>
    </div>
</template>

<script>
import EosChatSettingDropMenu from '../../../eos/drop/chat/EosChatSettingDropMenu.vue'
import EosUserEasyCard from '../../../eos/user/info/EosUserEasyCard.vue'
export default {
  components: { EosChatSettingDropMenu, EosUserEasyCard },

}
</script>

<style>

</style>