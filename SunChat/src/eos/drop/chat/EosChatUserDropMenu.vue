<template>
    <ui-dropdown>
        <template v-slot:tit>
            <ui-icon-opt></ui-icon-opt>
        </template>
        <template v-slot:cont>
            <nav class="dropmenu-def drop-chat-user tit">
                <button>Archive chat</button>
                <button>Mute notifications</button>
                <button>Unpin chat</button>
                <button>Mark as unread</button>
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
.drop-chat-user
    min-width: 12em
</style>