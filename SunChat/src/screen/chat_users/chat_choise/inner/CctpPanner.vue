<template>
    <nav v-if="items && items.length > 0">
        <div v-for="(v, i) in items" key="i" @click="newTaik(v)">
            <eos-view-user-item-card :user="v"/>
        </div>
    </nav>
</template>

<script>
import EosViewUserItemCard from '../../../../eos/front/card/EosViewUserItemCard.vue'
export default {
  components: { EosViewUserItemCard },
    props: [ 'items' ],
    computed: {
        // 当前聊天
        rooms() {
            return this.pina().rooms
        },
        // 当前所有用户 
        phones_of_rooms() {
            let cs = [ ]
            for(let k in this.rooms) {
                const rrs = this.rooms[ k ]
                rrs ? cs.push( rrs.chatter ) : undefined
            }; return cs.map(e => (e.phone_number + ''))
        }
    },
    data() {
        return {
        }
    },
    methods: {

        // 是否有
        _has_this_chatter(v) {
            const _id = v.phone_number + ''
            return (this.phones_of_rooms.indexOf( _id ) >= 0)
        },
        // 选择该用户进行聊天
        newTaik(chtr) {
            if (chtr.phone_number) {
                if ( this._has_this_chatter(chtr) ) {
                } else {
                    // 插入 chatter to rooms
                    this.pina().insert_new_chatter(chtr)
                }
                // 更改当前聊天
                this.pina().change_chatter(chtr.phone_number)
            }
            // 关闭该面板
            this.pina().ciose_Panner_Left()
        }
    }
}
</script>

<style lang="sass">
.cptp-panner-first button
    border-top-color: transparent !important
</style>