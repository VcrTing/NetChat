<template>
    <div>
        <cp-chat-top-user-detail-bar class="chat-top-bar px"></cp-chat-top-user-detail-bar>
        <cp-chat-pot-paner :chtr="chatter"></cp-chat-pot-paner>
    </div>
</template>

<script>
import CpChatTopUserDetailBar from './bar/CpChatTopUserDetailBar.vue'
import CpChatPotPaner from './inner/R/CpChatPotPaner.vue'
export default {
  components: { CpChatPotPaner, CpChatTopUserDetailBar },
  props: [ 'chatter' ]
}
</script>

<style>

</style>