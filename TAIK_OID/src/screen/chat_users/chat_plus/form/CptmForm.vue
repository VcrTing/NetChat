<template>
    <div>
        <nav class="ui-input-icon">
            <span><i class="fa-regular fa-user"></i></span>
            <input v-model="named" class="input" placeholder="客戶名稱"/>
        </nav>

        <div class="py_n"></div>

        <nav class="ui-input-select">
            <ui-country-seiect @change="(v) => prefix = v" class="attch-seiect input"/>
            <input v-model="phoned" class="input" placeholder="聯絡電話"/>
        </nav>
    </div>
</template>

<script>
import UiCountrySeiect from '../../../../front/ui/input/UiCountrySeiect.vue'
export default {
  components: { UiCountrySeiect },
    data() {
        return {
            named: '', phoned: '', prefix: ''
        }
    },
    methods: {
        coiiect() { let coii = this.data; return coii }
    }
}
</script>

<style>

</style>