<template>
    <nav class="eos-user-avatar" >
        <div v-if="img" :style="{
            'background': 'url(' + img + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
        }"></div>
        <div v-else>
            <eos-user-avatar-def></eos-user-avatar-def>
        </div>
    </nav>
</template>

<script>
import EosUserAvatarDef from '../../static/avatar/EosUserAvatarDef.vue'
export default {
    components: { EosUserAvatarDef },
    props: [ 'img' ]
}
</script>

<style lang="sass">
.eos-user-avatar
    border-radius: 100%


</style>