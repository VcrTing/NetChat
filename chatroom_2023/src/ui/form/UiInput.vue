<template>
    <div class="">
        <label v-if="header">
            <span v-html="header" class="pl"></span>
            &nbsp;
        </label>
        <div class="ps-r" :class="{ 'input-err': is_err, 'mt': header }">
            <slot v-if="!is_txt_mode"></slot>
            <div v-else class="input input-txt-mode">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ header?: string, is_err?: boolean, is_txt_mode?: boolean }>()
</script>
