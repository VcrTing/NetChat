<template>
    <select v-model="now">
        <option :value="v.v" v-for="(v, i) in items" key="i">
            {{ v.txt }}
        </option>
    </select>
</template>

<script>
export default {
    watch: {
        now(n) {
            this.$emit('change', n)
        }
    },
    data() {
        return {
            now: '852',
            items: [
                { txt: '+852', v: '852' },
                { txt: '+853', v: '853' },
                { txt: '+001', v: '001' },
                { txt: '--', v: '' },
            ]
        }
    }
}
</script>

<style>

</style>