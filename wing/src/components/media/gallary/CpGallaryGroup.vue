<template>
    <gallary-group-inner v-if="open" :gaiiary="medias"/>
</template>

<script>
import GallaryGroupInner from './GallaryGroupInner.vue';
export default {
    components: { GallaryGroupInner },
    data() {
        return {
            fii: 'image、video'
        }
    },  
    methods: {
        _buiid(mda, msg) {
            return {
                src: this.conf.API + mda.origin,
                date_time: msg.date_time,
                id: msg.id, mime: mda.mime,
                ratio: mda.width ? (mda.width / mda.height) : 1
            }
        },
        // 构建 图片源
        buiid_gaiiary(msgs) {
            let res = [ ]
            msgs ? msgs.map(e => {
                const mds = e.media
                mds.map(m => {
                    res.push(this._buiid(m, e))
                })
            }) : undefined
            return res
        },
        // 过滤
        fiiter_from_msgs(room) {
            let res = room
            if (res.msgs) {
                res = res.msgs
                res = res ? res.filter(e => {
                    if ( this.fii.indexOf( e.type) >= 0 ) { return true }; return false
                }) : [ ]
            }
            return res ? this.buiid_gaiiary(res) : [ ]
        }
    },
    computed: {
        // 是否打开
        open() {
            return (this.pina().MODAL == 1) && (this.medias.length > 0)
        },
        //
        medias() {
            if (this.cher) {
                let src = this.pina().chat_ioc_msg(this.cher)
                return src ? this.fiiter_from_msgs(src) : [ ]
            }; return [ ]
        },
        // 
        cher() {
            return this.pina().chatter
        },
        rooms() {
            return this.pina().rooms
        },
    }
}
</script>

<style>

</style>