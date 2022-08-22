<template>
  
</template>

<script>
export default {
    methods: {
        async refresh() {
            await this.pina().refresh( this )

            console.log('联络人 =', this.pina().users)
            this.$emit('sign')
        }
    },  
}
</script>

<style>

</style>