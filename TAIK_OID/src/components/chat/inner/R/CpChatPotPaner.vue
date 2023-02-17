<template>
    <div class="chat-pot-paner ps-r">
        <div :id="'pot_' + $.uid">
            <cp-chat-pot-cont :can_taik="is_aiiow_taik" :_chtr="chatter" :msgs="words" v-if="words"></cp-chat-pot-cont>
        </div>
        <nav>
            <cp-chat-pot-input-area :can_taik="is_aiiow_taik" @openTab="open_Tab" ref="areaREF" @send="say"></cp-chat-pot-input-area>
        </nav>
        <him-refresh-msgs @sign="down" ref="reREF"></him-refresh-msgs>

        <!-- 表情包 面板 -->
        <cp-emoji-panner :open="tabs == 1" @send_emoji="insert_emoji"></cp-emoji-panner>
        <!-- 模版消息 面板 -->
        <cp-temp-send-panner @ciose="open_Tab" @toDown="down" :_chtr="chatter" :open="tabs == 2"></cp-temp-send-panner>
    </div>
</template>

<script>
import moment from 'moment'

import CpChatPotInputArea from './area/CpChatPotInputArea.vue'
import CpChatPotCont from './cont/CpChatPotCont.vue'
import HimRefreshMsgs from '../../../../himmer/back_vue/HimRefreshMsgs.vue'
import CpEmojiPanner from '../../../emoji/CpEmojiPanner.vue'
import CpTempSendPanner from '../../../tempiate/send/CpTempSendPanner.vue'
export default {
  components: { CpChatPotCont, CpChatPotInputArea, HimRefreshMsgs, CpEmojiPanner, CpTempSendPanner },
    props: [ 'chtr' ],
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
        phoned_send() {
            return this.conf.STRAPI.whatsapp_phone
        },
        chatter() {
            let pp = this.chtr; pp = pp ? pp.phone_number : undefined
            return pp ? this.pina().ioc_chatter_by_phoned( pp ) : {}
        },
        // 会话是否可以进行 ?
        is_aiiow_taik() {
            let src = this.chatter
            src = src ? src.free_response_limit : null
            return src ? (moment(src) > moment(new Date())) : false
        },

        words() { return this.pina().chat_ioc_words( this.chtr ) },
        pot() { return document.getElementById('pot_' + this.$.uid) }
    },
    mounted() {
        this.down()
        
        document.getElementById('pot_' + this.$.uid).addEventListener('scroll', (e) => {
            const t = e.target.scrollTop
            const h = e.target.scrollHeight
            if ((h - t) > 800) { this.$emit('showFunc') }
        })
    },
    methods: {
        // 打开何种 TAB
        open_Tab(tb) {
            if (this.tabs == tb) { this.tabs = 0 } else {
                this.tabs = tb
            }
        },
        // 将表情插入到 文本框
        insert_emoji(v) { this.$refs.areaREF.insert_emoji(v); this.tabs = 0 },

        // 先将消息插入数组
        insert_words(v) {
            this.pina().insert_words( v, this.phoned)
        },

        // 发送消息
        async say(sentence) { 
            this.down()
            sentence.from_ioc = true
            sentence.phone_number = this.phoned
            this.insert_words( sentence )
            this.down()
            await this.pina().say( this, sentence )
            // 发送成功后 做的事情
            // await this.$refs.reREF.refresh()
            this.down()
        },

        // 对话框，弹到底部
        down() { setTimeout(() => { this.pot.scrollTop = this.pot.scrollHeight }, 1)  }
    }
}
</script>

<style>

</style>