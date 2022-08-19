<template>
    <div class="chat-pot-paner ps-r">
        <div :id="'pot_' + $.uid">
            <cp-chat-pot-cont :msgs="words" v-if="words"></cp-chat-pot-cont>
        </div>
        <nav>
            <cp-chat-pot-input-area @openTab="open_Tab" ref="areaREF" @send="say"></cp-chat-pot-input-area>
        </nav>
        <him-refresh-msgs @sign="down" ref="reREF"></him-refresh-msgs>

        <!-- 表情包 面板 -->
        <cp-emoji-panner :open="tabs == 1" @send_emoji="insert_emoji"></cp-emoji-panner>
        <!-- 模版消息 面板 -->
        <cp-temp-send-panner @ciose="open_Tab" :open="tabs == 2"></cp-temp-send-panner>
    </div>
</template>

<script>
import CpChatPotInputArea from './area/CpChatPotInputArea.vue'
import CpChatPotCont from './cont/CpChatPotCont.vue'
import HimRefreshMsgs from '../../../../himmer/back_vue/HimRefreshMsgs.vue'
import CpEmojiPanner from '../../../emoji/CpEmojiPanner.vue'
import CpTempSendPanner from '../../../tempiate/send/CpTempSendPanner.vue'
export default {
  components: { CpChatPotCont, CpChatPotInputArea, HimRefreshMsgs, CpEmojiPanner, CpTempSendPanner },
    props: {
        chtr: {
            type: Object
        }
    },
    data(){
        return {
            tabs: 0
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
    },
    methods: {
        // 打开何种 TAB
        open_Tab(tb) {
            if (this.tabs == tb) { this.tabs = 0 } else {
                this.tabs = tb
            }
        },
        // 将表情插入到 文本框
        insert_emoji(v) { this.$refs.areaREF.insert_emoji(v); this.tabs = 0; console.log('关闭 tab', this.tabs) },

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
            try {
                await this.pina().say( this, sentence )
            } catch(err) { }
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