<template>
    <div class="fs_s sub fix-tip">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="_fix-tip t-r">{{ night }}</span>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'one', 'is_media', '_is_me' ],
    computed: {

        night() {
            let mt = this.one.date_time
            mt = mt ? moment( this.one.date_time ) : moment()
            let _ap = Number.parseInt( mt.format('HH') )
            if (_ap <= 12) { _ap = '上午' }
            else if (18 > _ap && _ap > 12) { _ap = '下午' }
            else if (_ap >= 18) { _ap = '晚上' }
            return _ap + mt.format('h:m')
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
        left: 0px
        width: 6.12em
        padding-right: 11px
</style>