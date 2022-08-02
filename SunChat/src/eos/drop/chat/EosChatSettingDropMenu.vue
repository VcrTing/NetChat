<template>
    <ui-dropdown>
        <template v-slot:tit>
            <ui-icon-opt></ui-icon-opt>
        </template>
        <template v-slot:cont>
            <nav class="dropmenu-def drop-chat-setting tit">
                <button>Starred messages</button>
                <button @click="go('/chat/settings')">Settings</button>
                <hr/>
                <button>Log out</button>
            </nav>
        </template>
    </ui-dropdown>
</template>

<script>
import UiDropdown from '../../../front/ui/dropdown/UiDropdown.vue'
import UiIconOpt from '../../../front/ui/icon/opt/UiIconOpt.vue'
export default {
  components: { UiDropdown, UiIconOpt },

}
</script>

<style lang="sass">
.drop-chat-setting
    min-width: 12em
    &, & > button
        text-align: left
</style>