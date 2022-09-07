<template>
    <div>
        {{ msg }}
    </div>
</template>

<script>
export default {
    props: {
        iast_msg: {
            type: Object
        }
    },
    computed: {
        msg() {
            let res = this.iast_msg ? this.iast_msg.message : '未有新消息'
            return res
        }
    }
}
</script>

<style lang="sass">
.thd
    font-size: 14px
</style>