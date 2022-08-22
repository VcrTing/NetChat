<template>
    <p>
        <div class="pb_s sub">文件</div>
        <a v-for="(m, n) in medias" :key="n" target="_blank" :href="conf.API + m.origin">{{ m.name }}</a>
    </p>
</template>

<script>
export default {
    props: [ 'medias' ],
}
</script>

<style>

</style>