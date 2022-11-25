<template>
    <div>
        <ul class="emoji-panner-tabs" >
            <li v-for="(v, i) in tabs" :key="i"
                class="hand"
                @click="now = v.v"
                :class="{ 'ept-active': now == v.v }"
            >
                <div>{{ v.txt }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [ ],
    watch: {
        now(n) {
            this.$emit('changeEmojiTab', n)
        }
    },
    data() {
        return {
            now: 0,
            tabs: [
                {
                    txt: '全部', v: 0
                },
                {
                    txt: '黄豆', v: 1
                },
                {
                    txt: '符号', v: 2
                },
                {
                    txt: '人物', v: 3
                },
                {
                    txt: '动物', v: 4
                },
                {
                    txt: '车房', v: 5
                },
                {
                    txt: '旗帜', v: 6
                }
            ]
        }
    }, 
    methods: {

    }
}
</script>

<style>

</style>