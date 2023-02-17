<template>
    <div class="fx-s">
        <eos-user-room-easy-card :user="me"></eos-user-room-easy-card>
        <div></div>
    </div>
</template>

<script>
import EosUserRoomEasyCard from '../../../eos/user/room/EosUserRoomEasyCard.vue'
export default {
  components: { EosUserRoomEasyCard },
    computed: {
        me() {
            return this.pina().chatter
        }
    }
}
</script>

<style>

</style>