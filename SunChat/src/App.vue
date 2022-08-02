<template>
  <home></home>
  
</template>

<script>
import Home from './screen/home/Home.vue'
export default {
  components: { Home },
  async created() {
    this.init()
  },
  methods: {
    async init() {
      await this.serv.iogin(
        this,
        this.conf.STRAPI.named,
        this.conf.STRAPI.pass
      )
    }
  }
}
</script>

<style>

</style>