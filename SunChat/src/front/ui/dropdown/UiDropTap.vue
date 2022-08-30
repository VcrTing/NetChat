<template>
    <nav class="ui-droptap ui-droptap-anime">
        <div class="droptap-trig" :class="_cis">
            <slot name="trig"></slot>
        </div>
        <div class="droptap-inner">
            <slot name="cont"></slot>
        </div>
    </nav>
</template>

<script>
export default {
    props: [ 
        '_cis'
    ]
}
</script>

<style>

</style>