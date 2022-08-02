<template>
    <nav class="room-header pl pb" :class="{ 'room-header-ine': !no_ine  }">
        <div class="fx-l">
            <div class="pr_x">
                返回
            </div>
            <div :class="'h' + size">
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