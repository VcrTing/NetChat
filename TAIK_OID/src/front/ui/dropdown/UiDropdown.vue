<template>
    <div class="dropdown">
        <div class="drop-trig" :id="'popper_trig_' + $.uid">
            <slot name="tit"></slot>
        </div>
        <div class="drop-inner" :class="_cis" :id="'popper_cont_' + $.uid">
            <slot name="cont"></slot>
        </div>
    </div>
</template>

<script>
// import { createPopper } from '@popperjs/core'
export default {
    props: [ 'clear', '_cis' ],
    mounted() {
        /*
        createPopper(
            document.getElementById('popper_trig_' + this.$.uid),
            document.getElementById('popper_cont_' + this.$.uid), {
                placement: 'bottom'
            }
        )
        */
    },
}
</script>