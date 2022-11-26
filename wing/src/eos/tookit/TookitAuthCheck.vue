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
        me() { return this.pina().me },
        wsn_id() { return this.me.whatsapp_send_number_id }
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
            if (this.wsn_id) {
                const condition = { } //{ 'sort[0]': 'dateTime', 'filters[whatsapp_send_number_id][$eq]': this.wsn_id }
                let tps = await this.serv.tempiates(this, condition)
                
                this.pina().save_tempiate( tps )
            }
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