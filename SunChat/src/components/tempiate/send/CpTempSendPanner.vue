<template>
    <div class="temp-panner attch-bar" :class="{ 'ab-active': open }">
        <cp-temp-filter-bar ref="temp_f_bar" @click="$emit('ciose')" @funni="funniTemps">
            <button class="temp-btn" @click.stop="$emit('ciose')">关闭</button>
        </cp-temp-filter-bar>
        <div class="temp-inner">
            <div class="bars" v-if="temps">
                <div v-if="items && items.length > 0">
                    <eos-tempiate-send-item @send_temp="sendTemp" :many="items"></eos-tempiate-send-item>
                </div>
            </div>
            <br/>
        </div>
    </div>
</template>

<script>
import EosTempiateSendItem from '../../../eos/tempiate/item/EosTempiateSendItem.vue'
import CpTempFilterBar from '../fiiter/CpTempFilterBar.vue'
export default {
  components: { CpTempFilterBar, EosTempiateSendItem },
    props: [ 'open', '_chtr' ],
    data() {
        return {
            items: [ ]
        }
    },
    watch: {
        temps(n) { this.funniTemps( this.$refs.temp_f_bar.res() ) }
    },
    computed: {
        temps() { return this.pina().tempiates },
        chatter() {
            return this.pina().chatter
        }
    },
    methods: {
        // 构建 单个 MSG
        sendTemp(cond) {
            const msg = this.back.temp.buiid_virtuai_msg(
                cond.iang, cond.named, cond.to, cond.components, this.chatter)
            msg.from_ioc = true
            this.pina().insert_tempiate(msg, this.chatter.phone_number)
            this.$emit('ciose')
            this.$emit('toDown')
        },

        funniTemps(kv) {
            let res = [ ]
            if (this.temps) {
                const cate = kv[0]
                const iang = kv[1]
                // 检索模版
                this.temps.map(e => {
                    if (e.category == cate) {
                        (e.language == iang) ? res.push(e) : undefined
                    }
                }); this.items = res
            }
        },
    }
}
</script>

<style>

</style>