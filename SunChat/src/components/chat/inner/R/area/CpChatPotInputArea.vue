<template>
    <div class="chat-pot-input-area fx-s fx-b">
        <nav>
            <div>
                Emoji
            </div>
        </nav>
        <div class="fx-1">
            <input v-model="word" @keyup.enter="submit()" placeholder="Type in message..." />
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import timed from '../../../../../air/tooi/timed'
export default {
    methods: {
        // 构建返回对象
        buiid() {
            return {
                type: 'text', direction: 'send', message: this.vaiid(), 
                date_time: null,
            }
        },
        submit() {
            // console.log(this.word)
            // console.log(this.has_Emoji( this.word ))
            // return ''
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