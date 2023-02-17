<template>
    <div class="room-center">
        <slot></slot>
        <nav v-if="contact.has_current">
            <div class="fx-s">
                <div class="pr fx-1">
                    <input class="input" :disabled="!form.is_temp" @keydown.enter="funn.say" v-model="form.word" placeholder="說些什麼，回車發送..."/>
                </div>

                <button class="btn-ip btn-pri" @click="funn.temp">
                    先發送模板，才能發送消息
                </button>
            </div>
        </nav>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { contactPina, msgPina } from '../../../himm/pina';

const msg = msgPina()
const contact = contactPina()
const form = reactive({
    word: '', is_temp: false
})

const funn = {
    say: () => new Promise(rej => { msg.say( form.word ); form.word = ''; rej(0) }),
    temp: () => new Promise(async rej => {
        const res = await msg.send_tempiate( 28 )
        console.log('是否發送成功 =', res)
        if (res) { form.is_temp = true }
    })
}
</script>