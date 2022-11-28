<template>
    <room-iayout>
        <template v-slot:L>
            <slot></slot>
        </template>
        <template v-slot:R v-if="chatter_phone_number">
            <nav class="chat_room_card_wrapper">
                <div :class="{
                        'chat_room_card-show': (v == chatter_phone_number)
                    }" v-for="(v, i) in rooms_convert" :key="i">
                    <cp-chat-card v-if="v" :chatter="{ 'phone_number': v }"></cp-chat-card>
                </div>
            </nav>
            <!--
            <cp-gallary></cp-gallary> -->
        </template> 
        <template v-slot:R v-else>
            <nav class="chat_room_card_empty fx-c">
                <eos-flash-room-index/>
            </nav>
        </template>
        <template v-slot:D>
            <cp-user-detail-panner></cp-user-detail-panner>
        </template>
    </room-iayout>
</template>

<script>

import RoomIayout from '../../../eos/room/RoomIayout.vue'
import CpChatCard from '../../../components/chat/CpChatCard.vue'

import CpGallary from '../../../components/media/gallary/CpGallary.vue'
import CpUserDetailPanner from '../../../components/user/detail/CpUserDetailPanner.vue'
import EosFlashRoomIndex from '../../../eos/static/flash/EosFlashRoomIndex.vue'
import CpGallaryGroup from '../../../components/media/gallary/CpGallaryGroup.vue'

export default {
  components: { RoomIayout, CpChatCard, CpGallary, CpUserDetailPanner, EosFlashRoomIndex, CpGallaryGroup },
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
    mounted() {
        // console.log('所有聊天 =', this.rooms)
    }
}
</script>

<style lang="sass">
.chat_room_card_empty
    width: 100%
    height: 100%
</style>