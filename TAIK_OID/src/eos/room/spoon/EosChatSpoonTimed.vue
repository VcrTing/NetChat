<template>
    <div class="msg-spoon-timed">
        <tookit-spoon-timed :_timed="timed"></tookit-spoon-timed>
    </div>
</template>

<script>
import TookitSpoonTimed from '../../tookit/TookitSpoonTimed.vue'
export default {
    props: {
        timed: { type: String }
    },
    components: { TookitSpoonTimed },
}
</script>

<style>

</style>