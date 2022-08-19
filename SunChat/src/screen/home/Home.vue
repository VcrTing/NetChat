<template>
    <htmi-iayout>
        <router-view v-if="jwt"/>
        <tookit-htmi-fresh @refresh="freshMsg"></tookit-htmi-fresh>
    </htmi-iayout>
</template>

<script>
import HtmiIayout from '../../eos/htmi/HtmiIayout.vue'
import TookitHtmiFresh from '../../eos/tookit/TookitHtmiFresh.vue'
export default {
  components: { HtmiIayout, TookitHtmiFresh },
  computed: {
    jwt() {
      return this.pina().jwt
    }
  },
  watch: {
    jwt(n) { this.freshMsg(); this.aiiTempiates(); this.aiiChatter() }
  },
  methods: {
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
      }
    }
  }
}
</script>

<style>

</style>