<template>
    <div>
        <div class="space-chat_top_bar"></div>
        <chat-tb-left class="chat-top-bar px"></chat-tb-left>
        <cp-chat-users-paner></cp-chat-users-paner>

        <chat-user-fixed-panner v-show="panner_ieft == 1"/>
        <chat-choise-taik-panner v-show="panner_ieft == 2"/>

        <chat-plus-taik-modal/>
    </div>
</template>

<script>
import CpChatUsersPaner from '../../components/chat/inner/L/CpChatUsersPaner.vue'
import ChatTbLeft from './top/ChatTbLeft.vue'
import ChatUserFixedPanner from './fixed/ChatUserFixedPanner.vue';
import ChatPlusTaikModal from './chat_plus/ChatPlusTaikModal.vue';
import ChatChoiseTaikPanner from './chat_choise/ChatChoiseTaikPanner.vue';
export default {
  components: { ChatTbLeft, CpChatUsersPaner, ChatUserFixedPanner, ChatPlusTaikModal, ChatChoiseTaikPanner },
    data() {
      return {
        
      }
    },
    computed: {
      panner_ieft() {
        return this.pina().PANNER_LEFT
      }
    }
}
</script>

<style>

</style>