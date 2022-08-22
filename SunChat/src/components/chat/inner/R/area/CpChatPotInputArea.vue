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
            <input v-model="word" @keyup.enter="submit()" placeholder="输入消息" />
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import CpTempSendSwitch from '../../../../tempiate/send/CpTempSendPanner.vue'
export default {
  components: { CpTempSendSwitch },
    methods: {
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
    data() {
        return {
            word: ''
        }
    }
}
</script>

<style>

</style>