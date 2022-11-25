<template>
    <chat-room class="room-page for-chat-top">
      <router-view/>
    </chat-room>
</template>

<script>
import CpGallary from '../../components/media/gallary/CpGallary.vue'
import RoomIayout from '../../eos/room/RoomIayout.vue'
import ChatRoom from './room/ChatRoom.vue'
export default { components: { RoomIayout, ChatRoom, CpGallary }, 
  mounted() { console.log('ROOM') }
}
</script>