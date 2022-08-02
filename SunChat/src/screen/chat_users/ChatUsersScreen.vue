<template>
    <div>
        <chat-tb-left class="chat-top-bar px"></chat-tb-left>
        <cp-chat-users-paner></cp-chat-users-paner>
    </div>
</template>

<script>
import CpChatUsersPaner from '../../components/chat/inner/L/CpChatUsersPaner.vue'
import ChatTbLeft from './top/ChatTbLeft.vue'
export default {
  components: { ChatTbLeft, CpChatUsersPaner },

}
</script>

<style>

</style>