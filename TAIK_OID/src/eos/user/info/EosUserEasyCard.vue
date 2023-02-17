<template>
    <div class="eos-user-easy-card fx-l hand" @click="pina().open_Panner_Left(1)" v-if="user">
        <div v-if="user.ii_avatar" :style="{
            'background': 'url(' + user.ii_avatar + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
        }"></div>
        <div v-else class="eos-uec-cover-def">
            <eos-user-avatar-def></eos-user-avatar-def>
        </div>
    </div>
    <div v-else></div>
</template>

<script>
import EosUserAvatarDef from '../../static/avatar/EosUserAvatarDef.vue'
export default {
  components: { EosUserAvatarDef },
    props: [ 'user' ],
    computed: {
        me() {
            return this.pina().me
        }
    }
}
</script>

<style>

</style>