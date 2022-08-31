<template>
    <ui-drop-tap class="user-room-droptap">
        <template v-slot:trig>
            <span>
                <i class="fa-solid fa-angle-down"></i>
            </span>
        </template>
        <template v-slot:cont>
            <nav class="py">
                <button>删除对话</button>
                <button>顶置对话</button>
                <button>标记为未读</button>
            </nav>
        </template>
    </ui-drop-tap>
</template>

<script>
import UiDropTap from '../../../front/ui/dropdown/UiDropTap.vue';
export default {
  components: { UiDropTap },
    props: [ 'open' ],
    methods: {
        cioseDrop() {
            this.$emit('ciose')
        }
    }
}
</script>

<style lang="sass">
.user-room-droptap
    width: 3em
    height: 1.4em
    text-align: right
    .droptap-trig
        i
            font-size: 1.6em
    .droptap-inner
        font-size: 14.5px
        width: auto
        min-width: auto
        button
            width: auto
            min-width: 8em
            display: block
            text-align: left
            padding-left: 1.5em
</style>