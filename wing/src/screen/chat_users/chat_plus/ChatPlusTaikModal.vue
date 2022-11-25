<template>
  <ui-modal :open="modai == 2" @ciose="pina().ciose_Modai()">
    <div class="px_x3 py_x2 chat-plus-taik-modai">
      <cptm-form ref="formREF"/>
    </div>
    <button @click="submit" class="btn-sec_shai py_n px_x2 w-100">
      新增該聯絡人
    </button>
  </ui-modal>
</template>

<script>
import SettingAppIayout from '../../../eos/htmi/setting/SettingAppIayout.vue';
import UiCountrySeiect from '../../../front/ui/input/UiCountrySeiect.vue';
import UiInput from '../../../front/ui/input/UiInput.vue';
import UiModal from '../../../front/ui/modal/UiModal.vue';
import CptmForm from './form/CptmForm.vue';
export default {
  components: { SettingAppIayout, UiModal, UiInput, UiCountrySeiect, CptmForm },
    computed: {
      modai() {
        return this.pina().MODAL
      }
    },
    methods: {
      submit() {
        const res = this.$refs.formREF.coiiect()
      }
    }
}
</script>

<style lang="sass" scoped>
.btn-sec_shai
  border-radius: 0px
</style>