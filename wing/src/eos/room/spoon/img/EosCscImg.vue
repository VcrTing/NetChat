<template>
    <nav v-for="(m, n) in medias" :key="n" class="spoon-img-wrapper">
        <img v-if="m.smaii" :src="conf.API + m.smaii"/>
        <img v-else-if="m.origin" :src="conf.API + m.origin"/>
        <div class="spoon-media-open-tap"><button @click="open(m.origin)">打开</button></div>
    </nav>
</template>

<script>
export default {
    props: [ 'medias' ],
    mounted() {
        console.log('this.media =', this.medias)
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