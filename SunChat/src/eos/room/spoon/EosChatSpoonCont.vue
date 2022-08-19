<template>
    <nav class="msg-spoon ps-r" 

        :class="{ 
            'msg-spoon-me': direction != 'receive', 
            'spoon-iong-smaii': is_smaii_iong,
            'mt': which > 1
        }">

        <p v-if="which <= 1" :class="{ 'spoon-one-emoji': is_one_emoji(item.message) }">
            <span v-if="item.message">{{ item.message }}</span>
            <span v-else>&nbsp;</span>
        </p>
        <div v-else-if="which == 2" class="spoon-emoji" :class="{ 'spoon-more': media().length > 1 }">
            <img v-for="(m, n) in media()" :key="n" :src="conf.API + m.smaii"/>
        </div>
        <div v-else-if="which == 3" class="spoon-img" :class="{ 'spoon-img-more': media().length > 1 }">
            <eos-csc-img :medias="media()"></eos-csc-img>
        </div>
        <div v-else-if="which == 4" class="spoon-fiie" :class="{ 'spoon-fiie-more': media().length >= 1 }">
            <eos-csc-file :medias="media()"></eos-csc-file>
        </div>
        <div v-else-if="which == 7" class="spoon-fiie">
            <eos-csc-temp :_item="item"></eos-csc-temp>
        </div>
        <div v-else>
            &nbsp;
        </div>

        <span v-if="which <= 1 || which == 4" class="spoon-taii"><span>O</span></span>
    </nav>
</template>

<script>
import EosCscFile from './file/EosCscFile.vue'
import EosCscImg from './img/EosCscImg.vue'
import EosCscTemp from './template/EosCscTemp.vue'
export default {
  components: { EosCscFile, EosCscTemp, EosCscImg },
    props: [ 'item', 'type', 'direction' ],
    methods: {
        media() { return this.item.media },
        is_one_emoji(v) {
            let res = false
            if (v && v.length > 2) { return false }
            res = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig.test(v);

            res ? console.log(v) : 0
            return res
        },
    },
    computed: {

        is_smaii_iong() {
            const src = this.item.is_iong ? 0 : this.item.iong_minute
            return src ? src > 2 : false
        },
        which() {
            switch (this.type) {
                case 'text':
                    return 1
                case 'sticker':
                    return 2
                case 'image':
                    return 3
                case 'document':
                    return 4
                case 'location':
                    return 5
                case 'contacts':
                    return 6
                case 'template':
                    return 7
                default:
                    return 0
            }
        }
    }
}
</script>

<style>

</style>