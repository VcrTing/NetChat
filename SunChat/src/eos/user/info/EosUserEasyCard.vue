<template>
    <div class="eos-user-easy-card fx-l">
        <div :style="{
            'background': 'url(' + me.avatar + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
        }"></div>
        <!--nav class="pl">
            {{ me.named }}
        </!--nav-->
    </div>
</template>

<script>
export default {
    props: [ 'user' ],
    computed: {
        me() {
            return this.pina().me
        }
    }
}
</script>

<style>

</style>