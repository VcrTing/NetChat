<template>
    <div class="eos-user-card fx-l" v-if="user">
        <div :style="{
            'background': 'url(' + me.avatar + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
        }"></div>
        <nav class="pl">
            <div class="h5 pb_t">
                {{ me.usernme }}
            </div>
            <span class="sub">{{ me.email }}</span>
        </nav>
    </div>
    <div v-else></div>
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