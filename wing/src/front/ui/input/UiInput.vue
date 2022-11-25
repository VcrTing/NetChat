<template>
    <nav class="">
        <label :class="_class" v-if="header">
            <span v-html="header"></span>
            &nbsp;
        </label>
        <div :class="{ 'py_s': (header) }"></div>
        <div :class="{ 'input-err': is_err }">
            <slot></slot>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        is_err: { type: Boolean, default: true },
        header: { type: String },
        _class: { type: String }
    },
}
</script>

<style lang="sass">
</style>