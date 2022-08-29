<template>
  
</template>

<script>
export default {
    
    async mounted() {
        await this.init()
    },
    methods: {
        async init() {
            console.log('INIT ONE SIGN...', this.conf.one_sign)
            // await this.$OneSignal.init(this.conf.one_sign)
        }
    }
}
</script>

<style>

</style>