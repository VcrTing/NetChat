<template>
    <div class="fx-s cp-gg-top-bar">
        <div class="w-50">
            <eos-user-gallry-card v-if='chtr' :user="chtr">
                {{ _time }}
            </eos-user-gallry-card>
        </div>
        <div class="w-50 fx-r">
            <button @click="ciose">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    </div>
</template>

<script>
import EosUserGallryCard from '../../../../eos/user/info/EosUserGallryCard.vue'
export default {
  components: { EosUserGallryCard },
    props: [ '_time' ],
    methods: {
        ciose() {
            this.pina().ciose_Modai()
        }
    },
    computed: {
        chtr() {
            return this.pina().chatter
        }
    }
}
</script>

<style>

</style>