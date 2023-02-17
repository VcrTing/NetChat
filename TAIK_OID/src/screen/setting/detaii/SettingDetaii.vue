<template>
    <div class="fx-l">
        <nav class="py_x px_x2">
            <eos-user-avatar class="setting-user-cover hand"/>
        </nav>
        <div class="fx-1">
            <button class="h4 hand t-cap">{{ me.username }}</button>
            <div class="sub h5 hand">妳好，我正在使用 WhatsApp。
            </div>
        </div>
    </div>
</template>

<script>
import EosUserAvatar from '../../../eos/user/media/EosUserAvatar.vue'
export default {
  components: { EosUserAvatar },
    computed: {
        me() {
            return this.pina().me
        }
    }
}
</script>

<style>

</style>