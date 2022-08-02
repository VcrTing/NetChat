<template>
  
</template>

<script>
export default {
    methods: {
        async refresh() {
            console.log('执行刷新')
            await this.pina().refresh( this )
            this.$emit('sign')
        }
    },  
}
</script>

<style>

</style>