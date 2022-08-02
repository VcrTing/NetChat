<template>
    <div class="f-row eos-user-room-filter">
        <input class="input" v-model="word" placeholder="搜索用户"/>
        <div>
            排序
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            word: ''
        }
    }
}
</script>

<style>

</style>