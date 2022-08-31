<template>
    <div class="chat-user-paner">
        <eos-user-room-filter @search="searchUser" @sort="() => reverse = !reverse"></eos-user-room-filter>
        <div v-if="has_room">
            <div @click="change(v)" v-for="(v, i) in contacts" :key="i">
                <eos-user-room-card v-if="v" :chatter="v" :msgs="getMsgs(v)"></eos-user-room-card>
            </div>
        </div>
        <eos-empty-conact v-else></eos-empty-conact>
    </div>
</template>

<script>
import EosUserRoomCard from '../../../../eos/user/room/EosUserRoomCard.vue'
import EosUserRoomFilter from '../../../../eos/user/filter/EosUserRoomFilter.vue'
import EosEmptyConact from '../../../../eos/shimmer/empty/EosEmptyConact.vue'

export default {
  components: { EosUserRoomCard, EosUserRoomFilter, EosEmptyConact },
    data() {
        return {
            reverse: false,
            search: ''
        }
    },
    methods: {
        searchUser(q) {
            console.log('筛选 =', q)
        },  
        change(chr) {
            const ph_oid = chr.phone_number // 
            if (ph_oid != this.chatter.phone_number) {
                this.pina().change_chatter( ph_oid )
            }
        },

        // 根据用户 contact   
        getMsgs(uu) {
            let src = uu ? uu.phone_number : ''
            let res = undefined
            for (let k in this.rooms) {
                if (k == src) {
                    res = this.rooms[k].msgs
                }
            }; return res ? res : [ ]
        },
        
        // 给用户增加 排序
        setOrder(cts) {
            return cts.map((e, i) => { e.order = e.order ? e.order : i; return e })
        }
    },
    mounted() {
        console.log(this.contacts)
    },
    computed: {
        users() {
            let res = [ ]

        },

        // 所有聊天
        rooms() { return this.pina().rooms },
        // 
        chatter() { return this.pina().chatter },
        // 所有联络人
        contacts() { 
            let res = [ ]
            for (let k in this.rooms) { res.push(this.rooms[k].chatter) }
            // 增加 ORDER
            res = res ? res.map((e, i) => { e.order = i; return e }) : [ ]

            // 依附 SORT
            return res.sort((n, o) => this.reverse ? (o.order - n.order) : (n.order - o.order))
        },

        has_room() { 
            let res = true
            if (JSON.stringify(this.rooms) == '{}') { res = false }
            return res },
    }
}
</script>

<style>

</style>