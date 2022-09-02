<template>
    <div class="chat-user-fixed-panner">
        <setting-of-user @ciose="pina().ciose_Panner_Left()"/>
    </div>
</template>

<script>
import SettingOfUser from '../../setting/cont_of_menu/SettingOfUser.vue'
export default {
  components: { SettingOfUser },

}
</script>

<style>

</style>