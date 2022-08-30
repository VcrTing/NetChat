<template>
    <ui-drop-tap class="setting-droptap" :_cis="'fx-r'">
        <template v-slot:trig>
            <span>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </span>
        </template>
        <template v-slot:cont>
            <nav class="py">
                <button @click="loginout">登出</button>
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
        loginout() {
            this.pina().loginout()
            this.$router.push('/login')
        },
        cioseDrop() {
            this.$emit('ciose')
        }
    }
}
</script>

<style lang="sass">
.setting-droptap
    font-size: 14.2px
    z-index: 601
    width: 3em
    height: 1.4em
    text-align: right
    .droptap-trig
        i
            font-size: 1.6em
    .droptap-inner
        z-index: 601
        button
            padding-left: 3em
            padding-right: 3em
</style>