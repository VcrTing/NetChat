<template>
  <home v-show="jwt"/>
  <router-view v-show="!jwt"/>
</template>

<script>
import Home from './screen/home/Home.vue'
export default {
  components: { Home },
  mounted() { this.is_auth() },
  computed: {
    jwt() { return this.pina().jwt }
  },
  methods: {
    is_auth() {
      (!this.jwt) ? this.$router.push('/login') : undefined
    },
    async init() { }
  }
}
</script>

<style lang="sass">
</style>