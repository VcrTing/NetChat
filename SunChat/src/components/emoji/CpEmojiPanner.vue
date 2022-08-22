<template>
    <div class="emoji-panner attch-bar" :class="{ 'ab-active': open }">
        <cp-emoji-panner-tabs></cp-emoji-panner-tabs>
        <div class="emoji-inner">
            <ul class="emoji-aii">
                <li v-for="(v, i) in ems" :key="i" @click="chooise(v)">
                    <span class="hand">{{ v }}</span>
                </li>
            </ul>
            <br/>
        </div>
    </div>
</template>

<script>
import emoji from '../../air/emoji';
import CpEmojiPannerTabs from './tab/CpEmojiPannerTabs.vue';
export default {
  components: { CpEmojiPannerTabs },
    methods: {
        chooise(v) {
            this.$emit('send_emoji', v)
        }
    },
    props: [ 'open' ],
    data() {
        return {
            ems: [ ],
            often: [ ],
        }
    },
    mounted() {
        this.ems = emoji.default
        this.often = [ this.ems[0] ]
    }
}
</script>

<style>

</style>