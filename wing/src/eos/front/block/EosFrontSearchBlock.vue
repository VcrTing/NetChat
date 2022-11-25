<template>
    <div class="eos-front-search-block">
        <div class="fx-s fx-1">
            <nav class="ip-i-i fx-1">
                <span>
                    <i v-if="active" class="fa-solid fa-arrow-left"></i>
                    <i v-else class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input class="input" v-model="word" :placeholder="pchd"/>
                
                <span class="eurf-ciose" :class="{ 'eurf-ciose-active': word.length > 1 }" @click="word = ''">
                    <i class="fa-solid fa-xmark"></i>
                </span>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'pchd' ],
    data() {
        return {
            word: '', active: false
        }
    },
    watch: {
        word(n) {
            this.active = (n && n.length > 0)
            this.$emit('search', n)
        },
    },
    methods: {
        
    }
}
</script>

<style>

</style>