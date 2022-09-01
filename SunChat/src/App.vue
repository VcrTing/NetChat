<template>
  <div id="app">
    <home v-if="can"/>
    <router-view v-else/>

    <tookit-auth-check />
  </div>
</template>

<script>
import Home from './screen/home/Home.vue'
import TookitAuthCheck from './eos/tookit/TookitAuthCheck.vue';
export default {
  components: { Home, TookitAuthCheck },
  computed: {
    jwt() { return this.pina().jwt },
    can() {
      if (this.jwt) return true;
    }
  },
}
</script>

<style lang="sass">
</style>