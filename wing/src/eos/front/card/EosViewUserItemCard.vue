<template>
    <div class="eos-new-user-button-card">
        <div>
            <eos-user-avatar :img="null"/>
        </div>
        <button class="fx-1">
            <div>
                <span v-if="user.profile_name">{{ user.profile_name }}</span>
                <span v-else>未知客戶</span>
            </div>
            <div class="sub fs_14">{{ user.phone_number }}</div>
        </button>
    </div>
</template>

<script>
import EosUserAvatar from '../../user/media/EosUserAvatar.vue'
export default {
  components: { EosUserAvatar },
    props: [ 'user' ]
}
</script>

<style lang="sass" scoped>
.sub
    padding-top: 2px
</style>