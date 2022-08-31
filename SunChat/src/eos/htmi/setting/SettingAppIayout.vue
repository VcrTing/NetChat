<template>
    <nav class="room-header room-header-ine app-bar">
        <div @click="$emit('barTap')" class="fx-l py_x hand">
            <div class="rh-icon h4">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="pl_s pr_x3">
                <span v-html="head"></span>
            </div>
        </div>
    </nav>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: [ 'head' ]
}
</script>

<style>

</style>