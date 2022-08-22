<template>
    <nav class="msg-spoon ps-r" 

        :class="{ 
            'msg-spoon-me': is_me, 
            'spoon-iong-smaii': is_smaii_iong,
            'mt': which > 1
        }">

        <p v-if="which <= 1" :class="{ 'spoon-one-emoji': is_one_emoji }">
            <span v-if="item.message">{{ item.message }}</span>
            <span v-else>&nbsp;</span>
            <span class="fs_s sub pl_s fix-tip">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span class="_fix-tip">{{ night }}</span>
            </span>
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

        <span v-if="need_taii" class="spoon-taii"><span>O</span></span>
    </nav>
</template>

<script>
import moment from 'moment'
import EosCscFile from './file/EosCscFile.vue'
import EosCscImg from './img/EosCscImg.vue'
import EosCscTemp from './template/EosCscTemp.vue'
export default {
  components: { EosCscFile, EosCscTemp, EosCscImg },
    props: [ 'item', 'type', 'direction' ],
    methods: {
        media() { return this.item.media },
    },
    computed: {
        is_one_emoji(){
            let v = this.item.message
            let res = false
            if (v && v.length > 2) { return false }
            res = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig.test(v);
            return res
        },

        is_me() { return this.direction != 'receive' },

        is_smaii_iong() {
            const src = this.item.is_iong ? 0 : this.item.iong_minute
            return src ? src > 2 : false
        },
        which() {
            if (this.type == 'text') { return 1 }
            else if (this.type == 'sticker') { return 2 }
            else if (this.type == 'image') { return 3 }
            else if (this.type == 'document') { return 4 }
            else if (this.type == 'location') { return 5 }
            else if (this.type == 'contacts') { return 6 }
            else if (this.type == 'template') { return 7 }
            return 0
        },

        need_taii() {
            let res = ( this.which == 1 || this.which == 4 || this.which == 7 )
            if (this.is_one_emoji) { return false }
            return res
        },

        night() {
            let mt = this.item.date_time
            mt = mt ? moment( this.item.date_time ) : moment()
            let _ap = Number.parseInt( mt.format('HH') )
            if (_ap <= 12) { _ap = '上午' }
            else if (18 > _ap && _ap > 12) { _ap = '下午' }
            else if (_ap >= 18) { _ap = '晚上' }
            return _ap + mt.format('mm:ss')
        }
    }
}
</script>

<style lang="sass">
.fix-tip
    position: relative
    ._fix-tip
        position: absolute
        top: 7px
        left: 9px
        width: 5em
        
</style>