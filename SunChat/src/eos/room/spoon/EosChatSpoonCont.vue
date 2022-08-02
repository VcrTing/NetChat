<template>
    <div class="msg-spoon" :class="{ 'msg-spoon-me': direction != 'receive' }">
        <p>{{ cont }}</p>
    </div>
</template>

<script>
export default {
    props: [ 'cont', 'type', 'direction' ]
}
</script>

<style>

</style>