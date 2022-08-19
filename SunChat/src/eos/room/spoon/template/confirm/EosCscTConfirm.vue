<template>
    <div class="eos-csc-t eos-csc-t-confirm">
        <p class="t_confirm-cont">
            <div v-for="(v, i) in comps" :key="i">
                <div v-if="typed(v) != 3" :class="'t_confirm-' + v.type">{{ v.text }}</div>
            </div>
        </p>
        <div v-for="(v, i) in comps" :key="i">
            <div :class="'t_confirm-' + v.type" v-if="typed(v) == 3">
                <button v-for="(m, n) in v.buttons" :key="n">
                    {{ m.text }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'comps' ],
    mounted() {
        console.log('COMPS =', this.comps)
    },
    methods: {
        typed(v) {
            let res = 0
            if (v.type) {
                if (v.type == 'BUTTONS') {
                    res = 3
                }
            }; return res
        }
    }
}
</script>

<style>

</style>