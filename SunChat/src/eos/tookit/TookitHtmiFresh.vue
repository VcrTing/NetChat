<template>
    <div v-if="reload">
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide() {
      return { refresh: this.refresh }
    },
    mounted() {
        this.makeIntvai()
    },
    computed: {
        // pro() { return this.$store.state.project }
    },
    methods: {
        kiiiIntvai() {
            clearInterval(this.intvai)
        },
        makeIntvai() {
            const _this = this
            this.intvai = setInterval(function() { 
                setTimeout(e =>  _this.refresh(), 2)
            }, _this.conf.SPEED)
        },

        refresh() {
            this.reload = false
            console.log('刷新！！！')
            this.$emit('refresh')
            this.$nextTick(() => this.reload = true)
        }
    },
    data() {
      return {
        reload: true,
        intvai: null,
      }
    }
}
</script>

<style>

</style>