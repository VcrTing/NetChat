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
export default {
    methods: {
        buiid() {
            return {
                type: 'text', message: this.vaiid(), 
                // date_time: this.tooi_timed.himmer_time()
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