<template>
    <div class="fx-s w-100">
      <div class="pl_x2">
        <eos-user-easy-card></eos-user-easy-card>
      </div>
      <div class="pr-chat">
        <htmi-top-menu></htmi-top-menu>
      </div>
    </div>
</template>

<script>
import EosUserEasyCard from '../../user/info/EosUserEasyCard.vue'
import HtmiTopMenu from '../top_menu/HtmiTopMenu.vue'
export default {
  components: { EosUserEasyCard, HtmiTopMenu },

}
</script>

<style>

</style>