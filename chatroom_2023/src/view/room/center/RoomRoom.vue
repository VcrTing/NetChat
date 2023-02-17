<template>
    <nav class="room-room">
        <div class="v-h">{{ msg.index }}</div>
        <div v-for="(v, i) in msg.current" :key="i">
            <div>
                [{{ i }}] [{{ v.type }}] {{ v.message }}
            </div>
        </div>
    </nav>
</template>
    
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { msgPina } from '../../../himm/pina';
const msg = msgPina()
</script>