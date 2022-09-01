<template>
    <div>
        <div class="space-chat_top_bar"></div>
        <chat-tb-left class="chat-top-bar px"></chat-tb-left>
        <cp-chat-users-paner></cp-chat-users-paner>

        <chat-user-fixed-panner v-show="is_fixed"></chat-user-fixed-panner>
    </div>
</template>

<script>
import CpChatUsersPaner from '../../components/chat/inner/L/CpChatUsersPaner.vue'
import ChatTbLeft from './top/ChatTbLeft.vue'
import ChatUserFixedPanner from './fixed/ChatUserFixedPanner.vue';
export default {
  components: { ChatTbLeft, CpChatUsersPaner, ChatUserFixedPanner },
    data() {
      return {
        
      }
    },
    computed: {
      is_fixed() {
        return this.pina().PANNER_LEFT == 1
      }
    }
}
</script>

<style>

</style>