<template>
    <div class="chat-user-paner">
        <eos-user-room-filter></eos-user-room-filter>
        <div v-for="(v, i) in rooms" :key="i">
            <eos-user-room-card v-if="v.chatter" :chatter="v.chatter" :msgs="v.msgs"></eos-user-room-card>
        </div>
    </div>
</template>

<script>
import EosUserRoomCard from '../../../../eos/user/room/EosUserRoomCard.vue'
import EosUserRoomFilter from '../../../../eos/user/filter/EosUserRoomFilter.vue'

export default {
  components: { EosUserRoomCard, EosUserRoomFilter },
    computed: {
        rooms() { return this.pina().rooms }
    }
}
</script>

<style>

</style>