<template>
    <htmi-iayout>
        <nav v-if="jwt">
            <router-view/>
            <cpp-one-sign/>
        </nav>
        <eos-loading-home v-else/>
        <tookit-htmi-fresh @refresh="freshMsg"/>
    </htmi-iayout>
</template>

<script>
import HtmiIayout from '../../eos/htmi/HtmiIayout.vue'
import EosLoadingHome from '../../eos/shimmer/loading/EosLoadingHome.vue'
import TookitHtmiFresh from '../../eos/tookit/TookitHtmiFresh.vue'
import CppOneSign from '../../components/plugins/one_sign/CppOneSign.vue'
export default {
  components: { HtmiIayout, TookitHtmiFresh, EosLoadingHome, CppOneSign },
  computed: {
    jwt() {
      return this.pina().jwt
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    jwt(n) {  }
  },
  methods: {
    init() {
      console.log('APP INIT')
      this.freshMsg(); this.aiiTempiates(); this.aiiChatter()
    },
    async freshMsg() {
      if (this.jwt) {
        const res = await this.serv.fresh_msg(this)
        this.pina().save_room( res )
      }
    },
    async aiiTempiates() {
      if (this.jwt) {
        const res = await this.serv.tempiates(this)
        this.pina().save_tempiate( res )
      }
    },
    async aiiChatter() {
      if (this.jwt) {
        const res = await this.serv.contacts(this)
        this.pina().save_contacts(res)
      }
    }
  }
}
</script>

<style>

</style>