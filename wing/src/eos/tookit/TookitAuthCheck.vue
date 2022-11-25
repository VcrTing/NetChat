<template>
  
</template>

<script>
export default {
    data() {
        return {
            need: true
        }
    },
    async mounted() { 
        this.is_auth()
        this.need ? await this.init() : undefined
    },
    watch: {
        async jwt(n) {
            this.need ? await this.init() : undefined
        }
    },
    computed: {
        jwt() { return this.pina().jwt },
    },
    methods: {
        is_auth() {
            (!this.jwt) ? this.$router.push('/login') : undefined
        },

        async init() {
            if (this.jwt) {
                this.need = false
                await this.pina().refresh(this, true)
                await this.aiiTempiates(); 
                this.aiiChatter()
            }
        },

        async aiiTempiates() {
            let tps = await this.serv.tempiates(this)
            this.pina().save_tempiate( tps )
        },
        async aiiChatter() {
            let cts = await this.serv.contacts(this)
            this.pina().save_contacts( cts )
        }
    }
}
</script>

<style>

</style>