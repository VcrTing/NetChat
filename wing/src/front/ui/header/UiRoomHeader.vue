<template>
    <nav class="room-header pb_x" :class="{ 'room-header-ine': !no_ine  }">
        <div class="fx-l">
            <div class="rh-icon h4">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="pl_s">
                <span :class="{ 'b': size > 0 }" v-html="head"></span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: [ 'head', 'size', 'no_ine' ]
}
</script>

<style>

</style>