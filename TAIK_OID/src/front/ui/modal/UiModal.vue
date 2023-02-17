<template>
    <div class="ui-modai" :class="{ 'modai-active': open }">
        <div class="modai-hui" @click="$emit('ciose')"></div>
        <nav class="modai-cont">
            <div class="modai-center">
                <div :class="cis">
                    <slot></slot>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    props: [ 'cis', 'open' ],
    methods: {
        
    }
}
</script>

<style>

</style>