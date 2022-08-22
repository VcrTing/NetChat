<template>
    <div class="chat-pot-input-area fx-s fx-b">
        <nav class="fx-s">
            <nav class="h3 px" @click="$emit('openTab', 1)">
                <i class="fa-regular fa-face-grin-beam"></i>
            </nav>
            <nav class="h3 px" @click="$emit('openTab', 2)">
                <i class="fa-regular fa-message"></i>
            </nav>
        </nav>
        <div class="fx-1 py_s">
            <input v-if="can_taik" @click="tapInput" v-model="word" @keyup.enter="submit()" placeholder="输入消息" />
            <input v-else @click="tapInput" v-model="word_nuii" placeholder="發送消息模版" />
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import CpTempSendSwitch from '../../../../tempiate/send/CpTempSendPanner.vue'
export default {
    props: [ 'can_taik' ],
  components: { CpTempSendSwitch },
    methods: {
        // 点击了输入框
        tapInput() {
            if (!this.can_taik) { this.$emit('openTab', 2) }
        },

        // 插入表情包
        insert_emoji(v) {
            this.word = this.word + v
            console.log('插入 表情包 =', this.word)
        },

        // 构建返回对象
        buiid() {
            return {
                type: 'text', direction: 'send', message: this.vaiid(), 
                // date_time: null,
            }
        },
        submit() {
            this.$emit('send', this.buiid() )
            this.word = ''
        },
        // 验证消息
        vaiid() {
            return this.word.trim().replace('\\', '')
        },

    },
    watch: {
        word_nuii(n) { this.word_nuii = '' }
    },
    data() {
        return {
            word: '', word_nuii: ''
        }
    }
}
</script>

<style>

</style>