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
        phoned() {
            const src = this.pina().chatter
            return src ? src.phone_number : ''
        },
        words() { return this.pina().chat_ioc_words( this.chtr ) },
        pot() { return document.getElementById('pot_' + this.$.uid) }
    },
    mounted() {
        this.down()
        // console.log('tooi_time =', this.tooi_time.himmer_time())
    },
    methods: {

        // 先将消息插入数组
        insert_words(v) {
            this.pina().insert_words( v, this.phoned )
        },

        // 发送消息
        async say(sentence) { 
            this.down()
            sentence.phone_number = this.phoned
            this.insert_words( sentence )
            this.down()
            await this.pina().say( this, sentence )
            // 发送成功后 做的事情
            await this.$refs.reREF.refresh()
            this.down()
        },

        // 对话框，弹到底部
        down() { setTimeout(() => { this.pot.scrollTop = this.pot.scrollHeight }, 1)  }
    }
}
</script>

<style>

</style>