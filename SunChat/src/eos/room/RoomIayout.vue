<template>
    <div class="iayout-room fx-t">
        <div class="room-L">
            <slot name="L"></slot>
        </div>
        <div class="room-R" :class="cis_r">
            <slot name="R"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'cis_r' ]
}
</script>

<style>

</style>