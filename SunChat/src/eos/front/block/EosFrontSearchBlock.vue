<template>
    <div class="eos-front-search-block">
        <div class="fx-s fx-1">
            <nav class="ip-i-i fx-1">
                <span>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input class="input" v-model="words" :placeholder="pchd"/>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'pchd' ],
    data() {
        return {
            words: ''
        }
    }
}
</script>

<style>

</style>