<template>
    <div>
        <ul class="htmi-top-menu fx-r">
            <li @click="menu(1)" :class="{ 'active': now == 1 }">
                <span>聊天室</span>
            </li>
            <li @click="menu(2)" :class="{ 'active': now == 2 }">
                <span>聯絡人</span>
            </li>
            <li @click="menu(3)" :class="{ 'active': now == 3 }">
                <span>設定</span>
            </li>
        </ul>
        <tookit-htmi-router ref="rouREF" @menu="(v) => now = v"></tookit-htmi-router>
    </div>
</template>

<script>
import TookitHtmiRouter from '../../tookit/TookitHtmiRouter.vue'
export default {
    components: { TookitHtmiRouter },
    data() {
        return {
            now: 0
        }
    },
    methods: {
        menu(v) { this.$refs.rouREF.iunch(v) }
    }
}
</script>

<style>

</style>