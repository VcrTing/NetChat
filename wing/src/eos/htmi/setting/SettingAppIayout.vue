<template>
    <div class="setting-app-bar">
        <nav class="app-header">
            <div @click="$emit('barTap')" class="fx-l hand bar-tap">
                <div class="rh-icon h4">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div class="pl_x pr_x3 h4">
                    {{ head }}
                </div>
            </div>
        </nav>
        <div class="app-cont">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'head' ]
}
</script>

<style>

</style>