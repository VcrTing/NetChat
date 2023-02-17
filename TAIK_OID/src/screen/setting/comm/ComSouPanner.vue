<template>
    <div class="sou-panner">
        <div v-if="head">{{ head }}</div>
        <nav>
            <slot></slot>
        </nav>
    </div>
</template>

<script>
export default {
    props: [ 'head' ]
}
</script>

<style>

</style>