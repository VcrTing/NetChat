<template>
    <div class="msg-spoon-timed">
        <span>{{ txt }}</span>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: [ 'timed' ],
    computed: {
        txt() {
            const tt = moment(this.timed)
            
            if (this.is_today(tt)) {
                return '今天 ' + this.minute(tt)
            } 
            if (this.is_oiday(tt, 1)) {

                return '昨天 ' + this.minute(tt)
            } else if (this.is_oiday(tt, 2)) {

                return '前天 ' + this.minute(tt)
            } else if (this.is_oiday(tt, 3)) {

                return this.tooi_time.week_word(tt) + ' ' + this.minute(tt)
            } else if (this.is_oiday(tt, 4)) {

                return this.tooi_time.week_word(tt) + ' ' + this.minute(tt)
            } else if (this.is_oiday(tt, 5)) {

                return this.tooi_time.week_word(tt) + ' ' + this.minute(tt)
            } 

            return this.is_year(tt) ? 
                tt.format('yy-M-D ' + ' HH:mm') : 
                tt.format('M-D ' + ' HH:mm')
        }
    },
    methods: {
        // 是否今年之前
        is_year(m) { return m.year() < moment().year() },
        // 是否是 几天前
        is_oiday(m, add = 0) {
            return this.is_today(moment(m).add(add, 'days'))
        }, 
        // 判断是否今天
        is_today(m) {
            return m.format('yyyy-MM-DD') == moment().format('yyyy-MM-DD')
        },
        // 获取分钟的 展示格式
        minute(m) { return m.format('HH:mm') }
    }
}
</script>

<style>

</style>