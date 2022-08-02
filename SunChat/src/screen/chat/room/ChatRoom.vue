<template>
    <room-iayout>
        <template v-slot:L>
            <slot></slot>
        </template>
        <template v-slot:R>
            <nav class="chat_room_card_wrapper">
                <div :class="{
                        'chat_room_card-show': (v == chatter_phone_number)
                    }" v-for="(v, i) in rooms_convert" :key="i">
                    <cp-chat-card v-if="v" :chatter="{ 'phone_number': v }"></cp-chat-card>
                </div>
            </nav>
        </template>
    </room-iayout>
</template>

<script>

import RoomIayout from '../../../eos/room/RoomIayout.vue'
import CpChatCard from '../../../components/chat/CpChatCard.vue'

export default {
  components: { RoomIayout, CpChatCard },
    data() {
        return {
            
        }
    },
    computed: {
        rooms() { return this.pina().rooms },
        rooms_convert() { let res = [ ]; for (let ii in this.rooms) { res.push(ii) } return res },
        chatter_phone_number() { 
            let res = this.pina().chatter
            return res ? res['phone_number'] : null 
        }
    },
}
</script>

<style>

</style>