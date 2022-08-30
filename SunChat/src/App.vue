<template>
  <home v-if="jwt"/>
  <router-view v-else/>
</template>

<script>
import Home from './screen/home/Home.vue'
export default {
  components: { Home },
  async created() {
    
  },
  mounted(){
    if (!this.jwt) {
      this.$router.push('/login')
    }
  },
  computed: {
    jwt() { 
      return this.pina().jwt
    }
  },
  methods: {
    async init() {

    },
    async admin() {
      await this.serv.iogin(
        this,
        this.conf.STRAPI.named,
        this.conf.STRAPI.pass
      )
    }
    // 提醒功能对接
  }
}
</script>

<style lang="sass">
.jwt
  position: fixed
  z-index: 999
  bottom: 0
  background: #FFF
</style>