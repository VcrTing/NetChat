<template>
    <nav v-for="(m, n) in medias" :key="n" class="spoon-img-wrapper">
        <img :src="conf.API + m.smaii"/>
        <div><button @click="open(m.origin)">打开</button></div>
    </nav>
</template>

<script>
export default {
    props: [ 'medias' ],
    mounted() {
        console.log('medias =', this.medias)
    },
    methods: {
        open(src) {
            if (src) {
                src = this.conf.API + src
                this.pina().gaiiary([ src ])
                this.pina().open_Modai( 1 )
            }
        }
    }
}
</script>

<style>

</style>