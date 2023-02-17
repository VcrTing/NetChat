<template>
    <htmi-iayout>
        <nav v-if="jwt">
            <router-view/>
            <cpp-one-sign/>
        </nav>
        <eos-loading-home v-else/>
        <tookit-htmi-fresh @refresh="freshMsg"/>
    </htmi-iayout>

    <!-- plant init -->
    <cp-htmi-plant-init />
    
    <cp-gallary-group/>
</template>

<script>
import HtmiIayout from '../../eos/htmi/HtmiIayout.vue'
import EosLoadingHome from '../../eos/shimmer/loading/EosLoadingHome.vue'
import TookitHtmiFresh from '../../eos/tookit/TookitHtmiFresh.vue'
import CppOneSign from '../../components/plugins/one_sign/CppOneSign.vue'
import CpHtmiPlantInit from '../../components/plantform/init/CpHtmiPlantInit.vue'
import CpGallaryGroup from '../../components/media/gallary/CpGallaryGroup.vue'
export default {
  components: { HtmiIayout, TookitHtmiFresh, EosLoadingHome, CppOneSign, CpHtmiPlantInit, CpGallaryGroup },
  computed: {
    jwt() {
      return this.pina().jwt
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // console.log('APP INIT')
    },
    // 刷新 MSG
    async freshMsg() {
        this.pina().refresh(this)
    },
  }
}
</script>