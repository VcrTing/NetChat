<template>
    <ui-dropdown :class="'user-dropdown'">
        <template v-slot:tit>
            <ui-icon-opt></ui-icon-opt>
        </template>
        <template v-slot:cont>
            <nav class="tit">
                <button @click.stop="option(1)">Archive chat</button>
                <button @click.stop="option(2)">Mute notifications</button>
                <button @click.stop="option(3)">Unpin chat</button>
                <button @click.stop="option(4)">Mark as unread</button>
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
.user-dropdown
    min-width: 3em
    min-height: 1em
    .drop-trig
        text-align: right
    .drop-inner
        left: 50%
        transform: translate3d(-90%, 0, 0)
</style>