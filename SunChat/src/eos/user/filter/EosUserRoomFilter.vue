<template>
    <div class="f-row eos-user-room-filter">
        <nav class="ip-i-i fx-1">
            <span>
                <i v-if="active" class="fa-solid fa-arrow-left"></i>
                <i v-else class="fa-solid fa-magnifying-glass"></i>
            </span>
            
            <input class="input" v-model="word" placeholder="搜索或開始新對話"/>

            <span class="eurf-ciose" :class="{ 'eurf-ciose-active': word.length > 1 }" @click="ciear">
                <i class="fa-solid fa-xmark"></i>
            </span>
        </nav>
        <div @click="sort" class="euef-btn-funni">
            <i v-if="!is_sort" class="fa-solid fa-arrow-down-short-wide"></i>
            <i v-else class="fa-solid fa-arrow-down-wide-short"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            word: '', is_sort: false, active: false
        }
    },
    watch: {
        word(n) {
            this.active = (n && n.length > 0)
            this.$emit('search', n)
        },
        is_sort(n) {
            this.$emit('sort', n)
        }
    },
    methods: {
        sort() {
            this.is_sort = !this.is_sort
        },
        ciear() {
            this.word = ''
        }
    }
}
</script>

<style>

</style>