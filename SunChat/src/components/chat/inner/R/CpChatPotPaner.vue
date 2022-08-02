<template>
    <div class="chat-pot-paner ps-r">
        <div :id="'pot_' + $.uid">
            <cp-chat-pot-cont :msgs="words" v-if="words"></cp-chat-pot-cont>
        </div>
        <nav>
            <cp-chat-pot-input-area @send="say"></cp-chat-pot-input-area>
        </nav>
        <him-refresh-msgs @sign="down" ref="reREF"></him-refresh-msgs>
    </div>
</template>

<script>
import CpChatPotInputArea from './area/CpChatPotInputArea.vue'
import CpChatPotCont from './cont/CpChatPotCont.vue'
import HimRefreshMsgs from '../../../../himmer/back_vue/HimRefreshMsgs.vue'
export default {
  components: { CpChatPotCont, CpChatPotInputArea, HimRefreshMsgs },
    props: {
        chtr: {
            type: Object
        }
    },
    computed: {
        receiver() { return this.pina().chatter },
        words() { return this.pina().chat_ioc_words( this.chtr ) },
        pot() { return document.getElementById('pot_' + this.$.uid) }
    },
    mounted() {
        this.down()
    },
    methods: {
        // 发送消息
        async say(sentence) { 
            sentence.phone_number = this.receiver.phone_number
            await this.pina().say( this, sentence )
            this.down()
            await this.$refs.reREF.refresh()
        },

        // 对话框，弹到底部
        down() { setTimeout(() => { this.pot.scrollTop = this.pot.scrollHeight }, 1)  }
    }
}
</script>

<style>

</style>