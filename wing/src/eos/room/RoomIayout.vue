<template>
    <div class="iayout-room fx-t">
        <div class="room-L">
            <slot name="L"></slot>
        </div>
        <div class="room-R" :class="cis_r">
            <slot name="R"></slot>
        </div>
        <div class="room-D" :class="{ 'room-D-active': panner == 1 }">
            <slot name="D"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'cis_r' ],
    computed: {
        panner() {
            return this.pina().PANNER
        }
    }
}
</script>

<style>

</style>