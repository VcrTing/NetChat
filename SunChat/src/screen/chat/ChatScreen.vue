<template>
    <chat-room class="room-page for-chat-top">
      <router-view/>
    </chat-room>
</template>

<script>
import RoomIayout from '../../eos/room/RoomIayout.vue'
import ChatRoom from './room/ChatRoom.vue'
export default { components: { RoomIayout, ChatRoom }}
</script>