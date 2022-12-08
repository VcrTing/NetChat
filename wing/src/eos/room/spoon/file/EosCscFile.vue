<template>
    <p>
        <div class="pb_s sub">文件</div>
        <a v-for="(m, n) in medias" :key="n" target="_blank" :href="conf.BASE + m.origin">{{ m.name }}</a>
    </p>
</template>

<script>
export default {
    props: [ 'medias' ],
    mounted() {
        console.log('this.file =', this.medias)
    },
}
</script>

<style>

</style>