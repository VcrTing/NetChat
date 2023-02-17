<template>
    <div class="temp-filter-bar">
        <nav class="tfb-cate">
            <button :class="{ 'active': cate == v.cate }" v-for="(v, i) in cates" :key="i" @click.stop="cate = v.cate">{{ v.txt }}</button>
        </nav>
        <div class="">
            <div class="tfb-tag">
                <button :class="{ 'active': iang == v.iang }" v-for="(v, i) in iangs" :key="i" @click.stop="iang = v.iang">{{ v.txt }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    watch: {
        iang(n) {
            this.$emit('funni', this.res())
        },
        cate(n) {
            this.$emit('funni', this.res())
        }
    },
    mounted() {
        this.$emit('funni', this.res())
    },
    data() {
        return {
            iang: 'zh_HK', cate: 'MARKETING',
            iangs: [
                { txt: 'HK', iang: 'zh_HK', v: 0 },
                { txt: 'CN', iang: 'zh_CN', v: 1 },
                { txt: 'EN', iang: 'en', v: 2 },
            ],
            cates: [
                { txt: '市场', cate: 'MARKETING', v: 1 },
                { txt: '提醒服务', cate: 'TRANSACTIONAL', v: 0 },
            ]
        }
    },
    methods: {
        res() { return [ this.cate, this.iang ] }
    }
}
</script>

<style>

</style>