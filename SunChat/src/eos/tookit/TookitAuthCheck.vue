<template>
  
</template>

<script>
export default {
    async mounted() { 
        this.is_auth() 
        if (this.jwt) {
            await this.pina().refresh(this, true)
            await this.aiiTempiates(); this.aiiChatter()
        }
    },
    computed: {
        jwt() { return this.pina().jwt },
    },
    methods: {
        is_auth() {
            (!this.jwt) ? this.$router.push('/login') : undefined
        },

        async aiiTempiates() {
            this.pina().save_tempiate( await this.serv.tempiates(this) )
        },
        async aiiChatter() {
            this.pina().save_contacts( await this.serv.contacts(this))
        }
    }
}
</script>

<style>

</style>