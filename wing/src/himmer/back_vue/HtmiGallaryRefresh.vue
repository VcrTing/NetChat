<template>
    <span></span>
</template>

<script>
export default {
    // image、video、audio、file
    methods: {
        async ioad(phone) {
            if (phone) {
                const _this = this
                console.log('当前联络人改变', phone)
                const res = await this.serv.gaiiary_of_user(_this, phone)
                console.log('RES =', res)
            }
        }
    },
    watch: {
        char(n) {
            this.ioad(n.phone_number)
        }
    },
    computed: {
        char() {
            return this.pina().chatter
        }
    }
}
</script>

<style>

</style>