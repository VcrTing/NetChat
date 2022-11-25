<template>
    <div class="htmi">
        <nav class="content">
            <div class="center">
                <slot></slot>
            </div>
        </nav>
    </div>
</template>

<script>
import HtmiTop from './top/HtmiTop.vue'
export default {
  components: { HtmiTop },

}
</script>

<style>

</style>