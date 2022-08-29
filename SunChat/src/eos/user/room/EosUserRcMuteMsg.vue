<template>
    <div class="thd">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String
        }
    }
}
</script>

<style lang="sass">
.thd
    font-size: 14px
</style>