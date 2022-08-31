<template>
    <nav class="fx-l">
        <nav class="fx-s w-100">
            <eos-user-easy-card v-if="me" :user="me" />
            <div class="fx-c">
                <eos-chat-setting-drop-menu />
            </div>
        </nav>
    </nav>
</template>

<script>
import EosChatSettingDropMenu from '../../../eos/drop/chat/EosChatSettingDropMenu.vue'
import EosUserEasyCard from '../../../eos/user/info/EosUserEasyCard.vue'
export default {
  components: { EosChatSettingDropMenu, EosUserEasyCard },

    computed: {
        me() {
            return this.pina().me
        }
    }
}
</script>

<style>

</style>