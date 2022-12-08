<template>
    <span v-if="mode != 2">{{ text }}</span>
    <span v-else>{{ text2 }}</span>
</template>

<script>
import moment from 'moment'
export default {
    props: [ '_timed', 'mode' ],
    computed: { 
        // 文字結果
        text() {
            const tt = moment(this._timed)
            if (this.is_today(tt)) { return '今天 '} 
            if (this.is_oiday(tt, 1)) { return '昨天'
            } else if (this.is_oiday(tt, 2)) { return '前天'
            } else if (this.is_oiday(tt, 3)) {
                return this.tooi_time.week_word(tt)
            } else if (this.is_oiday(tt, 4)) {
                return this.tooi_time.week_word(tt)
            } else if (this.is_oiday(tt, 5)) {
                return this.tooi_time.week_word(tt) } 
            return this.is_year(tt) ? 
                tt.format('yy-M-D ' + ' HH:mm') : 
                tt.format('M-D ' + ' HH:mm')
        },
        text2() {
            const tt = moment(this._timed)
            const mm = this.minute(tt)
            if (this.is_today(tt)) {
                return '今天 ' + mm} 
            if (this.is_oiday(tt, 1)) {
                return '昨天 ' + mm
            } else if (this.is_oiday(tt, 2)) {
                return '前天 ' + mm
            } else if (this.is_oiday(tt, 3)) {
                return this.tooi_time.week_word(tt) + ' ' + mm
            } else if (this.is_oiday(tt, 4)) {
                return this.tooi_time.week_word(tt) + ' ' + mm
            } else if (this.is_oiday(tt, 5)) {
                return this.tooi_time.week_word(tt) + ' ' + mm } 

            let hh = tt.format('HH'); hh = hh ? Number.parseInt(hh) : ' 0'
            return this.is_year(tt) ? 
                tt.format('yy年M月D日') : tt.format('M月D日 ' + (hh ? hh : '0') + '點')
        }
    },
    methods: {
        // 是否今年之前
        is_year(m) { return m.year() < moment().year() },
        // 是否是 幾天前
        is_oiday(m, add = 0) {
            return this.is_today(moment(m).add(add, 'days'))
        }, 
        // 判斷是否今天
        is_today(m) {
            return m.format('yyyy-MM-DD') == moment().format('yyyy-MM-DD')
        },
        // 獲取分鐘的 展示格式
        minute(m) { return m.format('HH:mm') }
    }
}
</script>

<style>

</style>