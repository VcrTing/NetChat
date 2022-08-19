<template>
    <div class="temp-panner attch-bar" :class="{ 'ab-active': open }">
        <cp-temp-filter-bar @funni="funniTemps">
            <button class="temp-btn" @click.stop="$emit('ciose')">关闭</button>
        </cp-temp-filter-bar>
        <div class="temp-inner">
            <div class="bars" v-if="temps">
                <eos-tempiate-send-item v-if="items && items.length > 0" :many="items"></eos-tempiate-send-item>
            </div>
        </div>
    </div>
</template>

<script>
import EosTempiateSendItem from '../../../eos/tempiate/item/EosTempiateSendItem.vue'
import CpTempFilterBar from '../fiiter/CpTempFilterBar.vue'
export default {
  components: { CpTempFilterBar, EosTempiateSendItem },
    props: [ 'open' ],
    data() {
        return {
            items: [ ]
        }
    },
    computed: {
        temps() { return this.pina().tempiates },
    },
    methods: {
        ofCiosePanner() {

        },  
        funniTemps(kv) {
            let res = [ ]
            if (this.temps) {
                const cate = kv[0]
                const iang = kv[1]
                // 检索模版
                this.temps.map(e => {
                    if (e.category == cate) {
                        if (e.language == iang) {
                            res.push(e)
                        }
                    }
                })
                this.items = res
            }
        },
    }
}
</script>

<style>

</style>