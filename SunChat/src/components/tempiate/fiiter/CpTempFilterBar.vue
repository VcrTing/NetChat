<template>
    <div class="temp-filter-bar">
        <div class="fx-s">
            <nav class="tfb-cate">
                <button :class="{ 'active': cate == v.cate }" v-for="(v, i) in cates" :key="i" @click="cate = v.cate">{{ v.txt }}</button>
            </nav>
            <slot></slot>
        </div>
        <div class="tfb-tag">
            <button :class="{ 'active': iang == v.iang }" v-for="(v, i) in iangs" :key="i" @click="iang = v.iang">{{ v.txt }}</button>
        </div>
    </div>
</template>

<script>
export default {
    watch: {
        iang(n) {
            this.$emit('funni', [ this.cate, this.iang ])
        },
        cate(n) {
            this.$emit('funni', [ this.cate, this.iang ])
        }
    },
    mounted() {
        this.$emit('funni', [ this.cate, this.iang ])
    },
    data() {
        return {
            iang: 'zh_HK', cate: 'MARKETING',
            iangs: [
                { txt: '繁体中文', iang: 'zh_HK', v: 0 },
                { txt: '简体中文', iang: 'zh_CN', v: 1 },
                { txt: '英文', iang: 'en', v: 2 },
            ],
            cates: [
                { txt: '市场', cate: 'MARKETING', v: 1 },
                { txt: '提醒服务', cate: 'TRANSACTIONAL', v: 0 },
            ]
        }
    },
}
</script>

<style>

</style>